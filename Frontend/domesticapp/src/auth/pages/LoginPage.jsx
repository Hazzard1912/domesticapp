import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/user/userSlice";

// Formulario de login

export const LoginPage = () => {
  // dispatch
  const dispatch = useDispatch();

  const handleLogin = (values) => {
    // TODO: Hacer el login con el servidor de manera robusta, recibir jwt.
    const { phone, password } = values;

    // TODO: Hacer el login con el servidor de manera robusta, recibir jwt.

    // TODO: enviar el jwt al store
    const status = "authenticated";
    dispatch(login({ phone, status }));
  };

  return (
    <AuthLayout title="Ingresa">
      <Formik
        initialValues={{
          phone: "",
          password: "",
        }}
        validationSchema={Yup.object({
          phone: Yup.string()
            .matches(/^(\d{10})$/, "Invalid phone number")
            .required("Ingrese un número de teléfono válido"),
            password: Yup.string()
            .required("Requerido"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleLogin(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="card-body">
          <Field
            name="phone"
            type="text"
            placeholder="Telefono"
            className="input input-bordered w-full text-xl"
          />
          <ErrorMessage className="text-lg text-red-500" name="phone" component="div" />

          <Field
            name="password"
            type="password"
            placeholder="Contraseña"
            className="input input-bordered w-full text-xl"
          />
          <ErrorMessage className="text-lg text-red-500" name="password" component="div" />

          <button type="submit" className="btn btn-outline btn-primary text-2xl">
            Ingresar
          </button>
        </Form>
      </Formik>
      <div className="mt-6 text-center">
        <p className="text-xl">
          No tienes cuenta aún?
          <Link to="/auth/register-user" className="font-medium ml-4 text-indigo-400 hover:text-indigo-200">Registrate aquí</Link>
        </p>
        {/* <p className="text-xl mt-2">
          Are you a worker?
          <Link to="/auth/register-worker" className="font-medium text-indigo-400 hover:text-indigo-200">Register here</Link>
        </p> */}
      </div>
    </AuthLayout>
  );
};
