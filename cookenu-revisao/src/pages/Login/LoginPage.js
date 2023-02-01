import { Button, Input } from "@chakra-ui/react";
import {
  CenterPageContainer,
  FormContainer,
} from "../../components/header/styled-containers/styled";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToSignup } from "../../routes/coordinator";
import { useState } from "react";
import { BASE_URL } from "../../constants/baseUrl";
import axios from "axios";

export const LoginPage = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChangeInputs = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault()
    console.log(form)
    login()
  }

  const login = async() => {
    try{
      const response = await axios.post(`${BASE_URL}/user/login`, form)
      localStorage.setItem("token", response.data.token)
      goToFeed(navigate)
    }
    catch(e){
      alert(e.response.data.message)
    }
  }

  return (
    <CenterPageContainer>
      <FormContainer onSubmit={onSubmitForm}>
        <Input
          placeholder="E-mail"
          name="email"
          value={form.email}
          onChange={onChangeInputs}
          required
          type="email"
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
          Login
        </Button>
        <Button
          type="button"
          colorScheme="orange"
          variant="ghost"
          size="xs"
          onClick={() => goToSignup(navigate)}
        >
          Não possui uma conta? Cadastre-se
        </Button>
      </FormContainer>
    </CenterPageContainer>
  );
};
