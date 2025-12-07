const SCRIPT =  `loadstring(game:HttpGet("https://raw.githubusercontent.com/VapeVoidware/VW-Add/main/loader.lua", true))()`

export async function GET() {
  return new Response(SCRIPT, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}