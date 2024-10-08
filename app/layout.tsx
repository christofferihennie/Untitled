import type { Metadata } from "next";
import { Public_Sans, Playfair_Display } from 'next/font/google';
import "./globals.scss";

export const metadata: Metadata = {
  title: "Untitled",
  description: "The untitled bok app",
};

const public_sans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public-sans',
  display: 'swap',
});

const playfair_display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={`${playfair_display.variable} ${public_sans.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="favicon/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="favicon/favicon.svg" />
        <link rel="shortcut icon" href="favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Untitled" />
      </head>
      <body>
        <nav>Hei</nav>
        {children}
      </body>
    </html>
  );
}
