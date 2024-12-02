import { useState } from "react";
import ToggleFIlter from "./ToggleFIlter";

const NegativeStockFilterLine = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div>
      <div className="flex gap-8 justify-between">
        <div className="flex gap-2.5 items-center">
          <ToggleFIlter
            isFilterOpen={isFilterOpen}
            setIsFilterOpen={setIsFilterOpen}
          />
          <span className="font-bold text-2xl">
            Visualizar estoque negativo
          </span>
        </div>
        <input
          disabled={!isFilterOpen}
          className={`flex placeholder:text-primary ${
            !isFilterOpen && "bg-white opacity-20"
          } text-center p-2 w-aj text-sm rounded-full border-none outline-none transition-all duration-500 placeholder:transition-all placeholder:duration-500 text-transparent`}
          type="text"
          name={"quantityMax"}
          value={0}
        />
      </div>
    </div>
  );
};

export default NegativeStockFilterLine;
