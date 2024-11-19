import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const Pagination = ({
  currentPage,
  perPage,
  setCurrentPage,
  setPerPage,
  totalPages,
}: PaginationProps) => {
  return (
    <div className="flex justify-end gap-8">
      <select
        value={perPage}
        onChange={(e) => setPerPage(Number(e.target.value))}
        className="bg-white border border-primary rounded-full px-6 py-1 appearance-none"
      >
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
      </select>
      <div className="flex items-center gap-2">
        <span className="font-bold">{currentPage}</span> de{" "}
        <span className="font-bold">{totalPages}</span>
      </div>
      <div className="flex">
        <button
          onClick={() => setCurrentPage(1)}
          className="text-gray-400 hover:text-black hover:scale-110 transition-transform"
        >
          <ChevronsLeft />
        </button>
        <button
          onClick={() =>
            setCurrentPage(currentPage === 1 ? 1 : currentPage - 1)
          }
          className="text-gray-400 hover:text-black hover:scale-110 transition-transform"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() =>
            setCurrentPage(
              currentPage === totalPages ? totalPages : currentPage + 1
            )
          }
          className="text-gray-400 hover:text-black hover:scale-110 transition-transform"
        >
          <ChevronRight />
        </button>
        <button
          onClick={() => setCurrentPage(totalPages)}
          className="text-gray-400 hover:text-black hover:scale-110 transition-transform"
        >
          <ChevronsRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
