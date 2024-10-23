import { ReactNode } from "react";
import { Button, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import Header from "./Header";
import styled from "@emotion/styled";
import LeftMenu from "./LeftMenu";

type LayoutProps = {
  children: JSX.Element; // Definindo que o children será do tipo ReactNode (JSX válido)
};

export default function Layout({ children }: LayoutProps) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <StyledGrid
      bg={"containerPrimary"}
      templateAreas={`"header header"
                        "nav main"`}
      gridTemplateRows={"80px 1fr"}
      gridTemplateColumns={"150px 1fr"}
      h="100vh"
      gap="2"
      fontWeight="bold"
    >
      <GridItem
        bg={"containerPrimary"}
        className="headerGrid"
        pl="2"
        area={"header"}
      >
        <Header />
      </GridItem>
      <GridItem pl="2" bg={"containerPrimary"} area={"nav"}>
        <LeftMenu />
      </GridItem>
      <GridItem
        pl="2"
        bg={"containerPrimary"}
        area={"main"}
        sx={{ padding: "10px" }}
      >
        {/* Renderizando o conteúdo passado como children */}
        {children}
      </GridItem>
    </StyledGrid>
  );
}

const StyledGrid = styled(Grid)`
  background-color: #d4d4d4;
  .headerGrid {
    padding: 10px;
    display: flex;
    justify-content: center;
  }
`;
