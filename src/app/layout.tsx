import type { ReactNode } from 'react';
import type { Metadata }  from 'next';

import { GeistSans }      from 'geist/font/sans';
import { GeistMono }      from 'geist/font/mono';

import '@Styles/scale.css';
import '@Styles/normalize.css';
import '@Styles/base.css';
import '@Styles/mediaQueries.css';
import '@Styles/typography.css';
import '@Styles/layouts.css';
import '@Styles/themes.css';
import '@Styles/utilities.css';


const metadata: Metadata = {
  title:        'Full Stack AI Conference',
  description:  'Full Stack AI Conference',
  generator:    'Full Stack AI Conference',
}

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <style>@layer normalize, scale, typography, base, layouts, themes, utilities;</style>
      </head>

      <body>{children}</body>
    </html>
  )
}


export { metadata };
export default RootLayout;
