import { NextRequest, NextResponse } from "next/server";
import { generateMarkdownForAgents } from "@/lib/markdown-content";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get("path") || "/";

  const { markdown, markdownTokens, originalTokens } =
    generateMarkdownForAgents(path);

  return new NextResponse(markdown, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept",
      "x-markdown-tokens": markdownTokens.toString(),
      "x-original-tokens": originalTokens.toString(),
      "content-signal": "ai-train=yes, search=yes, ai-input=yes",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
