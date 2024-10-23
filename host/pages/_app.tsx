import { ChakraProvider, useColorMode, useTheme } from "@chakra-ui/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import theme from "./../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  const customTheme = useTheme();

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
