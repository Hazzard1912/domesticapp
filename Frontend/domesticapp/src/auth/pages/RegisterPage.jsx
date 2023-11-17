import { AuthLayout } from "../layout/AuthLayout";
import { Formik, Field, Form } from "formik";
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
      "Invalid email address"
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
    <AuthLayout title="register">
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
          <div className="form-control w-full">
            <Field
              className="input input-bordered w-full"
              name="firstName"
              type="text"
              placeholder="First Name"
            />
            <Field
              className="input input-bordered w-full"
              name="lastName"
              type="text"
              placeholder="Last Name"
            />
            <Field
              className="input input-bordered w-full"
              name="address"
              type="text"
              placeholder="Address"
            />
            <Field
              className="file-input file-input-bordered w-full"
              name="file"
              type="file"
              accept=".pdf"
            />
            <Field
              className="input input-bordered w-full"
              name="email"
              type="text"
              placeholder="Email"
            />
            <Field
              className="input input-bordered w-full"
              name="phone"
              type="text"
              placeholder="Phone"
            />
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
            <button type="submit" className="btn btn-outline btn-primary">
              Register
            </button>
          </div>
        </Form>
      </Formik>
    </AuthLayout>
  );
};
