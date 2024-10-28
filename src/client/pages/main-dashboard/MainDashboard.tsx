import Footer from "./Footer";
import Header from "./Header";
import InfoTable from "./InfoTable";
import Statistic from "./Statistic";

const MainDashboard = () => {
  return (
    <>
      <div className="flex bg-gradient-to-b from-[#00AAFF42] to-white to-25% flex-col p-16">
        <Header />
        <InfoTable />
        <Statistic />
      </div>
      <Footer />
    </>
  );
};

export default MainDashboard;
