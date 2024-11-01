import NextAuth, { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
// import UseLogin from "@/app/services/useLogin";

/**
 * autenticacao e criacao session
 */
// const nextAuthOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "text",
//         },
//         password: {
//           label: "Password",
//           type: "password",
//         },
//       },
//       async authorize(
//         credentials: Record<"email" | "password", string | any> | undefined
//       ) {
//         console.log("Credenciais recebidas:", credentials);
//         if (
//           credentials?.email === "paulo@email" &&
//           credentials.password === "123"
//         ) {
//           return { id: "1", name: "Paulo", email: "paulo@email" };
//         }
//         return null;
//       },
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,

//   pages: {
//     signIn: "/",
//     signOut: "/",
//     error: "/",
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.user = user;
//       }
//       return token;
//     },
//     async session({ token }) {
//       const newSession = token.user as Session;
//       return newSession;
//     },
//   },
// };

// export default NextAuth(nextAuthOptions);

// export  { handler as GET, handler as POST, nextAuthOptions };

// pages/api/auth/[...nextauth].js
// import NextAuth, { RequestInternal } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
console.log("aaaaaaaaaaaa");
export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Senha", type: "password" },
      },

      async authorize(
        credentials: Record<"email" | "password", string> | undefined
      ) {
        // Lógica de autenticação (substitua por seu sistema de login)
        if (
          credentials?.email === "paulo@email" &&
          credentials?.password === "123"
        ) {
          return { name: "Paulo h", email: "paulo@email" };
        } else {
          return null;
        }
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
