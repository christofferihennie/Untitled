import Navigation from '@/components/navigation';
import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { Playfair_Display, Public_Sans } from 'next/font/google';

export const metadata: Metadata = {
    title: 'Untitled',
    description: 'The untitled bok app',
};

const public_sans = Public_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-public-sans',
});

const playfair_display = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-playfair-display',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="no" className={`${playfair_display.variable} ${public_sans.variable}`}>
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
                <link rel="manifest" crossOrigin="use-credentials" href="/manifest.json" />
            </head>
            <body>
                <Navigation />
                <main className="border">{children}</main>
            </body>
        </html>
    );
}
