import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

type FileItem = {
  name: string;
  url: string;
  type: "pdf" | "image";
};

async function readDirRecursive(dir: string, basePublic: string, acc: FileItem[]) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await readDirRecursive(full, basePublic, acc);
    } else {
      const lower = entry.name.toLowerCase();
      const isPdf = lower.endsWith(".pdf");
      const isImg = [".jpg", ".jpeg", ".png", ".webp"].some(ext => lower.endsWith(ext));
      const isDiplomaLike = lower.includes("diplom");
      if ((isPdf || isImg) && isDiplomaLike) {
        const rel = full.replace(basePublic, "").replace(/\\/g, "/");
        acc.push({
          name: entry.name,
          url: rel.startsWith("/") ? rel : `/${rel}`,
          type: isPdf ? "pdf" : "image",
        });
      }
    }
  }
}

export async function GET() {
  try {
    const publicDir = path.join(process.cwd(), "public");
    const items: FileItem[] = [];
    await readDirRecursive(publicDir, publicDir, items);
    // Sort by name for stable order
    items.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
    return NextResponse.json({ items });
  } catch (err) {
    return NextResponse.json({ items: [], error: "Failed to read certificates" }, { status: 500 });
  }
}



