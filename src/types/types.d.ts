interface TableFilterProps {
  availableFilters: Filter;
  handleFilterModal: () => void;
  removeFilter: (item) => void;
}

interface TableItem {
  id: number;
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

interface MainDataResponse {
  pagination: Record<string, number>;
  data: TableItems;
}

type Filter = Record<string, string | number>;
interface InfoTableResponse {
  mainDataResponse: MainDataResponse;
  filterResponse: Filter;
}
