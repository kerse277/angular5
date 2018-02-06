import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },


  {
    title: 'Users',
    icon: 'nb-tables',
    children: [
      {
        title: 'User List',
        link: '/pages/users/user-list',
      },
      {
        title: 'Create User',
        link: '/pages/users/create-user',
      },
    ],
  },
];
