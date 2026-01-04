

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { YouTubeEmbed } from '@next/third-parties/google';



export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg1.jpeg')" }}
    >
      <div className="relative h-[80vh] flex flex-col items-center justify-start pt-16 gap-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src="/logo_neon.svg"
            width={500}
            height={500}
            alt="Midnight Drive Logo"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.8 }}
          className="text-lg tracking-wide text-white/80 -mt-2 leading-tight"
        >
          The Hottest Band in New Jersey
        </motion.p>
      </div>

      <div className="relative flex flex-col items-center gap-6 z-10 mb-24">
        <h1 className="text-5xl font-semibold text-center tracking-tight text-white leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]">
          Listen to our NEWEST Single - <span className="text-yellow-400 italic">City Lights</span></h1>
        <YouTubeEmbed videoid="oXaERVO4I6Q" height={400} width={720} />
      </div>
      
    </div>
  );
}
