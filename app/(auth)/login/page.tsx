import { login, signUp } from './actions'

export default function LoginPage() {
    return (
        <form>
            <label htmlFor="email">Epost:</label>
            <input id="email" name="email" type="email" required />
            <label htmlFor="password">Passord:</label>
            <input id="password" name="password" type="password" required />
            <button formAction={login}>Logg inn</button>
            <button formAction={signUp}>Lag bruker</button>
        </form>
    )
}