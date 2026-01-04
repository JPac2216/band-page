"use client";

import { motion } from "framer-motion";

export default function Shows() {
    return (
        <div
            className="min-h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/bg1.jpeg')" }}
        >
            <div className="relative flex flex-col items-center justify-start pt-16 z-10 gap-24">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                >
                    <h1 className="text-5xl font-semibold tracking-tight text-white leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]">Shows</h1>
                </motion.div>
                <h1 className="text-4xl font-semibold text-center tracking-tight text-white leading-tight ">
                    We currently have no shows listed.
                </h1>
                <h1 className="text-4xl font-semibold text-center tracking-tight text-white leading-tight ">
                    Follow us on Instagram for updates: <a className="text-yellow-400 italic underline" href="https://www.instagram.com/direct/t/17846797725172316/">@midnightdrive_nj</a>
                </h1>
            </div>
        </div>
    );
}