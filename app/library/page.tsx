import Header from '@/components/header';
import styles from '@/styles/pages/library.module.scss';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function LibraryPage() {
    return (
        <div>
            <Header
                heading='Ditt bibliotek'
                subheading='Alle dine bøker på et sted'
                sideItem={
                    <Link href='/library/search' className={styles.search_link}>
                        <MagnifyingGlassIcon className={styles.search_icon} />
                    </Link>
                }
            />
            <h1>Dette er Bibliotek</h1>
        </div>
    );
}
