import "styled-components";
import { Theme as ChakraTheme } from "@chakra-ui/react";

// Aqui estendemos o DefaultTheme do styled-components com o tema do Chakra
declare module "styled-components" {
  export interface DefaultTheme extends ChakraTheme {}
}
