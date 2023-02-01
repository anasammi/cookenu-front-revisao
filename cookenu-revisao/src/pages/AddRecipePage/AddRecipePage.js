import { Button, Heading, Input, Textarea } from "@chakra-ui/react";
import {
  CenterPageContainer,
  FormContainer,
} from "../../components/header/styled-containers/styled";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/baseUrl";
import {useProtectedPage} from "../../hooks/useProtectedPage"

export const AddRecipePage = () => {
  useProtectedPage()

  const [form, setForm] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });

  const onChangeInputs = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    createRecipe();
  };

  const createRecipe = async () => {
    try {
      await axios.post(`${BASE_URL}/recipe`, form, {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setForm({ title: "", description: "", imageUrl: "" });
      alert("Receita criada com sucesso!");
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <CenterPageContainer>
      <FormContainer onSubmit={onSubmit}>
        <Heading size="lg" color={"#d56300"}>Adicionar receita</Heading>
        <Input
          placeholder="Título"
          name="title"
          value={form.title}
          onChange={onChangeInputs}
          required
          type="text"
          minLength={2}
        />
        <Textarea
          placeholder="Descrição"
          name="description"
          value={form.description}
          onChange={onChangeInputs}
          required
          type="text"
          minLength={5}
        />
        <Input
          placeholder="URL da imagem"
          name="imageUrl"
          value={form.imageUrl}
          onChange={onChangeInputs}
          required
          type="url"
        />
        <Button type="submit" colorScheme="orange">
          Adicionar receita
        </Button>
      </FormContainer>
    </CenterPageContainer>
  );
};
