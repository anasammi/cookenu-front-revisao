import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { goToDetails } from "../../../routes/coordinator";

export default function Card({ title, image, id }) {
    const navigate = useNavigate()
  return (
    <Center py={12} >
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={image}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {title}
          </Heading>
        <Button width="99%" colorScheme={"orange"} onClick={() => {goToDetails(navigate, id)}}>Ver mais</Button>
        </Stack>
        
      </Box>
    </Center>
  );
}
