import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { SidebarDrawerProvider } from "@/contexts/SidebarDrawerContext";
import { UserProvider } from "@auth0/nextjs-auth0/client";

import { theme } from "@/styles/theme";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <UserProvider>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
    </UserProvider>
  );
}

export default MyApp;
