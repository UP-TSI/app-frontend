const ToggleFIlter = ({ isFilterOpen, setIsFilterOpen }: ToggleFilterProps) => {
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsFilterOpen(!isFilterOpen);
        }}
        className={`flex w-12 rounded-full border-2 border-primary transition-all duration-500 ${
          isFilterOpen && "bg-primary"
        }`}
      >
        <div
          className={` w-6 h-6 rounded-full transition-all duration-500 transform ${
            isFilterOpen ? "bg-tertiary ml-5" : "bg-quaternary translate-x-0"
          }`}
        ></div>
      </button>
    </div>
  );
};

export default ToggleFIlter;
