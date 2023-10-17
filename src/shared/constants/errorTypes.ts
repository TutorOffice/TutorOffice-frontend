import image401 from '@/assets/images/401.png'
import image404 from '@/assets/images/404.png'
import image400 from '@/assets/images/405.png'

export const errorTypes = [
  {
    id: 1,
    code: 400,
    title: 'Ошибка 400: неверный запрос к серверу',
    description: 'Введите адрес снова или повторите свой запрос позже.',
    imageUrl: image400,
  },
  {
    id: 2,
    code: 401,
    title: 'Ошибка 401: отказ в доступе',
    description:
      'Чтобы иметь доступ к данной странице, зайдите в свой аккаунт или зарегистрируйтесь.',
    imageUrl: image401,
  },
  {
    id: 3,
    code: 403,
    title: 'Ошибка 403: доступ запрещён',
    description: 'У Вас нет доступа к данной странице!',
    imageUrl: image401,
  },
  {
    id: 4,
    code: 404,
    title: 'Ошибка 404: запрашиваемая страница не найдена',
    description:
      'Обновите страницу или убедитесь в правильности вводимого URL-адреса',
    imageUrl: image404,
  },
  {
    id: 5,
    code: 405,
    title: 'Ошибка 405: некорректный запрос к серверу',
    description:
      'Проверьте правильность введённого адреса или перезагрузите страницу.',
    imageUrl: image400,
  },
]
