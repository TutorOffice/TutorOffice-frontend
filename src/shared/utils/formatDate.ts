export const formatDate: (date: string) => string = (date) => {
  const newDate = date.toLowerCase().split(' ')
  const month = newDate[1]

  const months: { [key: string]: string } = {
    январь: 'января',
    февраль: 'февраля',
    март: 'марта',
    апрель: 'апреля',
    май: 'мая',
    июнь: 'июня',
    июль: 'июля',
    август: 'августа',
    сентябрь: 'сентябрь',
    октябрь: 'октября',
    ноябрь: 'ноября',
    декабрь: 'декабря',
  }

  newDate[1] = months[month]
  return newDate.join(' ')
}
