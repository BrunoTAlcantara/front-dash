import dynamic from "next/dynamic";

import { Box, SimpleGrid, Text } from "@chakra-ui/react";

import CardInfo from "@/components/Cards/cardInfo";
import { DollarSign, Wallet, Package2, ArrowDownCircle } from "lucide-react";
import Layout from "@/layout";

import { withPageAuthRequired } from "@auth0/nextjs-auth0";

import useSwr from "swr";

import {
  api,
  createUser,
  getUser,
  userUrlEndpoint as CacheKey,
} from "../../services/api";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

const AreaCharts = dynamic(() => import("@/components/Charts/areaChart"));
const PieCharts = dynamic(() => import("@/components/Charts/pieChart"));

export default function Dashboard(): JSX.Element {
  const { isLoading, error, data, mutate } = useSwr(CacheKey, getUser);

  const { user } = useUser();

  const [register, setRegister] = useState(true);

  return (
    <>
      {register && isLoading ? (
        <h1>Carregando</h1>
      ) : (
        <Layout>
          <SimpleGrid
            flex="1"
            gap="4"
            minChildWidth="200px"
            alignItems="flex-start"
          >
            <CardInfo
              title="Faturamento"
              value="R$ 30.000"
              color="green.600"
              icon={DollarSign}
            />
            <CardInfo
              title="Produtos"
              value="250 und"
              color="blue.600"
              icon={Package2}
            />
            <CardInfo
              title="Despesas"
              value="R$ 8.000"
              color="red.600"
              icon={ArrowDownCircle}
            />
            <CardInfo
              title="Caixa"
              value="R$ 22.000"
              color="orange.500"
              icon={Wallet}
            />
          </SimpleGrid>

          <SimpleGrid
            flex="1"
            gap="4"
            minChildWidth="320px"
            alignItems="flex-start"
          >
            <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" mb="4">
                Quantidade de Produtos
              </Text>
              <PieCharts />
            </Box>

            <Box p="8" bg="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" mb="4">
                Faturamento do Mes
              </Text>
              <AreaCharts />
            </Box>
          </SimpleGrid>
        </Layout>
      )}
    </>
  );
}

export const getServerSideProps = withPageAuthRequired({
  returnTo: "/",
});
