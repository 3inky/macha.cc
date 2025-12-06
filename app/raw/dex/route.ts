const DEX_SCRIPT = `loadstring(game:HttpGet("https://obj.wearedevs.net/2/scripts/Dex%20Explorer.lua"))()`

export async function GET() {
  return new Response(DEX_SCRIPT, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
