import { BtnLink, Div, Logo } from "./../RegisterHeader/index";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { api } from "./../../services/api";
import { useNavigate } from "react-router-dom";

const FormLogin = ({ setLoged }) => {
  const [login, setLogin] = useState(null);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmitFunction = (data) => {
    setLogin(data);
  };

  useEffect(() => {
    if (login != null) {
      toLogin();
    }
    async function toLogin() {
      try {
        const response = await api.post("sessions", login);

        const token = response.data.token;

        setLoged(response.data.user);
        localStorage.setItem("Token", response.data.token);
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
      }
    }
  }, [login]);

  return (
    <Div>
      <Logo>Kenzie Hub</Logo>
      <section>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <div className="text">
            <p className="text1">Login</p>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />

            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />

            <button className="btn2">Entrar</button>
          </div>
        </form>

        <p>Ainda não possui uma conta?</p>
        <BtnLink to="/register">Cadastre-se</BtnLink>
      </section>
    </Div>
  );
};

export default FormLogin;
