import { AuthLayout } from "../layout/AuthLayout"

// Formulario de login

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </AuthLayout>
  )
}
