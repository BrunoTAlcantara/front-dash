import {
  Card,
  Flex,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Badge,
} from "@chakra-ui/react";

import { LucideIcon } from "lucide-react";

interface ICardInfoProps {
  title: string;
  data: string;
  value: string;
  icon: LucideIcon;
  status: string;
}

export default function CardApostas() {
  return (
    <Card
      direction={{ base: "column", sm: "column" }}
      overflow="hidden"
      variant="elevated"
      colorScheme="green"
      bg="gray.800"
      border="1px solid"
      borderColor="gray.700"
      color="white"
    >
      <Accordion w="100%" allowToggle>
        <AccordionItem border="none">
          <AccordionButton justifyContent="space-between">
            <Flex gap="20px" w="100%" alignItems="center">
              <AccordionIcon></AccordionIcon>
              <Flex flexDir="column" gap="10px" alignItems="flex-start">
                <Flex gap="10px">
                  <Text fontSize="12px"> 05/04/2023 - 19:38 </Text>
                  <Badge colorScheme="purple">Mais de 1.5</Badge>
                  <Badge colorScheme="green">3x</Badge>
                </Flex>
                <Flex alignItems="flex-start" flexDir="column" mb="5px">
                  <Flex gap="10px">
                    <Text fontSize="20px"> Corinthians 1.5</Text>
                    <Text fontSize="20px"> - R$500 </Text>
                  </Flex>

                  <Text fontSize="14px" color="gray.200">
                    Corinthians x Palmeiras
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </AccordionButton>

          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Flex
        bg="green.500"
        justifyContent="space-between"
        fontWeight="bold"
        px="10px"
        py="4px"
      >
        <Text>Ganhou</Text>
        <Text>R$ 500</Text>
      </Flex>
    </Card>
  );
}
