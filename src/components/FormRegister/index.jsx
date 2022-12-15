import RegisterHeader from "./../RegisterHeader/RegisterHeader";
import { Div } from "../RegisterHeader";
import "react-toastify/ReactToastify.css";
import PWDRequisite from "../PWDRequisite";
import { AuthContext } from "./../../contexts/AuthContext";
import { useContext } from "react";

const FormRegister = () => {
  const {
    handleOnFocus,
    handleOnKeyUp,
    pwdRequisite,
    register,
    handleSubmit,
    onSubmitFunction,
    errors,
    checks,
    clickRef,
  } = useContext(AuthContext);
  return (
    <Div ref={clickRef}>
      <RegisterHeader />
      <section>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <div className="text">
            <p className="text1">Crie sua conta</p>
            <p>Rápido e grátis, vamos nessa</p>
          </div>

          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          {errors.name?.message}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          {errors.email?.message}

          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            name="senha"
            id="senha"
            placeholder="Digite aqui sua senha"
            onFocus={handleOnFocus}
            onKeyUp={handleOnKeyUp}
            {...register("password")}
          />
          {errors.password?.message}
          <div className="relative">
            {pwdRequisite ? (
              <PWDRequisite
                capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
                numberFlag={checks.numberCheck ? "valid" : "invalid"}
                pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
                specialCharFlag={checks.specialCharCheck ? "valid" : "invalid"}
              />
            ) : null}
          </div>

          <label htmlFor="senha">Confirmar Senha</label>
          <input
            type="password"
            name="senha"
            id=""
            placeholder="Digite sua senha novamente"
            {...register("confirmation")}
          />

          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            id="bio"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          {errors.bio?.message}

          <label htmlFor="contato">Contato</label>
          <input
            type="text"
            name="contato"
            id="contato"
            placeholder="Opção de contato"
            {...register("contact")}
          />
          {errors.contact?.message}

          <label htmlFor="modulo">Selecionar módulo</label>
          <select name="" id="modulo" {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro Módulo
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo Módulo
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro Módulo
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto Módulo
            </option>
          </select>
          <button className="btn" type="submit">
            Cadastrar
          </button>
        </form>
      </section>
    </Div>
  );
};

export default FormRegister;
