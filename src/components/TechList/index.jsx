import { List } from "./../DashboardHeader/index";
import TechItem from "./../TechItem/index";
import { useContext } from "react";
import { AuthContext } from "./../../contexts/AuthContext";

const TechList = () => {
  const { user } = useContext(AuthContext);
  const { techs } = user;
  return (
    <List>
      <ul>
        {techs.length == 0 ? (
          <p>Cadastre novas tecnologias</p>
        ) : (
          techs.map((item) => <TechItem></TechItem>)
        )}
      </ul>
    </List>
  );
};

export default TechList;
