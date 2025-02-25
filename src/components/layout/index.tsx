/**
 * @description layout
 * @author Huang Wenjie
 * @createDate 2024-05-07
 */

import Footer from './components/layout-footer';
import Nav from './components/layout-nav';

import type { ReactNode } from 'react';
interface PropsType {
  children: ReactNode;
}

const Layout: React.FC<PropsType> = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
