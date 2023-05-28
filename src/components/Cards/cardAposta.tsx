import {
  Card,
  CardBody,
  Icon,
  Stack,
  Flex,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

import { Box, LucideIcon } from "lucide-react";

interface ICardInfoProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

export default function CardApostas() {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="elevated"
      colorScheme="green"
    >
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <AccordionIcon />
              Ola
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}
