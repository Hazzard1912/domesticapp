import { ListaLabores } from "../components/ListaLabores";
import { DomesticAppLayout } from "../layout/DomesticAppLayout";

export const DomesticAppPage = () => {
  return (
    <DomesticAppLayout>
      <h1>DomesticAppPage</h1>
      {/* Lista de labores disponibles */}
      <ListaLabores />
    </DomesticAppLayout>
  );
};
