import RegisterHeader from "./../RegisterHeader/RegisterHeader";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Div } from "../RegisterHeader";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { api } from "./../../services/api";
import { useNavigate } from "react-router-dom";
import PWDRequisite from "../PWDRequisite";
import { useOutClick } from "./../../hooks/useOutclick";
import { formSchema } from "../../services/validation";

const FormRegister = () => {
  const [newUser, setNewUser] = useState(null);
  const navigate = useNavigate();
  const [pwdRequisite, setPWDRequisite] = useState(false);
  const [checks, setChecks] = useState({
    capsLetterCheck: false,
    numerCheck: false,
    pwdLengthCheck: false,
    specialCharCheck: false,
  });
  const clickRef = useOutClick(() => setPWDRequisite(false));

  function handleOnFocus() {
    setPWDRequisite(true);
  }

  function call() {
    setPWDRequisite(false);
  }

  function handleOnKeyUp(e) {
    const { value } = e.target;
    const capsLetterCheck = /[A-Z]/.test(value);
    const numberCheck = /[0123456789]/.test(value);
    const pwdLengthCheck = value.length >= 8;
    const specialCharCheck = /[!@#$%^&*]/.test(value);
    setChecks({
      capsLetterCheck,
      numberCheck,
      pwdLengthCheck,
      specialCharCheck,
    });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    if (data.confirmation == data.password) {
      let { email, name, contact, password, bio, course_module } = data;

      const user = {
        name: name,
        email: email,
        contact: contact,
        password: password,
        bio: bio,
        course_module: course_module,
      };

      setNewUser(user);
    } else {
      setNewUser(null);
      toast.error("As senhas digitadas são diferentes");
    }
  };

  useEffect(() => {
    if (newUser != null) {
      setUser();
    }

    async function setUser() {
      try {
        const response = await api.post("users", newUser);

        toast.success("Conta criada com sucesso!");
        setTimeout(() => {
          navigate("/");
        }, 5000);
      } catch (err) {
        console.log(err);
        toast.error("Ops! Algo deu errado");
      } finally {
        setNewUser(null);
      }
    }
  }, [newUser]);

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
            onBlur={call}
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
