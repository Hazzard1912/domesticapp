// Crear la plantilla para el login y el registro
import "../styles/AuthLayout.css"

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 auth_section">
      <div className="card shrink-0 w-full lg:max-w-2xl md:max-w-xl max-w-md shadow-2xl bg-base-100 p-8 rounded-lg">
        <h1 className="auth_title">{title}</h1>
        {children}
      </div>
    </div>
  );
};
