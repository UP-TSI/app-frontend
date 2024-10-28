import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const Pagination = () => {
  return (
    <div className="flex justify-end gap-8">
      <div>
        <span className="font-bold">1</span> de{" "}
        <span className="font-bold">5</span>
      </div>
      <div className="flex">
        <button className="text-gray-400 hover:text-black hover:scale-110 transition-transform">
          <ChevronsLeft />
        </button>
        <button className="text-gray-400 hover:text-black hover:scale-110 transition-transform">
          <ChevronLeft />
        </button>
        <button className="text-gray-400 hover:text-black hover:scale-110 transition-transform">
          <ChevronRight />
        </button>
        <button className="text-gray-400 hover:text-black hover:scale-110 transition-transform">
          <ChevronsRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
