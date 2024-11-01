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
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const logout = async () => {
    await signOut({ redirect: false });
    router.replace("/");
  };

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
      <Text>Bem vindo</Text>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
        />
        <MenuList>
          <MenuItem icon={<AddIcon />} command="⌘T" onClick={logout}>
            Sair
          </MenuItem>
          <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
            Perfil
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}
