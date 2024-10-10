import { createClient } from '@/utils/supabase/server';
import styles from '@/styles/pages/index.module.scss';
import Header from '@/components/header';

const todayFormatted = () => {
    const date: Date = new Date();

    const months: string[] = [
        'januar',
        'februar',
        'mars',
        'april',
        'mai',
        'juni',
        'juli',
        'august',
        'september',
        'oktober',
        'november',
        'desember',
    ];

    return `${date.getDate()}. ${months[date.getMonth()]}, ${date.getFullYear()}`;
};

export default async function HomePage() {
    const supabase = createClient();
    const { data: user, error } = await supabase.from('user').select('firstname').single();

    const today = todayFormatted();

    return (
        <div className='main'>
            <Header heading={`God Morgen, ${user?.firstname}!`} subheading={`I dag er ${today}`} />
        </div>
    );
}
