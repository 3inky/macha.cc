"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Copy, Check, Sparkles, Star, Cloud } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export interface NewViewInstanceProps {
  loadstring: string
  rawUrl: string
}

function DoodleDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating stars */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute text-pink-300/40"
          style={{
            left: `${10 + i * 15}%`,
            top: `${10 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          <Star className="w-6 h-6" fill="currentColor" />
        </motion.div>
      ))}

      {/* Floating clouds */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`cloud-${i}`}
          className="absolute text-pink-200/40"
          style={{
            right: `${5 + i * 20}%`,
            top: `${15 + i * 20}%`,
          }}
          animate={{
            x: [0, 15, 0],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          <Cloud className="w-10 h-10" />
        </motion.div>
      ))}

      {/* Doodle circles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full border-2 border-dashed border-pink-300/25"
          style={{
            width: 40 + i * 20,
            height: 40 + i * 20,
            left: `${20 + i * 12}%`,
            bottom: `${10 + i * 8}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: { duration: 20 + i * 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        />
      ))}
    </div>
  )
}

export function NewViewInstance({ loadstring, rawUrl }: NewViewInstanceProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(loadstring)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="max-w-3xl mx-auto space-y-6 relative z-10"
    >
      {/* Loadstring card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="bg-white/80 rounded-3xl border-2 border-dashed border-pink-300 shadow-[4px_4px_0_0_rgba(244,114,182,0.25)] overflow-hidden"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b-2 border-dashed border-pink-200 bg-pink-50/80">
          <span className="text-sm text-pink-500 flex items-center gap-2 font-medium">
            <Sparkles className="w-4 h-4 text-pink-400" />
            Loadstring
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="text-pink-500 hover:text-pink-600 hover:bg-pink-100/80 rounded-2xl border-2 border-dashed border-pink-300"
          >
            {copied ? (
              <motion.span
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="flex items-center text-pink-600"
              >
                <Check className="h-4 w-4 mr-2" />
                Copied~
              </motion.span>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </>
            )}
          </Button>
        </div>
        <div className="p-4">
          <pre className="text-pink-600 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
            <code>{loadstring}</code>
          </pre>
        </div>
      </motion.div>

      {/* How to use */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.28 }}
        className="bg-white/80 rounded-3xl border-2 border-dashed border-pink-300 p-4 shadow-[4px_4px_0_0_rgba(248,187,208,0.5)]"
      >
        <h2 className="text-lg font-semibold text-pink-600 mb-2 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-pink-400" />
          How to use~
        </h2>
        <ol className="list-decimal list-inside text-pink-500 text-sm space-y-1.5">
          <li>Copy the loadstring code above</li>
          <li>Open your executor</li>
          <li>Paste the code & execute ✨</li>
        </ol>
      </motion.div>

      {/* Raw endpoint */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.34 }}
        className="bg-white/80 rounded-3xl border-2 border-dashed border-pink-300 p-4 shadow-[4px_4px_0_0_rgba(252,231,243,0.7)]"
      >
        <h2 className="text-lg font-semibold text-pink-600 mb-2 flex items-center gap-2">
          <Star className="w-5 h-5 fill-pink-300 text-pink-400" />
          Raw Endpoint
        </h2>
        <code className="block bg-pink-50/80 border border-dashed border-pink-200 rounded-2xl p-3 text-pink-600 font-mono text-sm break-all">
          {rawUrl}
        </code>
      </motion.div>
    </motion.div>
  )
}

interface ScriptViewerProps {
  scriptId: string
  scriptName: string
  endpoint: string
}

export function ScriptViewer({ scriptId, scriptName, endpoint }: ScriptViewerProps) {
  const loadstringCode = `loadstring(game:HttpGet("https://machacc.vercel.app${endpoint}"))()`
  const rawUrl = `https://machacc.vercel.app${endpoint}`

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 text-rose-800 relative">
      <DoodleDecorations />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border-b-2 border-dashed border-pink-300/60 bg-white/70 backdrop-blur-sm sticky top-0 z-20"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button
                variant="ghost"
                size="icon"
                className="text-pink-500 hover:text-pink-600 hover:bg-pink-100/70 rounded-2xl border-2 border-dashed border-transparent hover:border-pink-300 transition-all"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <motion.h1
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="text-xl font-semibold text-pink-600 flex items-center gap-2"
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Star className="w-5 h-5 text-pink-400 fill-pink-300" />
              </motion.span>
              <span className="text-pink-500">Macha</span>
              <span className="text-rose-400">.cc</span>
              <span className="text-pink-400">/</span>
              <span className="truncate max-w-[40vw]">{scriptName}</span>
              <motion.span
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              >
                <Sparkles className="w-5 h-5 text-pink-400" />
              </motion.span>
            </motion.h1>
          </div>
        </div>
      </motion.header>

      {/* Main */}
      <main className="container mx-auto px-4 py-8 relative z-10">
        <NewViewInstance loadstring={loadstringCode} rawUrl={rawUrl} />
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="border-t-2 border-dashed border-pink-300/60 py-6 mt-auto relative z-10 bg-white/60"
      >
        <div className="container mx-auto px-4 text-center text-pink-500 text-sm flex items-center justify-center gap-2">
          <Star className="w-4 h-4 fill-pink-300 text-pink-400" />
          <span>2025 Macha.cc, All rights reserved~</span>
          <Sparkles className="w-4 h-4 text-pink-400" />
        </div>
      </motion.footer>
    </div>
  )
}
