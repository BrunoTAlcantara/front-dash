import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Divider,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

import * as yup from "yup";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import axios from "axios";

import { CreateUserFormData } from "./@types";
import Layout from "@/layout";
import { useState } from "react";
import { Input } from "@/components/Form/Input";

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "No mínimo 6 caracteres"),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], " As senhas precisam ser iguais"),
});

export default function CreateUser(): JSX.Element {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    setIsLoading(true);
    try {
      await axios.post("api/users", {
        user: {
          ...values,
          created_at: new Date(),
        },
      });
      router.push("/users");
    } catch (error) {
      setError("Não foi possível criar o usuário.");
    }
    setIsLoading(false);
  };

  return (
    <Layout>
      <Box
        as="form"
        onSubmit={handleSubmit(handleCreateUser)}
        flex="1"
        borderRadius={8}
        bg="gray.800"
        p={["6", "8"]}
      >
        <Heading size="md" fontWeight="normal">
          Criar usuário
        </Heading>

        <Divider my="6" borderColor="gray.700" />

        <VStack spacing="8">
          <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
            <Input
              name="name"
              label="Produto"
              error={formState.errors.name}
              {...register("name")}
            />
            <Input
              name="price"
              type="number"
              label="Preço"
              error={formState.errors.email}
              {...register("price")}
            />
          </SimpleGrid>

          <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
            <Input
              name="description"
              label="Descrição"
              error={formState.errors.password}
              {...register("description")}
            />
          </SimpleGrid>
        </VStack>

        <Flex mt="8" justify="flex-end">
          <HStack spacing="4">
            <Button
              type="submit"
              isLoading={formState.isSubmitting}
              colorScheme="orange"
            >
              Salvar
            </Button>
          </HStack>
        </Flex>
      </Box>
    </Layout>
  );
}
