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
    <AuthLayout title="Registro">
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
              className="input input-bordered w-full text-2xl"
              name="firstName"
              type="text"
              placeholder="Nombre"
            />
            <ErrorMessage
              className="text-lg text-red-500"
              name="firstName"
              component="div"
            />

            <Field
              className="input input-bordered w-full text-2xl"
              name="lastName"
              type="text"
              placeholder="Apellidos"
            />
            <ErrorMessage
              className="text-lg text-red-500"
              name="lastName"
              component="div"
            />

            <Field
              className="input input-bordered w-full text-2xl"
              name="address"
              type="text"
              placeholder="Dirección de residencia"
            />
            <ErrorMessage
              className="text-lg text-red-500"
              name="address"
              component="div"
            />

            <Field
              className="file-input file-input-bordered w-full text-2xl"
              name="file"
              type="file"
              accept=".pdf"
            />
            <ErrorMessage
              className="text-lg text-red-500"
              name="file"
              component="div"
            />

            <Field
              className="input input-bordered w-full text-2xl"
              name="email"
              type="text"
              placeholder="Correo electrónico"
            />
            <ErrorMessage
              className="text-lg text-red-500"
              name="email"
              component="div"
            />

            <Field
              className="input input-bordered w-full text-2xl"
              name="phone"
              type="text"
              placeholder="Teléfono"
            />
            <ErrorMessage
              className="text-lg text-red-500"
              name="phone"
              component="div"
            />
            <Field
              className="select select-bordered text-xl"
              as="select"
              name="paymentMethod"
            >
              <option value="" className="text-xl">Selecciona un método de pago</option>
              <option value="creditCard" className="text-xl">Tarjeta crédito</option>
              <option value="debitCard" className="text-xl">Tarjeta débito</option>
            </Field>
            <ErrorMessage
              className="text-lg text-red-500"
              name="paymentMethod"
              component="div"
            />
            <button
              type="submit"
              className="btn btn-outline btn-primary text-2xl"
            >
              Registrarse
            </button>
          </div>
        </Form>
      </Formik>
      <div className="mt-6 text-center">
        <p className="text-xl">
          Ya tienes una cuenta?
          <Link
            to="/auth/login"
            className="font-medium ml-4 text-indigo-400 hover:text-indigo-200"
          >
            Ingresar
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};
