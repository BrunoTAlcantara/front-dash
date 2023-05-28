import { Avatar, Box, Flex, Img, Text } from "@chakra-ui/react";

interface IProfileProps {
  showProfileData?: boolean;
}

export function Profile({
  showProfileData = true,
}: IProfileProps): JSX.Element {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Bruno Theodoro</Text>
        <Text color="gray.300" fontSize="small">
          brunotheodoro123@gmail.com
        </Text>
        <Img src=""></Img>
      </Box>
    </Flex>
  );
}
