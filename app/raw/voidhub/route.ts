const SCRIPT =  `loadstring(game:HttpGet("https://raw.githubusercontent.com/coldena/voidhuba/refs/heads/main/voidhubload"))()`

export async function GET() {
  return new Response(SCRIPT, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}