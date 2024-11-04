import { ChakraProvider, useColorMode, useTheme } from "@chakra-ui/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import theme from "./../styles/theme";
import { UserProvider } from "../contexts/UserContext";
import NextAuthSessionProvider from "../providers/sessionProviderAuth";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const customTheme = useTheme();

  return (
    <NextAuthSessionProvider session={session}>
      <UserProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </UserProvider>
    </NextAuthSessionProvider>
  );
}
