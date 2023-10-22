import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Tokens, TokensLocalStorage } from './tokens'

interface TokenState {
  access: string | null
  refresh: string | null
}

const initialState: TokenState = TokensLocalStorage.get()

export const TokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setTokens: (state, action: PayloadAction<Tokens>) => {
      state.access = action.payload.access
      state.refresh = action.payload.refresh
    },
    clearTokens: (state) => {
      state.access = null
      state.refresh = null
    },
  },
})

export const setTokens = (tokens: Tokens) => (dispatch: AppDispatch) => {
  dispatch(TokenSlice.actions.setTokens(tokens))
  TokensLocalStorage.set(tokens)
}

export const clearTokens = () => (dispatch: AppDispatch) => {
  dispatch(TokenSlice.actions.clearTokens())
  TokensLocalStorage.clear()
}

export default TokenSlice.reducer
