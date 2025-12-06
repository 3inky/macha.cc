import { ScriptViewer } from "@/components/script-viewer"
import { notFound } from "next/navigation"

const scripts: Record<string, { name: string; endpoint: string }> = {
  rspy: {
    name: "Remote Spy",
    endpoint: "/raw/rspy",
  },
  dex: {
    name: "Dex Explorer",
    endpoint: "/raw/dex",
  },
}

export default async function ViewerPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const script = scripts[id]

  if (!script) {
    notFound()
  }

  return <ScriptViewer scriptId={id} scriptName={script.name} endpoint={script.endpoint} />
}
