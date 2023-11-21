import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { ErrorMessage, Formik, Field, Form } from "formik";
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
  profilePic: Yup.mixed().required("Se requiere una foto de perfil"),
  phone: Yup.string()
    .matches(/^(\d{10})$/, "Invalid phone number")
    .required("Ingrese un número de teléfono válido"),
  address: Yup.string().required("Requerido"),
  idImg: Yup.mixed().required(
    "Se requiere cargar imagen de documento de identidad"
  ),
  job: Yup.string().required("Requerido"),
  price: Yup.number().required("Requerido"),
});

// Lista de labores:
const labores = [
  "Cocina",
  "Limpieza",
  "Lavado de ropa",
  "Cuidado de niños",
  "Cuidado de adultos mayores",
  "Cuidado de mascotas",
  "Jardinería",
  "Plomería",
  "Electricidad",
  "Carpintería",
];

export const RegisterWorkerPage = () => {
  const validateAddress = async (address) => {
    const { center, place_name } = await checkAddress(address);
    console.log(center, place_name);

    // TODO: enviar lng, y lat al backend
  };

  return (
    <AuthLayout title="Register Worker">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          profilePic: undefined,
          phone: "",
          address: "",
          idImg: undefined,
          job: "",
          price: "",
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
            <ErrorMessage
              className="text-lg text-red-500"
              name="firstName"
              component="div"
            />
            <Field
              className="input input-bordered w-full"
              name="lastName"
              type="text"
              placeholder="Last Name"
            />
            <ErrorMessage
              className="text-lg text-red-500"
              name="lastName"
              component="div"
            />
            <Field
              className="input input-bordered w-full"
              name="email"
              type="text"
              placeholder="Email"
            />
            <ErrorMessage
              className="text-lg text-red-500"
              name="email"
              component="div"
            />
            <Field
              className="file-input file-input-bordered w-full"
              name="profilePic"
              type="file"
              accept=".jpg,.jpeg,.png"
            />
            <ErrorMessage
              className="text-lg text-red-500"
              name="profilePic"
              component="div"
            />
            <Field
              className="input input-bordered w-full"
              name="phone"
              type="text"
              placeholder="Phone"
            />
            <ErrorMessage
              className="text-lg text-red-500"
              name="phone"
              component="div"
            />
            <Field
              className="input input-bordered w-full"
              name="address"
              type="text"
              placeholder="Address"
            />
            <ErrorMessage
              className="text-lg text-red-500"
              name="address"
              component="div"
            />
            <Field
              className="file-input file-input-bordered w-full"
              name="idImg"
              type="file"
              accept=".jpg,.jpeg,.png"
            />
            <ErrorMessage
              className="text-lg text-red-500"
              name="idImg"
              component="div"
            />
            <Field className="select select-bordered" as="select" name="job">
              <option value="">Select a job</option>
              {labores.map((labor) => (
                <option key={labor} value={labor}>
                  {labor}
                </option>
              ))}
            </Field>
            <ErrorMessage
              className="text-lg text-red-500"
              name="job"
              component="div"
            />
            <Field
              className="input input-bordered w-full"
              name="price"
              type="number"
              min="0"
              placeholder="Price in COP"
            />
            <ErrorMessage
              className="text-lg text-red-500"
              name="price"
              component="div"
            />
            <button type="submit" className="btn btn-outline btn-primary text-xl">
              Register
            </button>
          </div>
        </Form>
      </Formik>
      <div className="mt-6 text-center">
        <p className="text-xl">
          return to login <Link to="/auth/login" className="font-medium text-indigo-400 hover:text-indigo-200">Login</Link>
        </p>
      </div>
    </AuthLayout>
  );
};
