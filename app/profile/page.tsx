import Header from '@/components/header';
import { createClient } from '@/utils/supabase/server';
import { signOutAction } from '@/app/(auth)/login/actions';

export default async function LibraryPage() {
    const supabase = createClient();

    const { data: user } = await supabase.from('user').select('firstname').single();

    return (
        <div>
            <Header
                heading='Din Profil'
                subheading={`Alle dine innstillinger ${user!.firstname}`}
            />
            <form action={signOutAction}>
                <button type='submit'>Log ut</button>
            </form>
        </div>
    );
}
