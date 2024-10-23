import { BarChart } from "./filters/BarChart";
import { PieChart } from "./statistics/PieChart";

const mockPieData = [
  {
    id: "scala",
    label: "scala",
    value: 362,
    color: "hsl(128, 70%, 50%)",
  },
  {
    id: "stylus",
    label: "stylus",
    value: 278,
    color: "hsl(353, 70%, 50%)",
  },
  {
    id: "java",
    label: "java",
    value: 524,
    color: "hsl(261, 70%, 50%)",
  },
  {
    id: "javascript",
    label: "javascript",
    value: 372,
    color: "hsl(31, 70%, 50%)",
  },
  {
    id: "ruby",
    label: "ruby",
    value: 531,
    color: "hsl(8, 70%, 50%)",
  },
];

const mockBarChartData = [
  {
    country: "AD",
    "hot dog": 7,
    "hot dogColor": "hsl(268, 70%, 50%)",
    burger: 121,
    burgerColor: "hsl(43, 70%, 50%)",
    sandwich: 196,
    sandwichColor: "hsl(337, 70%, 50%)",
    kebab: 21,
    kebabColor: "hsl(85, 70%, 50%)",
    fries: 126,
    friesColor: "hsl(167, 70%, 50%)",
    donut: 33,
    donutColor: "hsl(126, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 148,
    "hot dogColor": "hsl(16, 70%, 50%)",
    burger: 193,
    burgerColor: "hsl(134, 70%, 50%)",
    sandwich: 5,
    sandwichColor: "hsl(51, 70%, 50%)",
    kebab: 198,
    kebabColor: "hsl(303, 70%, 50%)",
    fries: 93,
    friesColor: "hsl(273, 70%, 50%)",
    donut: 106,
    donutColor: "hsl(256, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 42,
    "hot dogColor": "hsl(143, 70%, 50%)",
    burger: 94,
    burgerColor: "hsl(263, 70%, 50%)",
    sandwich: 13,
    sandwichColor: "hsl(102, 70%, 50%)",
    kebab: 141,
    kebabColor: "hsl(159, 70%, 50%)",
    fries: 99,
    friesColor: "hsl(279, 70%, 50%)",
    donut: 90,
    donutColor: "hsl(167, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 139,
    "hot dogColor": "hsl(355, 70%, 50%)",
    burger: 46,
    burgerColor: "hsl(170, 70%, 50%)",
    sandwich: 120,
    sandwichColor: "hsl(267, 70%, 50%)",
    kebab: 103,
    kebabColor: "hsl(49, 70%, 50%)",
    fries: 123,
    friesColor: "hsl(22, 70%, 50%)",
    donut: 185,
    donutColor: "hsl(48, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 76,
    "hot dogColor": "hsl(140, 70%, 50%)",
    burger: 10,
    burgerColor: "hsl(7, 70%, 50%)",
    sandwich: 60,
    sandwichColor: "hsl(232, 70%, 50%)",
    kebab: 52,
    kebabColor: "hsl(74, 70%, 50%)",
    fries: 128,
    friesColor: "hsl(189, 70%, 50%)",
    donut: 68,
    donutColor: "hsl(61, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 77,
    "hot dogColor": "hsl(133, 70%, 50%)",
    burger: 145,
    burgerColor: "hsl(295, 70%, 50%)",
    sandwich: 139,
    sandwichColor: "hsl(12, 70%, 50%)",
    kebab: 199,
    kebabColor: "hsl(217, 70%, 50%)",
    fries: 25,
    friesColor: "hsl(113, 70%, 50%)",
    donut: 160,
    donutColor: "hsl(0, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 76,
    "hot dogColor": "hsl(92, 70%, 50%)",
    burger: 33,
    burgerColor: "hsl(126, 70%, 50%)",
    sandwich: 21,
    sandwichColor: "hsl(37, 70%, 50%)",
    kebab: 90,
    kebabColor: "hsl(74, 70%, 50%)",
    fries: 195,
    friesColor: "hsl(133, 70%, 50%)",
    donut: 24,
    donutColor: "hsl(341, 70%, 50%)",
  },
];

const Statistic = () => {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-5xl font-extralight">Estatísticas</h1>
      <div className="flex justify-between h-[20rem] ">
        <PieChart data={mockPieData} />
        <BarChart data={mockBarChartData} />
      </div>
    </div>
  );
};

export default Statistic;
