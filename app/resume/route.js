import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const filePath = path.join(process.cwd(), "Senior software engineer Gulf.pdf");
  const file = await readFile(filePath);

  return new Response(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Akhil-VS-Resume.pdf"',
    },
  });
}
