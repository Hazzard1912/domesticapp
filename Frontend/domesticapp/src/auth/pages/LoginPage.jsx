import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

// Formulario de login

export const LoginPage = () => {
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
            .required("Required"),
          phone: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
      >
        <Form className="card-body">
          <Field name="email" type="email" placeholder="Email" className="input input-bordered w-full"/>
          <ErrorMessage name="email" component="div" />

          <Field name="phone" type="text" placeholder="Phone" className="input input-bordered w-full"/>
          <ErrorMessage name="phone" component="div" />

          <button type="submit" className="btn btn-outline btn-primary">Login</button>
        </Form>
      </Formik>
      <p>
        Are you a new user? <Link to="/auth/register-user">Register here</Link>
      </p>
      <p>
        Are you a worker? <Link to="/auth/register-worker">Register here</Link>
      </p>
    </AuthLayout>
  );
};
