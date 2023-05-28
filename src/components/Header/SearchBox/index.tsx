import { useRef, useState } from "react";
import { Flex, Input, Icon } from "@chakra-ui/react";
import { Search } from "lucide-react";

export function SearchBox(): JSX.Element {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [queryText, setQueryText] = useState("");
  const [seachResult, setSeachResult] = useState([]);

  const handleChange = (e) => setQueryText(e.target.value);

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        a
        px="4"
        mr="2"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: "gray.400" }}
        ref={searchInputRef}
      />

      <Icon as={Search} fontSize="20" />
    </Flex>
  );
}
