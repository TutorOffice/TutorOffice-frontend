export const cyrillicPattern = /^[\u0400-\u04FF]+$/
export const cyrillicLatinPattern = /^[a-zа-я]+$/giu

export const passwordPattern = {
  min: 6,
  number: /(?=.*[0-9])/g,
  special: /(?=.*[!@#$%-&*_-])/g,
  latin: /(?=.*[a-z])/g,
  upperCase: /(?=.*[A-Z])/g,
  valid: /[0-9a-zA-Z!@#$%-&*_-]{6,}/g,
}

export const passwordMessages = {
  min: 'Пароль должен содержать минимум 7 символов',
  number: 'Пароль должен содержать хотя бы один спецсимвол',
  special: 'Пароль должен содержать хотя бы один спецсимвол',
  latin: 'Пароль должен содержать только латинские буквы',
  upperCase: 'Пароль должен содержать хотя бы одну заглавную букву',
  valid: 'Введите валидный пароль',
  mismatch: 'Пароли не совпадают',
  required: 'Введите пароль',
}

export const lastNameMessages = {
  required: 'Введите фамилию',
  incorrect: 'Фамилия указана некорректно',
}

export const firstNameMessages = {
  required: 'Введите имя',
  incorrect: 'Имя указано некорректно',
}

export const patronymicMessages = {
  required: 'Введите отчество',
  incorrect: 'Отчество указано некорректно',
}

export const emailMessages = {
  required: 'Введите E-mail',
  incorrect: 'E-mail введен некорректно. Пример: example@domain.ru',
}

export const phoneMessages = {
  required: 'Введите номер телефона',
  incorrect: 'Номер телефона указано некорректно',
}
