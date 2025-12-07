const SCRIPT =  `loadstring(game:HttpGet("https://raw.githubusercontent.com/PreppyHub/PreppyHub/refs/heads/main/PreppyHub"))()`

export async function GET() {
  return new Response(SCRIPT, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}