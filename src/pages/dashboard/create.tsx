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

import { useRouter } from "next/dist/client/router";

import * as yup from "yup";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import axios from "axios";

import Layout from "@/layout";
import { useState } from "react";
import { Input } from "@/components/Form/Input";

export type CreateUserFormData = {
  name: string;
  price: number;
  description: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  price: yup.number().required("Preço obrigatório"),
  description: yup.string().required("Descricao obrigatória"),
});

export default function CreateUser(): JSX.Element {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const handleCreateUser = async (values: any) => {
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
            <Input label="Produto" {...register("name")} />
            <Input type="number" label="Preço" {...register("price")} />
          </SimpleGrid>

          <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
            <Input label="Descrição" {...register("description")} />
          </SimpleGrid>
        </VStack>

        <Flex mt="8" justify="flex-end">
          <HStack spacing="4">
            <Button
              type="submit"
              isLoading={formState.isSubmitting}
              colorScheme="green"
            >
              Salvar
            </Button>
          </HStack>
        </Flex>
      </Box>
    </Layout>
  );
}
