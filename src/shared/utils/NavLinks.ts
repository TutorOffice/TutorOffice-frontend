interface ILinkItem {
  text: string;
  link: string;
}

export const navLinksAuth: ILinkItem[] = [
  {
    text: 'Главная',
    link: '/',
  },
  {
    text: 'О проекте',
    link: '/about',
  },
  {
    text: 'Профиль',
    link: '/profile',
  },
  {
    text: 'Расписание',
    link: '/calendar',
  },
  {
    text: 'Ученики',
    link: '/students',
  },
  {
    text: 'Учебные материалы',
    link: '/educational-materials',
  },
  {
    text: 'Домашние задания',
    link: '/homework',
  },
  {
    text: 'Обратная связь',
    link: '/feedback',
  },
];

export const navLinks: ILinkItem[] = [
  {
    text: 'Главная',
    link: '/',
  },
  {
    text: 'О проекте',
    link: '/about',
  },
  {
    text: 'Обратная связь',
    link: '/feedback',
  },
];
