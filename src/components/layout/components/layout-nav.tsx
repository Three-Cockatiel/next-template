/**
 * @description 导航
 * @author Huang Wenjie
 * @createDate 2024-05-07
 */

import Link from 'next/link';

import useRouterList from '@/hooks/useRouterList';

export default function Nav() {
  const routes = useRouterList();
  return (
    <header>
      {routes.map((route) => (
        <Link key={route.path} href={route.path}>
          {route.name}
        </Link>
      ))}
    </header>
  );
}
