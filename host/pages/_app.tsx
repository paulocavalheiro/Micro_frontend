import { ChakraProvider, useColorMode, useTheme } from "@chakra-ui/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import theme from "./../styles/theme";
import { UserProvider } from "../contexts/UserContext";

export default function App({ Component, pageProps }: AppProps) {
  const customTheme = useTheme();

  return (
    <UserProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </UserProvider>
  );
}
