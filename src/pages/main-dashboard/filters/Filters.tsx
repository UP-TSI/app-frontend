import { CircleX, Settings2 } from "lucide-react";

const filterMapper: Record<string, string> = {
  equalTo: "Igual a",
  nameIncludes: "Nome contém",
  purchaseValueMin: "Valor mínimo de compra",
  purchaseValueMax: "Valor máximo de compra",
  saleValueMin: "Valor mínimo de venda",
  saleValueMax: "Valor máximo de venda",
  profitMin: "Lucro mínimo",
  profitMax: "Lucro máximo",
  quantityMin: "Quantidade mínima",
  quantityMax: "Quantidade máxima",
};

const Filters = ({
  availableFilters,
  handleFilterModal,
  removeFilter,
}: TableFilterProps) => {
  const { currentPage, perPage, ...filteredFilters } = availableFilters;

  return (
    <div className="flex justify-end gap-8">
      <li className="flex flex-row flex-wrap justify-center gap-8">
        {Object.entries(filteredFilters).map(([filterName, filterValue]) => {
          return (
            <div
              key={filterName}
              className="flex items-center gap-8 px-7 py-2 bg-secondary rounded-3xl font-bold text-primary"
            >
              <div>
                <span className="font-normal">
                  {filterMapper[filterName]}:{" "}
                </span>
                {filterValue}
              </div>
              <button onClick={() => removeFilter(filterName)}>
                <CircleX className="hover:scale-110 hover:text-tertiary transition-all" />
              </button>
            </div>
          );
        })}
      </li>
      {Object.entries(filteredFilters).length > 0 && (
        <button
          className="bg-tertiary py-2 px-8 rounded-3xl text-white font-bold hover:text-primary hover:bg-quaternary hover:scale-105 transition-all duration-500"
          onClick={() => removeFilter("removeAll")}
        >
          Limpar
        </button>
      )}
      <button
        className="text-primary hover:text-tertiary size-10"
        onClick={handleFilterModal}
      >
        <Settings2 className="hover:scale-110 transition-all" />
      </button>
    </div>
  );
};

export default Filters;
