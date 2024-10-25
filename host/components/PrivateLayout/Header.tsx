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
import { useAppContext } from "../../hooks/useAppContext";

export default function Header() {
  const { user } = useAppContext();

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
      <Text>
        Bem vindo {user?.name} - {user?.email}
      </Text>
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
