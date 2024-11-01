import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: any) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // diretorios privados
  const protectedRoutes = ["/financeiro"];

  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/"; // redireciona para o login
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}
