import { Home } from '@/enums/routes';

import type { RouteType } from '@/interface/router';

const routes: RouteType[] = [
  {
    path: Home.BASE,
    name: '首页',
    phoneName: '首页',
  },
];
export default routes;
