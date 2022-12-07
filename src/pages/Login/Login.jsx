import FormLogin from "../../components/FormLogin";
import { Container } from "../../components/RegisterHeader";
import Div from "./index";

const Login = ({ setLoged }) => {
  return (
    <Container>
      <FormLogin setLoged={setLoged} />
    </Container>
  );
};

export default Login;
