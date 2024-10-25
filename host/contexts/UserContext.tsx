import { createContext, useContext, useState, ReactNode } from "react";

export type UserContextType = {
  user: {
    name: string;
    email: string;
    teste?: string;
  } | null;
  setUser: (userData: { name: string; email: string }) => void;
  clearUser: () => void;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserState] = useState<UserContextType["user"]>(null);

  const setUser = (userData: { name: string; email: string }) => {
    setUserState(userData);
  };

  const clearUser = () => {
    setUserState(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para usar o contexto
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser deve ser um provider UserProvider");
  }
  return context;
};
