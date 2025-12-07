"use client"

import { useState } from "react"
import { Search, Download, Info, X, ExternalLink, Plus, Lock, Copy, Check, Star, Sparkles, Cloud } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ScriptCard } from "@/components/script-card"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const scripts = [
  {
    id: "rspy",
    name: "Remote Spy",
    description: "A powerful remote spy tool for Roblox. Monitor and intercept remote events and functions.",
    image: "/images/rspy.png",
    author: "richie0866",
  },
  {
    id: "dex",
    name: "Dex Explorer",
    description: "Advanced instance explorer for Roblox. Browse and manipulate game instances with ease.",
    image: "/images/dex.jpeg",
    author: "WeAreDevs",
  },
  {
    id: "cursedsaken",
    name: "Cursedsaken - Forsaken Script",
    description: "A OP and keyless function for Forsaken! (Undetected)",
    image: "/images/forsaken.webp",
    author: "unknown",
  },
  {
    id: "voidware",
    name: "Voidware Hub",
    description: "Supports 99 NITF, Ink Game(can be patched), Bedwars, Forsaken",
    image: "/images/voidware.webp",
    author: "VapeVoidware",
  }
]

interface Executor {
  id: string
  name: string
  description: string
  image: string | null
  author: string
  fileName: string
  downloadUrl: string
  level: number
  unc: number
  platform: string[]
  price: string
  keySystem: boolean
  lastUpdated: string
  tags?: string[]
}

const executors: Executor[] = [
  {
    id: "xeno",
    name: "Xeno",
    description: "A powerful and fast Roblox executor with modern UI and extensive features.",
    image: "/images/xeno.png",
    author: "Xeno Team",
    fileName: "Xeno-v1.3.05.zip",
    downloadUrl: "https://www.xeno.onl/download/Xeno-v1.3.05.zip",
    level: 3,
    unc: 50,
    platform: ["Windows"],
    price: "Free",
    keySystem: false,
    lastUpdated: "2025",
    tags: ["popular", "fast"],
  },
  {
    id: "solara",
    name: "Solara",
    description: "Popular free executor with good script compatibility and regular updates.",
    image: "/images/solara.jpeg",
    author: "Solara Team",
    fileName: "Solara-Bootstrapper.exe",
    downloadUrl: "https://getsolara.dev/",
    level: 3,
    unc: 51,
    platform: ["Windows"],
    price: "Free",
    keySystem: false,
    lastUpdated: "2025",
    tags: ["popular", "fast"],
  },
  {
    id: "wave",
    name: "Wave",
    description: "High performance executor with excellent UNC support and fast injection.",
    image: "/images/wave.webp",
    author: "Wave Team",
    fileName: "Wave-Installer.exe",
    downloadUrl: "https://getwave.gg",
    level: 8,
    unc: 100,
    platform: ["Windows"],
    price: "Free",
    keySystem: true,
    lastUpdated: "2025",
    tags: ["high-unc", "popular", "fast"],
  },
  {
    id: "delta",
    name: "Delta",
    description: "Mobile executor for Android with extensive script support.",
    image: "/images/delta.webp",
    author: "Delta Team",
    fileName: "Delta.apk",
    downloadUrl: "https://deltaexploits.gg/",
    level: 8,
    unc: 100,
    platform: ["Android"],
    price: "Free",
    keySystem: true,
    lastUpdated: "2024",
    tags: ["mobile"],
  },
  {
    id: "arceus",
    name: "Arceus X",
    description: "Popular mobile executor with good features for Android devices.",
    image: "/images/arceusx.jpeg",
    author: "Arceus Team",
    fileName: "ArceusX.apk",
    downloadUrl: "https://arceusx.com/",
    level: 8,
    unc: 0,
    platform: ["Android"],
    price: "Free",
    keySystem: true,
    lastUpdated: "2025",
    tags: ["mobile", "popular"],
  }
]

type Tab = "scripts" | "executors"

const TEST_MODE_PASSWORD = "ilovecheating2025roblox"

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
          className="absolute text-pink-200/30"
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
          className="absolute rounded-full border-2 border-dashed border-pink-300/20"
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

export function ScriptBrowser() {
  const [search, setSearch] = useState("")
  const [activeTab, setActiveTab] = useState<Tab>("scripts")
  const [selectedExecutor, setSelectedExecutor] = useState<Executor | null>(null)
  const [testMode, setTestMode] = useState(false)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [passwordInput, setPasswordInput] = useState("")
  const [passwordError, setPasswordError] = useState(false)
  const [showAddCardModal, setShowAddCardModal] = useState(false)
  const [generatedCode, setGeneratedCode] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const filteredScripts = scripts.filter(
    (script) =>
      script.name.toLowerCase().includes(search.toLowerCase()) ||
      script.description.toLowerCase().includes(search.toLowerCase()),
  )

  const filteredExecutors = executors.filter(
    (executor) =>
      executor.name.toLowerCase().includes(search.toLowerCase()) ||
      executor.description.toLowerCase().includes(search.toLowerCase()),
  )

  const handleTestModeSubmit = () => {
    if (passwordInput === TEST_MODE_PASSWORD) {
      setTestMode(true)
      setShowPasswordModal(false)
      setPasswordInput("")
      setPasswordError(false)
    } else {
      setPasswordError(true)
    }
  }

  const handleCopyCode = () => {
    if (generatedCode) {
      navigator.clipboard.writeText(generatedCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 text-rose-800">
      <DoodleDecorations />

      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-b-2 border-dashed border-pink-300/60 bg-white/60 backdrop-blur-sm sticky top-0 z-10"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-2xl font-bold text-rose-600 flex items-center gap-2"
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Star className="w-6 h-6 text-pink-400 fill-pink-400" />
              </motion.span>
              <span className="text-pink-500">Macha</span>
              <span className="text-rose-400">.cc</span>
              <motion.span
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              >
                <Sparkles className="w-6 h-6 text-pink-400" />
              </motion.span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="relative max-w-md flex-1"
            >
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-pink-400" />
              <Input
                placeholder={activeTab === "scripts" ? "Search scripts~" : "Search executors~"}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 bg-white/80 border-2 border-dashed border-pink-300 text-rose-700 placeholder:text-pink-400/70 focus:border-pink-400 focus:ring-pink-400/20 transition-all duration-300 rounded-2xl"
              />
            </motion.div>
            {testMode && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-2 px-3 py-1 bg-pink-200/60 rounded-full border-2 border-dashed border-pink-400/50"
              >
                <Sparkles className="w-4 h-4 text-pink-500 animate-sparkle" />
                <span className="text-sm text-pink-600 font-medium">Test Mode</span>
              </motion.div>
            )}
          </div>

          <div className="flex gap-2 mt-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant={activeTab === "scripts" ? "default" : "ghost"}
                onClick={() => setActiveTab("scripts")}
                className={
                  activeTab === "scripts"
                    ? "bg-pink-400 hover:bg-pink-500 text-white rounded-2xl border-2 border-pink-500 shadow-[3px_3px_0_0_rgba(236,72,153,0.3)]"
                    : "text-pink-500 hover:text-pink-600 hover:bg-pink-100/50 rounded-2xl border-2 border-dashed border-transparent hover:border-pink-300"
                }
              >
                <Star className="w-4 h-4 mr-2" />
                Scripts
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant={activeTab === "executors" ? "default" : "ghost"}
                onClick={() => setActiveTab("executors")}
                className={
                  activeTab === "executors"
                    ? "bg-pink-400 hover:bg-pink-500 text-white rounded-2xl border-2 border-pink-500 shadow-[3px_3px_0_0_rgba(236,72,153,0.3)]"
                    : "text-pink-500 hover:text-pink-600 hover:bg-pink-100/50 rounded-2xl border-2 border-dashed border-transparent hover:border-pink-300"
                }
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Executors
              </Button>
            </motion.div>
            {testMode && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="ml-auto">
                <Button
                  variant="ghost"
                  onClick={() => setShowAddCardModal(true)}
                  className="text-pink-500 hover:text-pink-600 hover:bg-pink-100/50 rounded-2xl border-2 border-dashed border-pink-300"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Card
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-8 relative z-1">
        {activeTab === "scripts" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredScripts.map((script, index) => (
              <motion.div
                key={script.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ScriptCard script={script} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === "executors" && !testMode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20"
          >
            <motion.div
              className="doodle-card p-8 max-w-md text-center"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Lock className="w-16 h-16 mx-auto text-pink-400 mb-4" />
              </motion.div>
              <h2 className="text-2xl font-bold text-pink-600 mb-2">Experimental Feature~</h2>
              <p className="text-pink-500 mb-6">
                This is still experimental. Enter in <span className="font-bold text-pink-600">test mode</span> to see.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => setShowPasswordModal(true)}
                  className="bg-pink-400 hover:bg-pink-500 text-white rounded-2xl px-8 border-2 border-pink-500 shadow-[4px_4px_0_0_rgba(236,72,153,0.3)]"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Enter Test Mode
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {activeTab === "executors" && testMode && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredExecutors.map((executor, index) => (
              <motion.div
                key={executor.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ExecutorCard executor={executor} onInfoClick={() => setSelectedExecutor(executor)} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === "scripts" && filteredScripts.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
            <p className="text-pink-500 text-lg">No scripts found matching your search~</p>
          </motion.div>
        )}

        {activeTab === "executors" && testMode && filteredExecutors.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
            <p className="text-pink-500 text-lg">No executors found matching your search~</p>
          </motion.div>
        )}
      </main>

      {/* Password Modal */}
      <AnimatePresence>
        {showPasswordModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-pink-950/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowPasswordModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="doodle-card max-w-sm w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Lock className="w-12 h-12 mx-auto text-pink-400 mb-3" />
                </motion.div>
                <h2 className="text-xl font-bold text-pink-600">Enter Password~</h2>
                <p className="text-pink-400 text-sm mt-1">Enter the test mode password to continue</p>
              </div>

              <Input
                type="password"
                placeholder="Password..."
                value={passwordInput}
                onChange={(e) => {
                  setPasswordInput(e.target.value)
                  setPasswordError(false)
                }}
                onKeyDown={(e) => e.key === "Enter" && handleTestModeSubmit()}
                className={`bg-white/80 border-2 border-dashed border-pink-300 text-rose-700 placeholder:text-pink-400/60 rounded-2xl mb-4 ${
                  passwordError ? "border-red-400" : ""
                }`}
              />
              {passwordError && <p className="text-red-400 text-sm text-center mb-4">Incorrect password!</p>}

              <div className="flex gap-3">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                  <Button
                    variant="ghost"
                    onClick={() => setShowPasswordModal(false)}
                    className="w-full text-pink-500 hover:bg-pink-100/50 rounded-2xl border-2 border-dashed border-pink-300"
                  >
                    Cancel
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                  <Button
                    onClick={handleTestModeSubmit}
                    className="w-full bg-pink-400 hover:bg-pink-500 rounded-2xl border-2 border-pink-500 shadow-[3px_3px_0_0_rgba(236,72,153,0.3)]"
                  >
                    Enter
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add Card Modal */}
      <AnimatePresence>
        {showAddCardModal && (
          <AddCardModal
            onClose={() => {
              setShowAddCardModal(false)
              setGeneratedCode(null)
            }}
            onGenerate={(code) => setGeneratedCode(code)}
            generatedCode={generatedCode}
            onCopy={handleCopyCode}
            copied={copied}
          />
        )}
      </AnimatePresence>

      {/* Information Modal */}
      <AnimatePresence>
        {selectedExecutor && (
          <ExecutorInfoModal executor={selectedExecutor} onClose={() => setSelectedExecutor(null)} />
        )}
      </AnimatePresence>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="border-t-2 border-dashed border-pink-300/60 py-6 mt-auto relative z-1 bg-white/40"
      >
        <div className="container mx-auto px-4 text-center text-pink-500 text-sm flex items-center justify-center gap-2">
          <Star className="w-4 h-4 fill-pink-400 text-pink-400" />
          <span>2025 Macha.cc, All rights reserved~</span>
          <Sparkles className="w-4 h-4 text-pink-400" />
        </div>
      </motion.footer>
    </div>
  )
}

function ExecutorCard({
  executor,
  onInfoClick,
}: {
  executor: Executor
  onInfoClick: () => void
}) {
  return (
    <motion.div className="doodle-card overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
      <div className="aspect-video bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center relative overflow-hidden">
        {executor.image ? (
          <Image src={executor.image || "/placeholder.svg"} alt={executor.name} fill className="object-cover" />
        ) : (
          <div className="text-center">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <Sparkles className="w-12 h-12 text-pink-300 mx-auto mb-2" />
            </motion.div>
            <span className="text-pink-400 text-sm font-medium">No image~</span>
          </div>
        )}
        {/* Level Badge */}
        <div className="absolute top-2 right-2 bg-white/90 text-pink-600 text-xs font-bold px-2 py-1 rounded-full border-2 border-dashed border-pink-300">
          Lvl {executor.level}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-bold text-pink-700 text-lg">{executor.name}</h3>
            <p className="text-pink-400 text-sm">by {executor.author}</p>
          </div>
          <div className="text-right">
            <span className="text-pink-600 font-bold">{executor.unc}%</span>
            <p className="text-pink-400 text-xs">sUNC</p>
          </div>
        </div>
        <p className="text-pink-500 text-sm mb-3 line-clamp-2">{executor.description}</p>
        <div className="flex gap-2 mb-3 flex-wrap">
          {executor.platform.map((p) => (
            <span
              key={p}
              className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full border border-dashed border-pink-300"
            >
              {p}
            </span>
          ))}
          {executor.keySystem && (
            <span className="text-xs bg-rose-100 text-rose-600 px-2 py-1 rounded-full border border-dashed border-rose-300">
              Key System
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
            <Button
              size="sm"
              variant="ghost"
              onClick={onInfoClick}
              className="w-full text-pink-500 hover:bg-pink-100/50 rounded-xl border-2 border-dashed border-pink-300"
            >
              <Info className="w-4 h-4 mr-1" />
              Info
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
            <Button
              size="sm"
              className="w-full bg-pink-400 hover:bg-pink-500 text-white rounded-xl border-2 border-pink-500 shadow-[2px_2px_0_0_rgba(236,72,153,0.3)]"
              onClick={() => window.open(executor.downloadUrl, "_blank")}
            >
              <Download className="w-4 h-4 mr-1" />
              Download
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

function ExecutorInfoModal({ executor, onClose }: { executor: Executor; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-pink-950/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="doodle-card max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-pink-600 flex items-center gap-2">
              <Star className="w-6 h-6 fill-pink-400 text-pink-400" />
              {executor.name}
            </h2>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="text-pink-400 hover:text-pink-600"
            >
              <X className="w-6 h-6" />
            </motion.button>
          </div>

          <div className="aspect-video bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl flex items-center justify-center mb-4 overflow-hidden relative border-2 border-dashed border-pink-300">
            {executor.image ? (
              <Image src={executor.image || "/placeholder.svg"} alt={executor.name} fill className="object-cover" />
            ) : (
              <div className="text-center">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Sparkles className="w-16 h-16 text-pink-300 mx-auto mb-2" />
                </motion.div>
                <span className="text-pink-400 font-medium">No image~</span>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-pink-400 text-sm">by {executor.author}</p>
              <p className="text-pink-600 mt-2">{executor.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="doodle-card p-3 text-center">
                <p className="text-pink-400 text-xs">Level</p>
                <p className="text-pink-600 font-bold text-xl">{executor.level}</p>
              </div>
              <div className="doodle-card p-3 text-center">
                <p className="text-pink-400 text-xs">sUNC</p>
                <p className="text-pink-600 font-bold text-xl">{executor.unc}%</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-pink-400">Platform</span>
                <span className="text-pink-600">{executor.platform.join(", ")}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-pink-400">Price</span>
                <span className="text-pink-600">{executor.price}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-pink-400">Key System</span>
                <span className="text-pink-600">{executor.keySystem ? "Yes" : "No"}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-pink-400">File Name</span>
                <span className="text-pink-600">{executor.fileName}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-pink-400">Last Updated</span>
                <span className="text-pink-600">{executor.lastUpdated}</span>
              </div>
            </div>

            {executor.tags && executor.tags.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {executor.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full border border-dashed border-pink-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                className="w-full bg-pink-400 hover:bg-pink-500 text-white rounded-xl border-2 border-pink-500 shadow-[3px_3px_0_0_rgba(236,72,153,0.3)]"
                onClick={() => window.open(executor.downloadUrl, "_blank")}
              >
                <Download className="w-4 h-4 mr-2" />
                Download {executor.fileName}
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

interface CardFormData {
  category: "scripts" | "executors"
  name: string
  author: string
  description: string
  tags: string
  rawUrl?: string
  level?: number
  unc?: number
  platforms?: string[]
  downloadUrl?: string
  fileName?: string
  price?: string
  keySystem?: boolean
}

function AddCardModal({
  onClose,
  onGenerate,
  generatedCode,
  onCopy,
  copied,
}: {
  onClose: () => void
  onGenerate: (code: string) => void
  generatedCode: string | null
  onCopy: () => void
  copied: boolean
}) {
  const [formData, setFormData] = useState<CardFormData>({
    category: "scripts",
    name: "",
    author: "",
    description: "",
    tags: "",
    level: 5,
    unc: 50,
    platforms: ["Windows"],
    downloadUrl: "",
    fileName: "",
    price: "Free",
    keySystem: false,
    rawUrl: "",
  })

  const handleGenerateCode = () => {
    let code = ""

    if (formData.category === "scripts") {
      code = `// Add this to the scripts array in components/script-browser.tsx
{
  id: "${formData.name.toLowerCase().replace(/\s+/g, "-")}",
  name: "${formData.name}",
  description: "${formData.description}",
  image: null, // Add image path if available
  author: "${formData.author}",
}`
    } else {
      code = `// Add this to the executors array in components/script-browser.tsx
{
  id: "${formData.name.toLowerCase().replace(/\s+/g, "-")}",
  name: "${formData.name}",
  description: "${formData.description}",
  image: null,
  author: "${formData.author}",
  fileName: "${formData.fileName}",
  downloadUrl: "${formData.downloadUrl}",
  level: ${formData.level},
  unc: ${formData.unc},
  platform: ${JSON.stringify(formData.platforms)},
  price: "${formData.price}",
  keySystem: ${formData.keySystem},
  lastUpdated: "${new Date().getFullYear()}",
  tags: [${formData.tags
    .split(",")
    .map((t) => `"${t.trim()}"`)
    .join(", ")}],
}`
    }

    onGenerate(code)
  }

  const togglePlatform = (platform: string) => {
    const platforms = formData.platforms || []
    if (platforms.includes(platform)) {
      setFormData({ ...formData, platforms: platforms.filter((p) => p !== platform) })
    } else {
      setFormData({ ...formData, platforms: [...platforms, platform] })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-pink-950/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="doodle-card max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-pink-600 flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Add New Card~
            </h2>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="text-pink-400 hover:text-pink-600"
            >
              <X className="w-6 h-6" />
            </motion.button>
          </div>

          {!generatedCode ? (
            <div className="space-y-4">
              {/* Category */}
              <div>
                <label className="text-sm text-pink-500 mb-2 block font-medium">Category</label>
                <div className="flex gap-2">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                    <Button
                      variant={formData.category === "scripts" ? "default" : "ghost"}
                      onClick={() => setFormData({ ...formData, category: "scripts" })}
                      className={
                        formData.category === "scripts"
                          ? "w-full bg-pink-400 hover:bg-pink-500 rounded-xl border-2 border-pink-500 shadow-[2px_2px_0_0_rgba(236,72,153,0.3)]"
                          : "w-full text-pink-500 hover:bg-pink-100/50 rounded-xl border-2 border-dashed border-pink-300"
                      }
                    >
                      Scripts
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                    <Button
                      variant={formData.category === "executors" ? "default" : "ghost"}
                      onClick={() => setFormData({ ...formData, category: "executors" })}
                      className={
                        formData.category === "executors"
                          ? "w-full bg-pink-400 hover:bg-pink-500 rounded-xl border-2 border-pink-500 shadow-[2px_2px_0_0_rgba(236,72,153,0.3)]"
                          : "w-full text-pink-500 hover:bg-pink-100/50 rounded-xl border-2 border-dashed border-pink-300"
                      }
                    >
                      Executors
                    </Button>
                  </motion.div>
                </div>
              </div>

              {/* Common fields */}
              <div>
                <label className="text-sm text-pink-500 mb-1 block font-medium">Name</label>
                <Input
                  placeholder="Enter name..."
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/80 border-2 border-dashed border-pink-300 text-rose-700 placeholder:text-pink-400/60 rounded-xl"
                />
              </div>

              <div>
                <label className="text-sm text-pink-500 mb-1 block font-medium">Author</label>
                <Input
                  placeholder="Made by..."
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="bg-white/80 border-2 border-dashed border-pink-300 text-rose-700 placeholder:text-pink-400/60 rounded-xl"
                />
              </div>

              <div>
                <label className="text-sm text-pink-500 mb-1 block font-medium">Description</label>
                <textarea
                  placeholder="Enter description..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-white/80 border-2 border-dashed border-pink-300 text-rose-700 placeholder:text-pink-400/60 rounded-xl p-3 min-h-[80px] resize-none focus:outline-none focus:border-pink-400"
                />
              </div>

              <div>
                <label className="text-sm text-pink-500 mb-1 block font-medium">Tags (comma separated)</label>
                <Input
                  placeholder="popular, fast, mobile..."
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  className="bg-white/80 border-2 border-dashed border-pink-300 text-rose-700 placeholder:text-pink-400/60 rounded-xl"
                />
              </div>

              {/* Executor-specific fields */}
              {formData.category === "executors" && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-pink-500 mb-1 block font-medium">Level</label>
                      <Input
                        type="number"
                        min="1"
                        max="10"
                        value={formData.level}
                        onChange={(e) => setFormData({ ...formData, level: Number(e.target.value) })}
                        className="bg-white/80 border-2 border-dashed border-pink-300 text-rose-700 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-pink-500 mb-1 block font-medium">sUNC %</label>
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        value={formData.unc}
                        onChange={(e) => setFormData({ ...formData, unc: Number(e.target.value) })}
                        className="bg-white/80 border-2 border-dashed border-pink-300 text-rose-700 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-pink-500 mb-2 block font-medium">Platforms</label>
                    <div className="flex gap-2 flex-wrap">
                      {["Windows", "Android", "iOS", "MacOS"].map((platform) => (
                        <motion.button
                          key={platform}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => togglePlatform(platform)}
                          className={`px-3 py-1 rounded-full text-sm transition-all ${
                            formData.platforms?.includes(platform)
                              ? "bg-pink-400 text-white border-2 border-pink-500 shadow-[2px_2px_0_0_rgba(236,72,153,0.3)]"
                              : "bg-white/80 text-pink-500 border-2 border-dashed border-pink-300"
                          }`}
                        >
                          {platform}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-pink-500 mb-1 block font-medium">Download URL</label>
                    <Input
                      placeholder="https://..."
                      value={formData.downloadUrl}
                      onChange={(e) => setFormData({ ...formData, downloadUrl: e.target.value })}
                      className="bg-white/80 border-2 border-dashed border-pink-300 text-rose-700 placeholder:text-pink-400/60 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-pink-500 mb-1 block font-medium">File Name</label>
                    <Input
                      placeholder="Executor.exe"
                      value={formData.fileName}
                      onChange={(e) => setFormData({ ...formData, fileName: e.target.value })}
                      className="bg-white/80 border-2 border-dashed border-pink-300 text-rose-700 placeholder:text-pink-400/60 rounded-xl"
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <label className="text-sm text-pink-500 font-medium">Key System</label>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setFormData({ ...formData, keySystem: !formData.keySystem })}
                      className={`w-12 h-6 rounded-full transition-all ${
                        formData.keySystem ? "bg-pink-400" : "bg-pink-200"
                      } relative`}
                    >
                      <motion.div
                        animate={{ x: formData.keySystem ? 24 : 2 }}
                        className="w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-md"
                      />
                    </motion.button>
                  </div>
                </>
              )}

              {/* Script-specific fields */}
              {formData.category === "scripts" && (
                <div>
                  <label className="text-sm text-pink-500 mb-1 block font-medium">Raw URL (optional)</label>
                  <Input
                    placeholder="https://machacc.vercel.app/raw/..."
                    value={formData.rawUrl}
                    onChange={(e) => setFormData({ ...formData, rawUrl: e.target.value })}
                    className="bg-white/80 border-2 border-dashed border-pink-300 text-rose-700 placeholder:text-pink-400/60 rounded-xl"
                  />
                </div>
              )}

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={handleGenerateCode}
                  disabled={!formData.name || !formData.author}
                  className="w-full bg-pink-400 hover:bg-pink-500 text-white rounded-xl border-2 border-pink-500 shadow-[3px_3px_0_0_rgba(236,72,153,0.3)] disabled:opacity-50"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Code~
                </Button>
              </motion.div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-pink-500 text-sm">Copy this code and paste it to add the card:</p>
              <div className="bg-pink-50 border-2 border-dashed border-pink-300 rounded-xl p-4 font-mono text-sm text-rose-700 overflow-x-auto">
                <pre className="whitespace-pre-wrap">{generatedCode}</pre>
              </div>
              <div className="flex gap-3">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                  <Button
                    variant="ghost"
                    onClick={() => onGenerate("")}
                    className="w-full text-pink-500 hover:bg-pink-100/50 rounded-xl border-2 border-dashed border-pink-300"
                  >
                    Back
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                  <Button
                    onClick={onCopy}
                    className="w-full bg-pink-400 hover:bg-pink-500 text-white rounded-xl border-2 border-pink-500 shadow-[3px_3px_0_0_rgba(236,72,153,0.3)]"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Code
                      </>
                    )}
                  </Button>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}