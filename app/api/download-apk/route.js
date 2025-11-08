export async function GET() {
  const githubApkUrl =
    "https://github.com/Mohammad-Afzal786/MohallaBazaarWeb/releases/download/v1.0.2/MohallaBazaar.apk";

  try {
    const response = await fetch(githubApkUrl);

    if (!response.ok) {
      return new Response("File not found on MohallaBazaar", { status: 404 });
    }

    return new Response(response.body, {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.android.package-archive",
        "Content-Disposition": "attachment; filename=MohallaBazaar.apk",
      },
    });
  } catch (error) {
    console.error("❌ Error fetching APK:", error);
    return new Response("Server error while fetching file", { status: 500 });
  }
}
