import Filters from "./filters/Filters";
import Pagination from "./table/Pagination";
import Table from "./table/Table";
import {
  LoaderFunctionArgs,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import FilterModal from "./filters/FilterModal";
import { useEffect, useState } from "react";
// import { mockMainDataResponse } from "./table/mockData";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const formData = Object.fromEntries(url.searchParams);
  const filterResponse = formData;
  const [_, queryStrings] = url.search.split("?");
  let mainDataResponse;
  try {
    mainDataResponse = await fetch(
      `https://dev.ipesistemas.com.br/app/products?${queryStrings}`,
      {
        method: "GET",
      }
    );
    mainDataResponse = await mainDataResponse.json();
  } catch (error) {
    console.error("Failed to fetch main data:", error);
    mainDataResponse = {
      pagination: { currentPage: 0, totalPages: 0 },
      data: { mainData: [] },
    };
    // mainDataResponse = mockMainDataResponse;
  }

  return { mainDataResponse, filterResponse };
}

const InfoTable = () => {
  const navigate = useNavigate();
  const { mainDataResponse, filterResponse } =
    useLoaderData() as InfoTableResponse;
  console.log(mainDataResponse);

  const pagination = mainDataResponse.pagination;
  const mainData = mainDataResponse.mainData;
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [availableFilters, setAvailableFilters] = useState<Filter>({});
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = pagination.totalPages;
  const [perPage, setPerPage] = useState(10);

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
    setCurrentPage(1);
    setIsFilterModalOpen(!isFilterModalOpen);
  }

  function removeFilter(filterName: string) {
    const { [filterName]: _, ...newFilterList } = availableFilters;
    updateQueryString(newFilterList);
  }

  useEffect(() => {
    setAvailableFilters(filterResponse);
  }, [filterResponse]);

  useEffect(() => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    params.set("currentPage", currentPage.toString());
    params.set("perPage", perPage.toString());
    navigate(`?${params.toString()}`);
  }, [currentPage, perPage]);

  return (
    <div className="flex flex-col py-8 gap-8">
      <Filters
        availableFilters={availableFilters}
        handleFilterModal={handleFilterModal}
        removeFilter={removeFilter}
      />
      <FilterModal
        marginLeft={
          isFilterModalOpen ? "ml-10 2xl:ml-24" : "ml-[30vw] 2xl:ml-[70rem]"
        }
        handleFilterModal={handleFilterModal}
        verifyModalFilters={verifyModalFilters}
      />
      {mainData?.length > 0 ? (
        <>
          <Table tableItems={mainData} />
          <Pagination
            currentPage={currentPage}
            perPage={perPage}
            setCurrentPage={setCurrentPage}
            setPerPage={setPerPage}
            totalPages={totalPages}
          />
        </>
      ) : (
        <div className="flex justify-center items-center h-96">
          <h1 className="text-2xl text-gray-500">
            Não foi possível completar a requisição 😕
          </h1>
        </div>
      )}
    </div>
  );
};
export default InfoTable;
