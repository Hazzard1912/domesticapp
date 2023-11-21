import { ListaLabores } from "../components/ListaLabores";
import { DomesticAppLayout } from "../layout/DomesticAppLayout";

export const DomesticAppPage = () => {
  return (
    <DomesticAppLayout>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-200">
        <h1 className="text-2xl md:text-4xl lg:text-6xl text-sky-600 mb-8 text-center uppercase font-thin">
          Domesticapp
        </h1>
        <div className="w-full">
          <ListaLabores />
        </div>
      </div>
    </DomesticAppLayout>
  );
};
