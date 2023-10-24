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
  first_name: string
  last_name: string
  patronymic_name: string
  email: string
  phone: string
  password: string
  password2: string
  is_teacher: string
}
