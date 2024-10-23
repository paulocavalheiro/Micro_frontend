import { Box, List, ListItem } from "@chakra-ui/react";
import Link from "next/link";

export default function LeftMenu() {
  return (
    <Box as="nav" width="100%" height={"100%"} p="4" bg="menuPrimary">
      <List spacing={4}>
        <ListItem>
          <Link href="/vendas/telaVendas">Vendas</Link>
        </ListItem>
        <ListItem>
          <Link href="/financeiro/telaFinanceiro">Financeiro</Link>
        </ListItem>
      </List>
    </Box>
  );
}
