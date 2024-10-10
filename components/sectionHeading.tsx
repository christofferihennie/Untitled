import styles from '@/styles/components/sectionHeader.module.scss';
import { Route } from 'next';
import Link from 'next/link';

export default function SectionHeading<T extends string>({
    heading,
    subheading,
    leftLink: { href, text },
}: {
    heading: string;
    subheading: string;
    leftLink: {
        href: Route<T> | URL;
        text: string;
    };
}) {
    return (
        <header className={styles.header}>
            <div className={styles.text}>
                <h1 className={styles.heading}>{heading}</h1>
                <h2 className={styles.subheading}>{subheading}</h2>
            </div>
            <div className={styles.side}>
                <Link href={href} className={styles.link}>
                    {text}
                </Link>
            </div>
        </header>
    );
}
