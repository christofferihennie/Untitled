import Navigation from '@/components/navigation';
import '@/styles/globals.scss';
import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Public_Sans } from 'next/font/google';

export const metadata: Metadata = {
    title: 'Untitled',
    description: 'The untitled bok app',
    robots: {
        index: false,
        follow: false,
        nocache: true,
    },
    appleWebApp: {
        title: 'Untitled',
        statusBarStyle: 'black-translucent',
        startupImage: [
            'favicon/iPhone_16_Plus__iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_portrait.png',
            {
                url: 'favicon/iPhone_16_Plus__iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_portrait.png',
                media: '(device-width: 768px) and (device-height: 1024px)',
            },
        ],
    },
    icons: {
        icon: 'favicon/favicon-32x32.png',
        apple: 'favicon/apple-touch-icon.png',
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
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
            <body>
                <Navigation />
                <main className="border">{children}</main>
            </body>
        </html>
    );
}
