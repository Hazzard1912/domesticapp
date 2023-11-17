// Crear la plantilla para el login y el registro

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <>
      <h1>{title}</h1>
      <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        {children}
      </div>
    </>
  );
};
