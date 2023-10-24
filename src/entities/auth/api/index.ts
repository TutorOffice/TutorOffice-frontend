import { Register, RegisterResponse } from '@/entities/auth/model'
import { commonApi } from '@/shared/api'

export const REGISTRATION_URL = '/register'

export const authApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation<RegisterResponse, Register>({
      query: (data) => ({
        url: REGISTRATION_URL,
        method: 'POST',
        body: data,
      }),
    }),
  }),
})
export const { useRegistrationMutation } = authApi
