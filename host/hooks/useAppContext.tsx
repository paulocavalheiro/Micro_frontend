import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const useAppContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
