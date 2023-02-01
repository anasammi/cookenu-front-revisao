import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { HeaderStyled } from "./styled";
import { goToFeed, goToLogin } from "../../../routes/coordinator";

export const Header = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token")
    goToLogin(navigate)
  }

  return (
    <HeaderStyled>
      <Button
        colorScheme="orange"
        variant="ghost"
        onClick={() => goToFeed(navigate)}
      >
        Cookenu
      </Button>
      {token ? (
        <Button
          colorScheme="orange"
          variant="ghost"
          onClick={logout}
        >
          Logout
        </Button>
      ) : (
        <Button
          colorScheme="orange"
          variant="ghost"
          onClick={() => {
            goToLogin(navigate);
          }}
        >
          Login
        </Button>
      )}
    </HeaderStyled>
  );
};
