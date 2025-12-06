"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Copy, Check, Sparkles, Heart } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export interface NewViewInstanceProps {
  loadstring: string
  rawUrl: string
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
      transition={{ duration: 0.4, delay: 0.2 }}
      className="max-w-3xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="bg-pink-900/50 border border-pink-800/50 rounded-2xl overflow-hidden hover:border-pink-500/30 transition-colors duration-300 backdrop-blur-sm"
      >
        <div className="flex items-center justify-between px-4 py-3 bg-pink-800/30 border-b border-pink-800/50">
          <span className="text-sm text-pink-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Loadstring
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="text-pink-300 hover:text-white hover:bg-pink-700/50 transition-all duration-300 rounded-full"
          >
            {copied ? (
              <motion.span initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-pink-400" />
                Copied!
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
          <pre className="text-pink-400 font-mono text-sm overflow-x-auto">
            <code>{loadstring}</code>
          </pre>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="mt-6 p-4 bg-pink-900/30 border border-pink-800/50 rounded-2xl backdrop-blur-sm"
      >
        <h2 className="text-lg font-semibold text-pink-100 mb-2 flex items-center gap-2">
          <Heart className="w-5 h-5 text-pink-400" />
          How to use
        </h2>
        <ol className="list-decimal list-inside text-pink-300 text-sm space-y-2">
          <li>Copy the loadstring code above</li>
          <li>Open your executor</li>
          <li>Paste the code and execute</li>
        </ol>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="mt-6"
      >
        <h2 className="text-lg font-semibold text-pink-100 mb-2 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-pink-400" />
          Raw Endpoint
        </h2>
        <code className="block bg-pink-900/30 border border-pink-800/50 rounded-2xl p-4 text-pink-300 font-mono text-sm backdrop-blur-sm">
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
    <div className="min-h-screen bg-gradient-to-br from-pink-950 via-rose-950 to-pink-900 text-rose-50">
      {/* Floating hearts background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-500/20"
            initial={{ y: "100vh", x: `${Math.random() * 100}%` }}
            animate={{ y: "-100vh" }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            <Heart className="w-6 h-6" fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border-b border-pink-800/50 bg-pink-950/80 backdrop-blur-sm sticky top-0 z-10"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button
                variant="ghost"
                size="icon"
                className="text-pink-300 hover:text-white hover:bg-pink-800/50 transition-all duration-300 rounded-full"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <motion.h1
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-semibold text-pink-100 flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-pink-400" />
              {scriptName}
            </motion.h1>
          </div>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-8 relative z-1">
        <NewViewInstance loadstring={loadstringCode} rawUrl={rawUrl} />
      </main>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="border-t border-pink-800/50 py-6 mt-auto relative z-1"
      >
        <div className="container mx-auto px-4 text-center text-pink-400 text-sm flex items-center justify-center gap-2">
          <Heart className="w-4 h-4" fill="currentColor" />
          <span>2025 Macha.cc, All rights reserved.</span>
          <Heart className="w-4 h-4" fill="currentColor" />
        </div>
      </motion.footer>
    </div>
  )
}
