import { Text } from "@chakra-ui/react";

export function Logo(): JSX.Element {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      Dash
      <Text as="span" ml="1" color="orange.500">
        Admin
      </Text>
    </Text>
  );
}
