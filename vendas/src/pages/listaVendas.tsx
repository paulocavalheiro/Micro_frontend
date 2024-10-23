import {
  Box,
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function ListaFinanceiro() {
  const salesData = [
    {
      id: 1,
      product: "Produto A",
      quantity: 5,
      total: "R$ 500,00",
      date: "2024-10-20",
    },
    {
      id: 2,
      product: "Produto B",
      quantity: 3,
      total: "R$ 300,00",
      date: "2024-10-21",
    },
    {
      id: 3,
      product: "Produto C",
      quantity: 8,
      total: "R$ 800,00",
      date: "2024-10-22",
    },
  ];

  const router = useRouter();

  return (
    <>
      <Text fontSize="2xl" mb={4}>
        Resumo vendas
      </Text>
      <Box margin="0 auto" mt={10} width={"100%"}>
        <TableContainer>
          <Table variant="striped" colorScheme="gray">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Produto</Th>
                <Th>Quantidade</Th>
                <Th>Total</Th>
                <Th>Data</Th>
              </Tr>
            </Thead>
            <Tbody>
              {salesData.map((sale) => (
                <Tr key={sale.id}>
                  <Td>{sale.id}</Td>
                  <Td>{sale.product}</Td>
                  <Td>{sale.quantity}</Td>
                  <Td>{sale.total}</Td>
                  <Td>{sale.date}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
