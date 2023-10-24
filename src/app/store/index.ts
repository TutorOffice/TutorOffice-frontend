import { configureStore } from '@reduxjs/toolkit'

import { commonApi, TokensSlice } from '@/shared/api'

export const createStore = () =>
  configureStore({
    reducer: {
      tokens: TokensSlice,
      [commonApi.reducerPath]: commonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(commonApi.middleware),
  })

export const store = createStore()
