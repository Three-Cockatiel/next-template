'use client';

import { usePathname } from 'next/navigation';

import useRouterList from '@/hooks/useRouterList';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@heroui/react';

/**
 * @description 导航
 * @author Huang Wenjie
 * @createDate 2024-05-07
 */

export default function Nav() {
  const routes = useRouterList();

  const pathname = usePathname();

  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
          <path
            clipRule="evenodd"
            d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="flex gap-4" justify="center">
        {routes.map((route) => (
          <NavbarItem key={route.path} isActive={pathname === route.path}>
            <Link
              href={route.path}
              {...(route.path === pathname ? { 'aria-current': 'page' } : { color: 'foreground' })}
            >
              {route.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
