import { CircleX, Settings2 } from "lucide-react";

const Filters = ({
  availableFilters,
  handleFilterModal,
  removeFilter,
}: TableFilterProps) => {
  return (
    <div className="">
      <li className="flex flex-row justify-end gap-8">
        {Object.entries(availableFilters).map(([filterName, filterValue]) => {
          {
            console.log(availableFilters);
          }
          return (
            <div
              key={filterName}
              className="flex items-center gap-8 px-7 py-2 bg-secondary rounded-3xl font-bold text-primary"
            >
              <div>
                <span className="font-normal">{filterName}: </span>
                {filterValue}
              </div>
              <button onClick={() => removeFilter(filterName)}>
                <CircleX className="hover:scale-110 hover:text-tertiary transition-all" />
              </button>
            </div>
          );
        })}
        <button
          className="text-primary hover:text-tertiary size-10"
          onClick={handleFilterModal}
        >
          <Settings2 className="hover:scale-110 transition-all" />
        </button>
      </li>
    </div>
  );
};

export default Filters;
