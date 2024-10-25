import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "@/styles/theme";
import dynamic from "next/dynamic";

const UserProviderHost = dynamic<{ children: React.ReactNode }>(
  () => import("host/contexts/UserProvider").then((mod) => mod.UserProvider),
  { ssr: false }
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProviderHost>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </UserProviderHost>
  );
}
