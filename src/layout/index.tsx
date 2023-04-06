import dynamic from "next/dynamic";

import { Flex } from "@chakra-ui/react";

import { Header } from "@/components/Header";
import { ReactNode } from "react";
import { Sidebar } from "@/components/Sidebar";
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth="1480" mx="auto" px="6">
        <Sidebar />
        <Flex w="100%" flexDir="column" gap={10}>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}
