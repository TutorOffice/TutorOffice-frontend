import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { withBaseApiUrl } from '@/shared/utils/withBaseApiUrl'

import { Tokens } from './tokens'
import { clearTokens, setTokens } from './tokensSlice'

const baseQuery = fetchBaseQuery({
  baseUrl: withBaseApiUrl(''),
  prepareHeaders: (headers, api) => {
    const state = api.getState() as RootState

    if (state.tokens.access) {
      headers.set('Authorization', `Bearer ${state.tokens.access}`)
    }

    return headers
  },
})

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    const state = api.getState() as RootState

    if (state.tokens.refresh) {
      const { data: refreshData } = await baseQuery(
        {
          url: '/refresh',
          body: { refreshToken: state.tokens.refresh },
          method: 'POST',
        },
        api,
        extraOptions,
      )

      if (refreshData) {
        api.dispatch(setTokens(refreshData as Tokens))
        return await baseQuery(args, api, extraOptions)
      }
    }

    api.dispatch(clearTokens())
  }

  return result
}

export const commonApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
})
