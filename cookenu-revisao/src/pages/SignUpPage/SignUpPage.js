import { Button, Input } from "@chakra-ui/react";
import {
  CenterPageContainer,
  FormContainer,
} from "../../components/header/styled-containers/styled";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToLogin, goToSignup } from "../../routes/coordinator";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/baseUrl";

export const SignUpPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name:"",
    email: "",
    password: "",
  });

  const onChangeInputs = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    signup()
  };

  const signup = async() => {
    try{
      const response = await axios.post(`${BASE_URL}/user/signup`, form)
      localStorage.setItem("token", response.data.token)
      goToFeed(navigate)
    }
    catch(e){
      alert(e.response.data.message)
    }
  }

  return (
    <CenterPageContainer>
      <FormContainer onSubmit={onSubmit}>
        <Input
          placeholder="Nome"
          name="name"
          value={form.name}
          onChange={onChangeInputs}
          required
          type="text"
          minLength={2}
        />
        <Input
          placeholder="E-mail"
          name="email"
          value={form.email}
          onChange={onChangeInputs}
          required
          type="e-mail"
        />
        <Input
          placeholder="Senha"
          name="password"
          value={form.password}
          onChange={onChangeInputs}
          required
          type="password"
          minLength={6}
        />
        <Button type="submit" colorScheme="orange">
          Cadastrar
        </Button>
        <Button
          type="button"
          colorScheme="orange"
          variant="ghost"
          size="xs"
          onClick={() => goToLogin(navigate)}
        >
          Já possui uma conta? Faça login
        </Button>
      </FormContainer>
    </CenterPageContainer>
  );
};
