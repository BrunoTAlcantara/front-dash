/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-nested-ternary */

import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Link,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Spinner,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Edit, X, Plus } from "lucide-react";
import NextLink from "next/link";

import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Pagination } from "@/components/Pagination";
import CardApostas from "@/components/Cards/cardAposta";

export default function UsersList(): JSX.Element {
  const [page, setPage] = useState(1);

  //const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  interface Product {
    id: number;
    name: string;
    price: number;
    estoque: number;
    created_at: string;
  }

  const data: Product[] = [
    {
      id: 1,
      name: "coca-cola",
      price: 5,
      estoque: 10,
      created_at: "10/03/2023",
    },
    {
      id: 1,
      name: "chocolate",
      price: 10,
      estoque: 10,
      created_at: "10/03/2023",
    },
    { id: 1, name: "nescal", price: 15, estoque: 10, created_at: "10/03/2023" },
  ];

  if (isLoading) {
    return <p>Data is loading...</p>;
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth="1480" mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <CardApostas></CardApostas>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Produtos
            </Heading>
            <CardApostas></CardApostas>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="green"
              leftIcon={<Icon as={Plus} fontSize="20" />}
            >
              Criar Novo
            </Button>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={["4", "4", "6"]} color="gray.300" width="8">
                      <Checkbox colorScheme="green" />
                    </Th>
                    <Th>Usuário</Th>
                    <Th>Preço</Th>
                    <Th>Estoque</Th>
                    {isWideVersion && <Th>Data de Cadastro</Th>}
                    <Th width="40" />
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((product: Product) => (
                    <Tr key={product.id}>
                      <Td px="6">
                        <Checkbox colorScheme="green" />
                      </Td>
                      <Td>
                        <Text fontWeight="bold">{product.name}</Text>
                      </Td>
                      <Td>
                        <Text fontWeight="bold">R$ {product.price}</Text>
                      </Td>
                      <Td>
                        <Text fontWeight="bold">{product.estoque} unid</Text>
                      </Td>
                      {isWideVersion && <Td>{product.created_at}</Td>}
                      {isWideVersion && (
                        <Td>
                          <Box
                            display="flex"
                            flexDir="row"
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <Button
                              as="a"
                              size="sm"
                              fontSize="sm"
                              colorScheme="purple"
                            >
                              <Icon as={Edit} fontSize="20" />
                            </Button>
                            <Button
                              as="a"
                              size="sm"
                              fontSize="sm"
                              colorScheme="red"
                            >
                              <Icon as={X} fontSize="20" />
                            </Button>
                          </Box>
                        </Td>
                      )}
                    </Tr>
                  ))}
                </Tbody>
              </Table>

              <Pagination
                totalCountOfRegisters={4}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
