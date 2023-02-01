import { Grid } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddButton from "../../components/header/button/AddButton";
import Card from "../../components/header/card/Card";
import { BASE_URL } from "../../constants/baseUrl";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { goToAddRecipe, goToDetails } from "../../routes/coordinator";

export const FeedPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    getAllRecipes();
  }, []);

  const getAllRecipes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/recipe/all`, {
        headers: { Authorization: token },
      });
      setRecipes(response.data);
    } catch (e) {
      console.log(e.response.data.message);
    }
  };

  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)" gap={3} >
        {recipes.map((recipe) => {
            return <Card key={recipe.id} title={recipe.title} image={recipe.imageUrl} id={recipe.id}/>;
        })}
      </Grid>
        <AddButton onClick={() => goToAddRecipe(navigate)} />
    </div>
  );
};
