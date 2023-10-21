export interface IFormValues {
  firstName: string
  lastName: string
  email: string
  patronymic: string
  password: string
  phone: string
  subject?: string
  feedbackMessage: string
  role: string
  policy: boolean
}

export interface RegisterForm {
  firstName: string
  lastName: string
  email: string
  patronymic: string
  password: string
  confirmPassword: string
  phone: string
  userRole: string
  policy: boolean
}
