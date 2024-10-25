declare module "host/pages/privateLayout";
declare module "host/pages/telaFinancas";
declare module "host/contexts/UserProvider" {
  export type { UserContextType } from "host/contexts/UserProvider";
  export { UserProvider, useUser } from "host/contexts/UserProvider";
}
