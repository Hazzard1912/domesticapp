import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { checkAddress } from "../../helpers/addressHelpers";

// esquema de validacion
const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("Requerido")
    .min(2, "Ingresa un nombre válido"),
  lastName: Yup.string()
    .required("Requerido")
    .min(2, "Ingresa un apellido válido"),
  email: Yup.string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Correo electrónico inválido"
    )
    .required("Ingresa un correo elecrtrónico válido"),
  phone: Yup.string()
    .matches(/^(\d{10})$/, "Invalid phone number")
    .required("Ingrese un número de teléfono válido"),
  address: Yup.string().required("Requerido"),
  file: Yup.mixed().required("Requerido"),
  paymentMethod: Yup.string().required("Requerido"),
});

export const RegisterPage = () => {
  const validateAddress = async (address) => {
    const { center, place_name } = await checkAddress(address);
    console.log(center, place_name);

    // TODO: enviar lng, y lat al backend
  };

  return (
    <AuthLayout title="Register User">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          address: "",
          file: undefined,
          email: "",
          phone: "",
          paymentMethod: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="card-body">
          <div className="form-control w-full flex gap-4">
            <Field
              className="input input-bordered w-full"
              name="firstName"
              type="text"
              placeholder="First Name"
            />
            <ErrorMessage className="text-lg text-red-500" name="firstName" component="div" />

            <Field
              className="input input-bordered w-full"
              name="lastName"
              type="text"
              placeholder="Last Name"
            />
            <ErrorMessage className="text-lg text-red-500" name="lastName" component="div" />

            <Field
              className="input input-bordered w-full"
              name="address"
              type="text"
              placeholder="Address"
            />
            <ErrorMessage className="text-lg text-red-500" name="address" component="div" />

            <Field
              className="file-input file-input-bordered w-full"
              name="file"
              type="file"
              accept=".pdf"
            />
            <ErrorMessage className="text-lg text-red-500" name="file" component="div" />

            <Field
              className="input input-bordered w-full"
              name="email"
              type="text"
              placeholder="Email"
            />
            <ErrorMessage className="text-lg text-red-500" name="email" component="div" />

            <Field
              className="input input-bordered w-full"
              name="phone"
              type="text"
              placeholder="Phone"
            />
            <ErrorMessage className="text-lg text-red-500" name="phone" component="div" />
            <Field
              className="select select-bordered"
              as="select"
              name="paymentMethod"
            >
              <option value="">Select a payment method</option>
              <option value="creditCard">Credit Card</option>
              <option value="debitCard">Debit Card</option>
              <option value="paypal">PayPal</option>
            </Field>
            <ErrorMessage className="text-lg text-red-500" name="paymentMethod" component="div" />
            <button type="submit" className="btn btn-outline btn-primary text-xl">
              Register
            </button>
          </div>
        </Form>
      </Formik>
      <div className="mt-6 text-center">
        <p className="text-xl">
          Do you have an account?{" "}
          <Link
            to="/auth/login"
            className="font-medium text-indigo-400 hover:text-indigo-200"
          >
            Go to login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};
