'use client';

import styles from '@/styles/components/navigation.module.scss';
import {
    ChartBarIcon as ChartOutline,
    HomeIcon as HomeOutline,
    BuildingLibraryIcon as LibraryOutline,
    UserIcon as UserOutline,
} from '@heroicons/react/24/outline';
import {
    ChartBarIcon as ChartSolid,
    HomeIcon as HomeSolid,
    BuildingLibraryIcon as LibrarySolid,
    UserIcon as UserSolid,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const pathRoot = usePathname().split('/')[1];
    return (
        <nav className={styles.navbar}>
            <NavItem
                name="Hjem"
                pathRoot={pathRoot}
                path=""
                solidIcon={HomeSolid}
                outlineIcon={HomeOutline}
            />
            <NavItem
                name="Bibliotek"
                pathRoot={pathRoot}
                path="library"
                solidIcon={LibrarySolid}
                outlineIcon={LibraryOutline}
            />
            <NavItem
                name="Statistikk"
                pathRoot={pathRoot}
                path="statistics"
                solidIcon={ChartSolid}
                outlineIcon={ChartOutline}
            />
            <NavItem
                name="Profil"
                pathRoot={pathRoot}
                path="profile"
                solidIcon={UserSolid}
                outlineIcon={UserOutline}
            />
        </nav>
    );
}

const NavItem = (props: {
    name: string;
    path: string;
    pathRoot: string;
    solidIcon: React.ComponentType<{
        className?: string;
    }>;
    outlineIcon: React.ComponentType<{
        className?: string;
    }>;
}) => {
    const isActive = props.pathRoot == props.path;

    return (
        <div className={styles.item}>
            <Link
                className={`${styles.link} ${isActive ? styles.active : ''}`}
                href={`/${props.path}`}>
                {isActive ? (
                    <props.solidIcon className={styles.icon} />
                ) : (
                    <props.outlineIcon className={styles.icon} />
                )}
                <span className={styles.text}>{props.name}</span>
            </Link>
        </div>
    );
};
