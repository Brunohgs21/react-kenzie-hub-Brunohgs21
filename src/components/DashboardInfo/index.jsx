import { Container } from "../DashboardHeader";

const DashboardInfo = ({ loged }) => {
  return (
    <Container>
      <section>
        <span className="name">
          Olá, <span>{loged ? loged.name : "Usuário"}</span>
        </span>
        <span className="module">{loged ? loged.course_module : "Módulo"}</span>
      </section>
    </Container>
  );
};

export default DashboardInfo;
