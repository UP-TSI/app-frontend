import Cookies from "js-cookie";
import Footer from "./Footer";
import Header from "./Header";
import InfoTable from "./InfoTable";
import Statistic from "./Statistic";
import { useNavigate } from "react-router-dom";

const MainDashboard = () => {
  const userCookieInfo = Cookies.get("userCookieInfo");
  const navigate = useNavigate();
  const userCookieInfoObj = JSON.parse(userCookieInfo || "{}");

  if (!userCookieInfo) {
    navigate("/user-login");
  }

  return (
    <>
      <div className="flex bg-gradient-to-b from-[#00AAFF42] to-white to-25% flex-col p-16">
        <Header username={userCookieInfoObj.username} />
        <InfoTable />
        <Statistic />
      </div>
      <Footer />
    </>
  );
};

export default MainDashboard;
