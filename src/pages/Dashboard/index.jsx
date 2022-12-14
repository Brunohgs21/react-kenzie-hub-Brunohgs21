import DashboardHeader from "../../components/DashboardHeader/DashboardHeader.jsx";
import DashboardInfo from "../../components/DashboardInfo/index.jsx";
import DashboardMain from "../../components/DashboardMain/index.jsx";
import { Div } from "./../Login/index";
import { useContext } from "react";
import { AuthContext } from "./../../contexts/AuthContext";
import { Navigate } from "react-router-dom";

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
