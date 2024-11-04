"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface NextProviderProps {
  children: ReactNode;
  session: any;
}

export default function NextAuthSessionProvider({
  children,
  session,
}: Readonly<NextProviderProps>) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
