export interface RegisterResponse {
  response: string
}

export interface Register {
  first_name: string
  last_name: string
  patronymic_name: string
  email: string
  phone: string
  password: string
  password2: string
  is_teacher: boolean
}
