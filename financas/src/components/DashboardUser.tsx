import {
  Box,
  Button,
  List,
  ListIcon,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

export default function DashboardUser() {
  const handleAdicionarItem = () => {
    console.log("Adicionar");
  };

  return (
    <Box
      sx={{
        backgroundColor: "gray",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        borderRadius: "10px",
        border: "1px solid black",
      }}
    >
      <UnorderedList>
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </UnorderedList>
      <Button
        sx={{ marginTop: "20px" }}
        bg={"black"}
        color={"white"}
        onClick={handleAdicionarItem}
      >
        Adicionar Item
      </Button>
    </Box>
  );
}
