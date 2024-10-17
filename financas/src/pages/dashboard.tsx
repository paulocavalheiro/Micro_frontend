import DashboardUser from "@/components/DashboardUser";
import { Box } from "@chakra-ui/react";

export default function dashboard() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "#f7e2a6",
      }}
    >
      <DashboardUser />
    </Box>
  );
}
