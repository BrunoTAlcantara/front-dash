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
      colorScheme="orange"
      bg={color}
    >
      <Stack>
        <CardBody>
          <Flex mx="auto" alignItems="center">
            <Flex
              border="solid "
              h="10"
              w="10"
              alignItems="center"
              justifyContent="center"
              borderWidth="1px"
              borderRadius="100%"
              mr="3"
            >
              <Icon as={icon}></Icon>
            </Flex>
            <div>
              <Text fontSize="xs" color="gray.100">
                {title}
              </Text>
              <Text>{value}</Text>
            </div>
          </Flex>
        </CardBody>
      </Stack>
    </Card>
  );
}
