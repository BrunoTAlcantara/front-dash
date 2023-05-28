import { Card, CardBody, Icon, Stack, Flex, Text } from "@chakra-ui/react";

import { LucideIcon } from "lucide-react";

interface ICardInfoProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

export default function CardInfo({
  title,
  value,
  color,

  icon,
}: ICardInfoProps) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="elevated"
      colorScheme="green"
      bg={color}
    >
      <Stack>
        <CardBody>
          <Flex mx="auto" alignItems="center">
            <Flex
              h="50px"
              w="50px"
              alignItems="center"
              justifyContent="center"
              borderRadius="100%"
              mr="3"
              color="#FFFFFF"
            >
              <Icon fontSize="4xl" as={icon}></Icon>
            </Flex>
            <div>
              <Text fontSize="large" fontWeight="bold" color="gray.100">
                {title}
              </Text>
              <Text fontSize="2xl" fontWeight="bold" color="gray.100">
                {value}
              </Text>
            </div>
          </Flex>
        </CardBody>
      </Stack>
    </Card>
  );
}
