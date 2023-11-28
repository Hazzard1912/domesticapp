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
    const { email, phone } = values;
    const status = "authenticated";
    dispatch(login({ email, phone, status }));
  };

  return (
    <AuthLayout title="Login">
      <Formik
        initialValues={{
          email: "",
          phone: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Requerido"),
          phone: Yup.string()
            .matches(/^(\d{10})$/, "Invalid phone number")
            .required("Ingrese un número de teléfono válido"),
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
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
          />
          <ErrorMessage className="text-lg text-red-500" name="email" component="div" />

          <Field
            name="phone"
            type="text"
            placeholder="Phone"
            className="input input-bordered w-full"
          />
          <ErrorMessage className="text-lg text-red-500" name="phone" component="div" />

          <button type="submit" className="btn btn-outline btn-primary text-xl">
            Login
          </button>
        </Form>
      </Formik>
      <div className="mt-6 text-center">
        <p className="text-xl">
          Are you a new user?{" "}
          <Link to="/auth/register-user" className="font-medium text-indigo-400 hover:text-indigo-200">Register here</Link>
        </p>
        <p className="text-xl mt-2">
          Are you a worker?{" "}
          <Link to="/auth/register-worker" className="font-medium text-indigo-400 hover:text-indigo-200">Register here</Link>
        </p>
      </div>
    </AuthLayout>
  );
};
