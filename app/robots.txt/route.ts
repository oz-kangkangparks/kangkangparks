export async function GET() {
  const body = `User-agent: *
Allow: /
Sitemap: https://www.ganggangbox.example/sitemap.xml`
  return new Response(body, { headers: { "Content-Type": "text/plain" } })
}
