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
  const financialData = [
    {
      id: 1,
      type: "Entrada",
      description: "Venda de Produto A",
      amount: "R$ 500,00",
      date: "2024-10-20",
    },
    {
      id: 2,
      type: "Saída",
      description: "Compra de matéria-prima",
      amount: "R$ 300,00",
      date: "2024-10-21",
    },
    {
      id: 3,
      type: "Entrada",
      description: "Venda de Produto B",
      amount: "R$ 800,00",
      date: "2024-10-22",
    },
    {
      id: 4,
      type: "Saída",
      description: "Pagamento de fornecedor",
      amount: "R$ 200,00",
      date: "2024-10-23",
    },
  ];

  const router = useRouter();

  return (
    <>
      <Text fontSize="2xl" mb={4}>
        Resumo Financeiro
      </Text>
      <Box margin="0 auto" mt={10} width={"100%"}>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Tipo</Th>
                <Th>Descrição</Th>
                <Th>Valor</Th>
                <Th>Data</Th>
              </Tr>
            </Thead>
            <Tbody>
              {financialData.map((entry) => (
                <Tr key={entry.id}>
                  <Td>{entry.id}</Td>
                  <Td>{entry.type}</Td>
                  <Td>{entry.description}</Td>
                  <Td>{entry.amount}</Td>
                  <Td>{entry.date}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
