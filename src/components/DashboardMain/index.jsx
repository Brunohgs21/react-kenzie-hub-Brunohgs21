import { Main } from "./../DashboardHeader/index";
import TechList from "./../TechList/index";
import { useContext, useState } from "react";
import { ModalContext } from "../../contexts/ModalContext";

const DashboardMain = () => {
  // const { openModal, open } = useContext(ModalContext);
  const [openModal, setOpenModal] = useState(false);

  console.log(openModal);

  return (
    <Main>
      <div>
        <p className="techText">Tecnologias</p>{" "}
        <button className="addBtn" onClick={() => setOpenModal(true)}>
          +
        </button>
      </div>
      <TechList></TechList>
    </Main>
  );
};

export default DashboardMain;
