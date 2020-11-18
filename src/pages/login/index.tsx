import { ContainerWrapper } from './_styles';

export default function Login() {
  return (
    <ContainerWrapper>
      <header>
        <a href="#">
          <h1>Startup</h1>
        </a>
      </header>

      <main>
        <section>
          <h3>Welcome to Startup</h3>
          <p>Sign in to your account.</p>
        </section>

        <section>
          <form method="POST" action="#">
            <div id="text-field-div">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" />
            </div>
            <div id="text-field-div">
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" />
            </div>
            <div id="forgot-div">
              <a href="#">Forgot your password?</a>
            </div>
            <button type="submit">Sign In</button>
          </form>
        </section>
      </main>

      <div id="register-div">
        <p>
          Don&apos;t have an account? <a href="#">Sign up</a>.
        </p>
      </div>

      <footer>
        <a href="#">Contact</a>
        <span>•</span>
        <a href="#">Privacy</a>
      </footer>
    </ContainerWrapper>
  );
}
