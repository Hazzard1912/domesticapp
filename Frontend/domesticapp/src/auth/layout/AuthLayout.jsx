// Crear la plantilla para el login y el registro

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100 p-8 rounded-lg">
        <h1 className="font-bold mb-6 text-center">{title}</h1>
        {children}
      </div>
    </div>
  );
};
