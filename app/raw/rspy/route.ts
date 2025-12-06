import { RSPY_SCRIPT } from "@/lib/scripts/rspy"

export async function GET() {
  return new Response(RSPY_SCRIPT, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
