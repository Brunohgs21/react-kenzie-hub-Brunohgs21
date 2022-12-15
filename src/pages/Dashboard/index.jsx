import DashboardHeader from "../../components/DashboardHeader/DashboardHeader.jsx";
import DashboardInfo from "../../components/DashboardInfo/index.jsx";
import DashboardMain from "../../components/DashboardMain/index.jsx";
import { Div } from "./../Login/index";
import TechModal from "../../components/Modal";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext.jsx";

const DashBoard = () => {
  const { openModal } = useContext(ModalContext);
  return (
    <Div>
      <DashboardHeader />
      <DashboardInfo />
      <DashboardMain />
      {openModal ? <TechModal /> : ""}
    </Div>
  );
};

export default DashBoard;
