export interface Tokens {
  access: string
  refresh: string
}

export class TokensLocalStorage {
  static get = () => ({
    access: localStorage.getItem('accessToken'),
    refresh: localStorage.getItem('refreshToken'),
  })

  static set = (tokens: Tokens) => {
    localStorage.setItem('accessToken', tokens.access)
    localStorage.setItem('refreshToken', tokens.refresh)
  }

  static clear = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
  }
}
