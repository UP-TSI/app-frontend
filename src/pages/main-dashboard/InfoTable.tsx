import Filters from "./filters/Filters";
import Pagination from "./table/Pagination";
import Table from "./table/Table";
import { mockItems } from "../main-dashboard/table/mockData";
import {
  LoaderFunctionArgs,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import FilterModal from "./filters/FilterModal";
import { useEffect, useState } from "react";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const formData = Object.fromEntries(url.searchParams);
  const filterResponse = formData;

  const mainDataResponse = await fetch(`/some-backend-url?`, { method: "get" });

  return { mainDataResponse, filterResponse };
}

const InfoTable = () => {
  const navigate = useNavigate();
  const { mainDataResponse, filterResponse } =
    useLoaderData() as InfoTableResponse;
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [availableFilters, setAvailableFilters] = useState<Filter>({});

  const updateQueryString = (filters: Filter) => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      params.append(key, value.toString());
    });

    navigate(`?${params.toString()}`);
  };

  function handleFilterModal() {
    setIsFilterModalOpen(!isFilterModalOpen);
  }

  function verifyModalFilters(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const filters: Filter = {};

    formData.forEach((value, key) => {
      if (value) {
        filters[key] = value.toString();
      }
    });

    updateQueryString(filters);
    setIsFilterModalOpen(!isFilterModalOpen);
  }

  function removeFilter(filterName: string) {
    const { [filterName]: _, ...newFilterList } = availableFilters;
    updateQueryString(newFilterList);
  }

  useEffect(() => {
    setAvailableFilters(filterResponse);
  }, [filterResponse]);

  return (
    <div className="flex flex-col py-8 gap-8">
      <Filters
        availableFilters={availableFilters}
        handleFilterModal={handleFilterModal}
        removeFilter={removeFilter}
      />
      {isFilterModalOpen && (
        <FilterModal
          handleFilterModal={handleFilterModal}
          verifyModalFilters={verifyModalFilters}
        />
      )}
      <Table tableItems={mockItems} />
      <Pagination />
    </div>
  );
};
export default InfoTable;
