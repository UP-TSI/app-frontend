import { X } from "lucide-react";
import { Form } from "react-router-dom";
import FilterLine from "./FilterLine";

const FilterModal = ({
  handleFilterModal,
  verifyModalFilters,
  marginLeft,
}: any) => {
  return (
    <div
      className={`flex fixed z-10 flex flex-col top-36 ${marginLeft} bg-white shadow-2xl transform translate-x-full animate-slide-in rounded-3xl transition-all duration-300`}
    >
      <div className="flex justify-between p-8">
        <span className="text-3xl font-light text-primary underline">
          Filtros
        </span>
        <button
          className="text-primary hover:text-tertiary hover:scale-110 transition-all"
          onClick={handleFilterModal}
        >
          <X />
        </button>
      </div>
      <Form
        onSubmit={verifyModalFilters}
        className=" p-12 rounded-xl flex flex-col gap-4"
      >
        <FilterLine
          field={"Nome"}
          inputFields={{ equalTo: "Igual à", nameIncludes: "Contém" }}
        />
        <FilterLine
          field={"V. Compra"}
          inputFields={{
            purchaseValueMin: "É maior que",
            purchaseValueMax: "É menor que",
          }}
        />
        <FilterLine
          field={"V. Venda"}
          inputFields={{
            saleValueMin: "É maior que",
            saleValueMax: "É menor que",
          }}
        />
        <FilterLine
          field={"Lucro"}
          inputFields={{ profitMin: "É maior que", profitMax: "É menor que" }}
        />
        <FilterLine
          field={"Estoque"}
          inputFields={{
            quantityMin: "É maior que",
            quantityMax: "É menor que",
          }}
        />
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
