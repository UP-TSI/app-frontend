import { X } from "lucide-react";
import { Form } from "react-router-dom";

const FilterModal = ({ handleFilterModal, verifyModalFilters }: any) => {
  return (
    <div className="absolute flex flex-col top-0 left-52 2xl:left-72 bg-white shadow-[5px_0_10px_rgba(0,0,0,0.3)] transform translate-x-full animate-slide-in rounded-b-3xl">
      <div className="flex justify-end">
        <span className="">filtros</span>
        <button className="flex " onClick={handleFilterModal}>
          <X />
        </button>
      </div>
      <Form
        onSubmit={verifyModalFilters}
        className="bg-secondary p-12 rounded-xl flex flex-col gap-2 items-center"
      >
        <div className="flex gap-4">
          <span>Nome: </span>
          <div className="flex gap-2">
            <input type="text" name="nameEqual" placeholder="Igual à..." />
            <input type="text" name="nameContains" placeholder="Contém..." />
          </div>
        </div>
        <div className="flex gap-4">
          <span>Quantidade: </span>
          <div className="flex gap-2">
            <input type="number" name="qtdMin" placeholder="Min" />
            <input type="number" name="qtdMax" placeholder="Max" />
          </div>
        </div>
        <div className="flex gap-4">
          <span>Lucro: </span>
          <div className="flex gap-2">
            <input type="number" name="profitMin" placeholder="Min" />
            <input type="number" name="profitMax" placeholder="Max" />
          </div>
        </div>
        <button
          className="text-white p-1.5 bg-primary rounded-xl"
          type="submit"
        >
          Filtrar
        </button>
      </Form>
    </div>
  );
};

export default FilterModal;
