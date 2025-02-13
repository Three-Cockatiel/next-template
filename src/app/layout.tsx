import BaseLayout from '@/components/layout';
import SeoHead from '@/components/seo-header';
import { HeroUIProvider } from '@heroui/react';

import '../styles/globals.css';

import type { ReactNode } from 'react';

export default function RootLayout(props: { children: ReactNode }) {
  const { children } = props;

  return (
    <html>
      <SeoHead />
      <body>
        <HeroUIProvider>
          <BaseLayout>{children}</BaseLayout>
        </HeroUIProvider>
      </body>
    </html>
  );
}
