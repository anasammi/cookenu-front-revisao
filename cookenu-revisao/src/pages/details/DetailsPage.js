import { Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/baseUrl";
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { DetailContainer } from "./styled";

export const DetailsPage  = () => {
    useProtectedPage();
    const [recipe, setRecipe] = useState()
    const {id} = useParams()

    useEffect(() => {
        getRecipeDetail(id)
    })

    const getRecipeDetail = async(id) => {
        try{
            const response = await axios.get(`${BASE_URL}/recipe/${id}`, {
                headers: { Authorization: localStorage.getItem("token") },
              })
            setRecipe(response.data)
        }
        catch(e) {
            console.log(e.response.data.message)
        }
    }
    return recipe && (
    <DetailContainer>
        <Image src={recipe.imageUrl}/>
        <Heading size="md">{recipe.title}</Heading>
        <Text>{recipe.description}</Text>
    </DetailContainer>
    )
}