'use client';

import {
    HomeIcon as HomeOutline,
    BuildingLibraryIcon as LibraryOutline,
    ChartBarIcon as ChartOutline,
    UserIcon as UserOutline,
} from '@heroicons/react/24/outline';
import {
    HomeIcon as HomeSolid,
    BuildingLibraryIcon as LibrarySolid,
    ChartBarIcon as ChartSolid,
    UserIcon as UserSolid,
} from '@heroicons/react/24/solid';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from '@/styles/components/navigation.module.scss';

export default function Navigation() {
    const pathRoot = usePathname().split('/')[1];
    return (
        <nav className={styles.navbar}>
            <NavItem pathRoot={pathRoot} path='' solidIcon={HomeSolid} outlineIcon={HomeOutline} />
            <NavItem
                pathRoot={pathRoot}
                path='library'
                solidIcon={LibrarySolid}
                outlineIcon={LibraryOutline}
            />
            <NavItem
                pathRoot={pathRoot}
                path='statistics'
                solidIcon={ChartSolid}
                outlineIcon={ChartOutline}
            />
            <NavItem
                pathRoot={pathRoot}
                path='profile'
                solidIcon={UserSolid}
                outlineIcon={UserOutline}
            />
        </nav>
    );
}

const NavItem = (props: {
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
                <span className={styles.text}>Hjem</span>
            </Link>
        </div>
    );
};
