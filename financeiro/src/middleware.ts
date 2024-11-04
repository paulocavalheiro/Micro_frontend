import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req: any) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // direatorios privados
  const protectedRoutes = ["/teste"];

  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    if (!token) {
      // redireciona caso n esteja autenticado
      return NextResponse.redirect(new URL("/", process.env.NEXTAUTH_URL));
    }
  }

  return NextResponse.next();
}
