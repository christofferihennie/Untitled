'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

export async function login(_previousState: any, formData: FormData) {
    const supabase = createClient();

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    };

    const { error } = await supabase.auth.signInWithPassword(data);

    if (error) {
        return {
            code: error.status,
            message:
                error.code == 'invalid_credentials'
                    ? 'Brukernavn eller passord er feil.'
                    : 'Det oppsto en feil prøv igjen senere',
        };
    }

    revalidatePath('/', 'layout');
    redirect('/');
}

export async function signUp(formData: FormData) {
    const supabase = createClient();

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    };

    const { error } = await supabase.auth.signUp(data);

    if (error) {
        redirect('/error');
    }

    revalidatePath('/', 'layout');
    redirect('/');
}

export async function signOutAction() {
    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect('/sign-in');
}
