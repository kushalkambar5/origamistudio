import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const acceptHeader = request.headers.get("accept") || "";

  // Check if the client requests text/markdown (Cloudflare Markdown for Agents standard)
  if (acceptHeader.includes("text/markdown")) {
    const { pathname } = request.nextUrl;

    // Do not negotiate for static assets, internal Next.js assets, or API routes
    if (
      !pathname.startsWith("/_next") &&
      !pathname.startsWith("/api") &&
      !pathname.endsWith(".xml") &&
      !pathname.endsWith(".txt") &&
      !pathname.endsWith(".png") &&
      !pathname.endsWith(".jpg") &&
      !pathname.endsWith(".jpeg") &&
      !pathname.endsWith(".svg") &&
      !pathname.endsWith(".ico") &&
      !pathname.endsWith(".webmanifest")
    ) {
      const url = request.nextUrl.clone();
      url.pathname = "/api/markdown-negotiate";
      url.searchParams.set("path", pathname);
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for static files (_next/static, _next/image, favicon.ico, etc.)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
