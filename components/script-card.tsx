"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { User, Star } from "lucide-react"
import { motion } from "framer-motion"

export interface NewCardProps {
  imgpath: string | null
  name: string
  madeby: string
  description: string
  redirectUrl: string
}

export function NewCard({ imgpath, name, madeby, description, redirectUrl }: NewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      className="doodle-card overflow-hidden"
    >
      <div className="aspect-video relative bg-gradient-to-br from-pink-100 to-rose-100">
        {imgpath ? (
          <Image src={imgpath || "/placeholder.svg"} alt={name} fill className="object-cover" draggable={false} />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <Star className="w-12 h-12 text-pink-300 mx-auto mb-2" />
              </motion.div>
              <span className="text-pink-400 text-sm font-medium">No image~</span>
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-pink-700 mb-2">{name}</h3>
        <p className="text-pink-500 text-sm line-clamp-2">{description}</p>
        <div className="flex items-center gap-2 mt-3 text-pink-400 text-xs">
          <User className="h-3 w-3" />
          <span>by {madeby}</span>
        </div>
      </div>
      <div className="p-4 pt-0">
        <Link href={redirectUrl} className="w-full block">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="w-full bg-pink-400 hover:bg-pink-500 text-white transition-all duration-300 rounded-xl border-2 border-pink-500 shadow-[3px_3px_0_0_rgba(236,72,153,0.3)]">
              <Star className="w-4 h-4 mr-2" fill="currentColor" />
              View Script~
            </Button>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  )
}

// Old ScriptCard kept for backwards compatibility
interface Script {
  id: string
  name: string
  description: string
  image: string | null
  author: string
}

export function ScriptCard({ script }: { script: Script }) {
  return (
    <NewCard
      imgpath={script.image}
      name={script.name}
      madeby={script.author}
      description={script.description}
      redirectUrl={`/viewer/${script.id}`}
    />
  )
}
