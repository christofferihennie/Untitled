import type { Metadata } from 'next';
import { Public_Sans, Playfair_Display } from 'next/font/google';
import '@/styles/globals.scss';
import Navigation from '@/components/navigation';

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
        <html lang='no' className={`${playfair_display.variable} ${public_sans.variable}`}>
            <head>
                <link rel='icon' type='image/png' href='favicon/favicon-48x48.png' sizes='48x48' />
                <link rel='icon' type='image/svg+xml' href='favicon/favicon.svg' />
                <link rel='shortcut icon' href='favicon/favicon.ico' />
                <link rel='apple-touch-icon' sizes='180x180' href='favicon/apple-touch-icon.png' />
                <meta name='apple-mobile-web-app-title' content='Untitled' />
            </head>
            <body>
                <Navigation />
                <main className='border'>{children}</main>
            </body>
        </html>
    );
}
