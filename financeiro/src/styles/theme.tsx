import { extendTheme } from "@chakra-ui/react";

export const lightTheme = {
  primary: {
    300: "#ECEDF0",
    400: "#FDFDFF",
  },
  containerPrimary: "#dedede",
  menuPrimary: "#87d5fa",
  secondary: {
    300: "#646464",
    400: "#424242",
  },
  brand: {
    300: "#7C82FB",
    400: "#5F63FC",
  },
};
export const darkTheme = {
  primary: {
    300: "#646464",
    400: "#424242",
  },
  containerPrimary: "#636362",
  menuPrimary: "#226ff5",
  secondary: {
    300: "#ECEDF0",
    400: "#FDFDFF",
  },
  brand: {
    300: "#94d3ac",
    400: "#29c7ac",
  },
};
// Outras configurações de fontes e estilos personalizados
const customFontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
};
const customFontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};
// Tamanhos e breakpoints personalizados
const customSizes = {
  sizes: {
    max: "max-content",
    min: "min-content",
    full: "100%",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
  },
};
const customBreakpoints = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};
const theme = extendTheme({
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
  // Definição de tokens semânticos com alternância de cores
  semanticTokens: {
    colors: {
      primary: {
        default: lightTheme.primary[300],
        _dark: darkTheme.primary[300],
      },
      secondary: {
        default: lightTheme.secondary[300],
        _dark: darkTheme.secondary[300],
      },
      containerPrimary: {
        default: lightTheme.containerPrimary,
        _dark: darkTheme.containerPrimary,
      },
      menuPrimary: {
        default: lightTheme.menuPrimary,
        _dark: darkTheme.menuPrimary,
      },
      brand: {
        default: lightTheme.brand[300],
        _dark: darkTheme.brand[300],
      },
      background: {
        default: "white",
        _dark: "gray.800",
      },
      text: {
        default: "black",
        _dark: "white",
      },
      error: {
        default: "red.600",
        _dark: "red.100",
      },
    },
  },
  fontSizes: customFontSizes,
  fontWeights: customFontWeights,
  breakpoints: customBreakpoints,
  sizes: customSizes,
  config: {
    initialColorMode: "dark", // Tema inicial é claro
    useSystemColorMode: false, // Não usa o modo do sistema
  },
});
// 3. Exportando o tema para ser usado no ChakraProvider
export default theme;
