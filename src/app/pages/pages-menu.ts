import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'ion-android-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  // YOU CAN USE THIS FOR TASK TWO IF YOU LIKE!!
  {
    title: 'Pomodoro',
    icon: 'ion-android-stopwatch',
    link: '/pages/pomodoro'
  },
];
