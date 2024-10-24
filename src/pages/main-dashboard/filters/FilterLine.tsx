import { useState } from "react";
import ToggleFIlter from "./ToggleFIlter";

const FilterLine = ({ field, inputFields }: FilterLineProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div>
      <div className="flex gap-8 justify-between">
        <div className="flex gap-2.5">
          <ToggleFIlter
            isFilterOpen={isFilterOpen}
            setIsFilterOpen={setIsFilterOpen}
          />
          <span className="font-bold text-2xl">{field}</span>
        </div>
        <div
          className={`flex gap-2 p-2 w-[33.5rem] rounded-full bg-tertiary transition-all duration-500 ${
            !isFilterOpen && "bg-opacity-20"
          }`}
        >
          {Object.entries(inputFields).map(([key, value], index) => {
            return (
              <input
                disabled={!isFilterOpen}
                className={`flex placeholder:text-primary ${
                  !isFilterOpen && "placeholder:text-opacity-20 bg-white"
                } placeholder:text-center p-2 w-aj text-sm rounded-full border-none outline-none transition-all duration-500 placeholder:transition-all placeholder:duration-500`}
                key={index}
                type="text"
                name={key}
                placeholder={value}
                size={value.length}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterLine;
