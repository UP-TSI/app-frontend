import BarChart from "./statistics/BarChart";
import PieChart from "./statistics/PieChart";

const Statistic = () => {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-5xl font-extralight">Estatísticas</h1>
      <div className="flex justify-between h-[20rem] ">
        <PieChart />
        <BarChart />
      </div>
    </div>
  );
};

export default Statistic;
