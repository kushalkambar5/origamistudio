import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export interface ClientVideo {
  id: string;
  title: string;
  client: string;
  category: string;
  src: string;
}

export async function GET() {
  try {
    const clientsDir = path.join(process.cwd(), "public", "clients");
    
    if (!fs.existsSync(clientsDir)) {
      return NextResponse.json([]);
    }

    const files = fs.readdirSync(clientsDir);
    const mp4Files = files.filter((file) => file.toLowerCase().endsWith(".mp4"));

    const videos: ClientVideo[] = mp4Files.map((file) => {
      // Standard Format parsing: "Client - Title - Category.mp4" or "Client - Title.mp4" or "Title.mp4"
      const nameWithoutExt = file.replace(/\.mp4$/i, "");
      const parts = nameWithoutExt.split(" - ").map((p) => p.trim());

      let client = "Origami Studio";
      let title = nameWithoutExt;
      let category = "Client Project";

      if (parts.length >= 3) {
        client = parts[0];
        title = parts[1];
        category = parts.slice(2).join(" - ");
      } else if (parts.length === 2) {
        client = parts[0];
        title = parts[1];
      } else if (parts.length === 1 && parts[0]) {
        title = parts[0];
      }

      const id = nameWithoutExt.toLowerCase().replace(/[^a-z0-9]+/g, "-");

      return {
        id,
        title,
        client,
        category,
        src: `/clients/${encodeURIComponent(file)}`,
      };
    });

    return NextResponse.json(videos, {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error) {
    console.error("Error reading client videos directory:", error);
    return NextResponse.json([], { status: 500 });
  }
}
