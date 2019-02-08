import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'nb-e-commerce',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Task 2 - Like This',
    icon: 'nb-home',
    link: '/pages/iot-dashboard',
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
