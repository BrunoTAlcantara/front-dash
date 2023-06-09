import { Icon, HStack } from "@chakra-ui/react";

import { Bell, UserPlus } from "lucide-react";

export function NotificationNav(): JSX.Element {
  return (
    <HStack
      spacing={["6", "8"]}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={Bell} fontSize="20" />

      <Icon as={UserPlus} fontSize="20" />
    </HStack>
  );
}
