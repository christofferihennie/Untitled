import styles from '@/styles/components/header.module.scss';

export default function Header({
    heading,
    subheading,
    sideItem,
}: {
    heading: string;
    subheading: string;
    sideItem?: React.ReactNode;
}) {
    return (
        <header className={styles.header}>
            <div className={styles.text}>
                <h1 className={styles.heading}>{heading}</h1>
                <h2 className={styles.subheading}>{subheading}</h2>
            </div>
            <div className={styles.side}>{sideItem}</div>
        </header>
    );
}
