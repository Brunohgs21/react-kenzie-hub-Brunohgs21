import DashboardHeader from "../../components/DashboardHeader/DashboardHeader.jsx";
import DashboardInfo from "../../components/DashboardInfo/index.jsx";
import DashboardMain from "../../components/DashboardMain/index.jsx";
import { Div } from "./../Login/index";

const DashBoard = () => {
  return (
    <Div>
      <DashboardHeader />
      <DashboardInfo />
      <DashboardMain />
    </Div>
  );
};

export default DashBoard;
