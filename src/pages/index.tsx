import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from "@chakra-ui/react";

import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Bem vindo!</Heading>
          <FormControl colorScheme="green" id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl colorScheme="green" id="password">
            <FormLabel>Senha</FormLabel>
            <Input colorScheme="green" type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Lembrar Senha</Checkbox>
              <Link color={"green.500"}>Esqueceu a senha?</Link>
            </Stack>
            <Button colorScheme={"green"} variant={"solid"}>
              Entrar
            </Button>
          </Stack>
        </Stack>
      </Flex>
      {/* <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex> */}
    </Stack>
  );
}
