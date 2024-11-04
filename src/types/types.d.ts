interface TableFilterProps {
  availableFilters: Filter;
  handleFilterModal: () => void;
  removeFilter: (item) => void;
}

interface TableItem {
  cod_barras: number;
  nome: string;
  v_compra: number;
  v_venda: number;
  lucro: number;
  estoque: number;
}

type TableItems = Array<TableItem>;

interface TableProps {
  tableItems: TableItems;
}

type responseData = {
  mainData: TableItems;
  pieChartData: Record<string, number>;
  chartData: Record<string, number>;
};

interface MainDataResponse {
  pagination: Record<string, number>;
  mainData: TableItems;
}

type PaginationProps = {
  currentPage: number;
  perPage: number;
  totalPages: number;
  setCurrentPage: (number) => void;
  setPerPage: (number) => void;
};

type Filter = Record<string, string | number>;
interface InfoTableResponse {
  mainDataResponse: MainDataResponse;
  filterResponse: Filter;
}

interface FilterLineProps {
  field: string;
  inputFields: Record<string, string>;
}

interface ToggleFilterProps {
  isFilterOpen: boolean;
  setIsFilterOpen: (value: boolean) => void;
}
