import { ArrowDown } from "lucide-react";

const columns = [
  "Cod. Barras",
  "Nome",
  "V. Compra",
  "V. Venda",
  "Lucro",
  "Estoque",
];

const Table = ({ tableItems }: TableProps) => {
  return (
    <table className="max-h-[40rem] w-full gap-6">
      <thead>
        <tr className="">
          {columns.map((item, index) => {
            return (
              <th key={index}>
                <div className="flex justify-center gap-1">
                  {item} <ArrowDown className="text-primary" />
                </div>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="border-x-2 border-y-4 border-tertiary text-2xl">
        {tableItems.map((item, index) => {
          return (
            <tr key={index}>
              <th>
                <div className="py-3 ml-12">
                  <div className="flex font-medium border-r-2 border-primary">
                    {item.id}
                  </div>
                </div>
              </th>
              <th>
                <div className="ml-12">
                  <div className="flex font-medium border-r-2 border-primary">
                    {item.nome}
                  </div>
                </div>
              </th>
              <th>
                <div className="ml-12">
                  <div className="flex pr-8 font-medium border-r-2 border-primary justify-end items-baseline gap-1 ">
                    <span className="text-sm font-light">R$</span>
                    {item.v_compra}
                  </div>
                </div>
              </th>
              <th>
                <div className="ml-12">
                  <div className="flex pr-8 font-medium border-r-2 border-primary justify-end items-baseline gap-1 ">
                    <span className="text-sm font-light">R$</span>
                    {item.v_venda}
                  </div>
                </div>
              </th>
              <th>
                <div className="ml-12">
                  <div className="flex pr-8 font-medium border-r-2 border-primary justify-end items-baseline gap-1 ">
                    <span className="text-sm font-light">R$</span>
                    {item.lucro}
                  </div>
                </div>
              </th>
              <th>
                <div className="ml-12">
                  <div className="flex pr-8 font-bold justify-end">
                    {item.estoque}
                  </div>
                </div>
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
