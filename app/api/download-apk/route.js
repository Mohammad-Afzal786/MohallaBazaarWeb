import fs from "fs";
import path from "path";

export async function GET(req, res) {
  const filePath = path.join(process.cwd(), "public", "MohallaBazaar.apk");

  try {
    const stat = fs.statSync(filePath);

    return new Response(fs.createReadStream(filePath), {
      status: 200,
      headers: {
        "Content-Length": stat.size.toString(),
        "Content-Type": "application/vnd.android.package-archive",
        "Content-Disposition": "attachment; filename=MohallaBazaar.apk",
      },
    });
  } catch (err) {
    return new Response("File not found", { status: 404 });
  }
}
