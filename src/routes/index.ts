import { Home } from '@/enums/routes';

import type { RouteType } from '@/interface/router';

const routes: RouteType[] = [
  {
    path: Home.BASE,
    name: '首页',
    phoneName: '首页',
  },
  {
    path: Home.ABOUT,
    name: '关于我们',
    phoneName: '关于我们',
  },
];
export default routes;
