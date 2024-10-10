'use client';

import Header from '@/components/header';
import styles from '@/styles/pages/login.module.scss';
import { useFormState } from 'react-dom';
import { login, signUp } from './actions';

const initialState: any = {
    code: '',
    message: '',
};

export default function LoginPage() {
    const [state, loginAction] = useFormState(login, initialState);

    return (
        <>
            <Header heading="Velkommen!" subheading="Logg inn eller lag bruker" />
            <div className={styles.center}>
                <form className={styles.form}>
                    <div className={styles.email}>
                        <label htmlFor="email">E-post:</label>
                        <input id="email" name="email" type="email" required />
                    </div>
                    <div className={styles.password}>
                        <label htmlFor="password">Passord:</label>
                        <input id="password" name="password" type="password" required />
                        <button></button>
                    </div>
                    <div className={styles.buttons}>
                        <button formAction={loginAction} className={styles.login}>
                            Logg inn
                        </button>
                        <button formAction={signUp} className={styles.signUp}>
                            Lag bruker
                        </button>
                    </div>
                </form>
                {state?.code ? (
                    <p className={styles.error_message}>
                        {state.code}: {state.message}
                    </p>
                ) : (
                    ''
                )}
            </div>
        </>
    );
}
