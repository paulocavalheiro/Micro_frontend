import { AddIcon, ExternalLinkIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      bg={"menuPrimary"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Text>Header Menu</Text>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
        />
        <MenuList>
          <MenuItem icon={<AddIcon />} command="⌘T">
            Novo usuario
          </MenuItem>
          <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
            Perfil
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}
