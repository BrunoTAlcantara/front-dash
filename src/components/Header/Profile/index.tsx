import { useUser } from "@auth0/nextjs-auth0/client";
import { Avatar, Box, Flex, Img, Text } from "@chakra-ui/react";

interface IProfileProps {
  showProfileData?: boolean;
}

export function Profile({
  showProfileData = true,
}: IProfileProps): JSX.Element {
  const { isLoading, user, error } = useUser();

  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>{user?.name}</Text>
          <Text color="gray.300" fontSize="small">
            {user?.email}
          </Text>
          <Img src=""></Img>
        </Box>
      )}

      {user?.picture ? (
        <>
          <Avatar size="md" name="Bruno Theodoro" src={user?.picture} />
        </>
      ) : (
        <Avatar size="md" name="Bruno Theodoro" />
      )}
    </Flex>
  );
}
