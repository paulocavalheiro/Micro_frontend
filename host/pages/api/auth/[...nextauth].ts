import NextAuth, { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import UseLogin from "@/app/services/useLogin";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Senha", type: "password" },
      },

      async authorize(
        credentials: Record<"email" | "password", string | any> | undefined
      ) {
        console.log("Credenciais recebidas:", credentials);
        if (
          credentials?.email === "paulo@email" &&
          credentials.password === "123"
        ) {
          return { id: "1", name: "Paulo Henrique", email: "paulo@email" };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  pages: {
    signIn: "/",
    signOut: "/",
  },
  // cookies: {
  //   sessionToken: {
  //     name: `next-auth.session-token`,
  //     options: {
  //       httpOnly: true,
  //       secure:
  //         process.env.NODE_ENV === "production" ||
  //         process.env.USE_SECURE_COOKIES === "true", // Força secure em produção ou se definido manualmente
  //       sameSite: process.env.NODE_ENV === "development" ? "lax" : "none", // Usa 'lax' para localhost e 'none' em produção
  //       path: "/",
  //     },
  //   },
  // },
});
