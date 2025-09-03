function LoginForm() {
  return (
    <form>
      <input type='text' name='username' id='username' />
      <input type='email' name='email' id='email' />
      <input type='password' name='password' id='password' />
      <button>Login</button>
    </form>
  );
}

export default LoginForm;
