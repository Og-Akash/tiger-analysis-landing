import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Allow Strapi to embed the frontend in an iframe for preview
  const strapiUrl =
    process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

  // Set Content-Security-Policy to allow framing from Strapi
  response.headers.set(
    "Content-Security-Policy",
    `frame-ancestors 'self' ${strapiUrl}`,
  );

  return response;
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
