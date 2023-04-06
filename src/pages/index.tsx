import { Flex, Button, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@/components/Form/Input";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = Yup.object().shape({
  email: Yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: Yup.string().required("Senha obrigatório"),
});

export default function Home(): JSX.Element {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const { isLoading, user, error } = useUser();

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = ({ email, password }) => {
    console.log(email, password);
  };

  const { push } = useRouter();
  const handleLogout = () => push("/api/auth/logout");
  const handleLogin = () => push("/api/auth/login?returnTo=/dashboard");

  if (isLoading) return <h1>Carregando</h1>;

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          {user ? (
            <>
              <Button onClick={handleLogout}> Logout</Button>
            </>
          ) : (
            <Button bg="orange.500" onClick={handleLogin}>
              Logar
            </Button>
          )}
        </Stack>
      </Flex>
    </Flex>
  );
}
