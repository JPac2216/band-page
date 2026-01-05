"use client";

import Example from "@/components/carousel-standard-2";
import { motion } from "framer-motion";
import { YouTubeEmbed } from '@next/third-parties/google';


export default function Gallery() {
    return (
        <div
            className="min-h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/bg1.jpeg')" }}
        >
            <div className="relative min-h-screen flex flex-col items-center justify-start pt-16 z-10 gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                >
                    <h1 className="text-5xl font-semibold tracking-tight text-white leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]">Gallery</h1>
                </motion.div>

                <div className="w-full px-14">
                    <Example /> 
                </div>
                <div className="relative flex flex-col md:flex-row items-center justify-start pt-0 gap-4 z-10">
                    <div className="flex flex-col">
                        <h1 className="text-xl font-semibold tracking-tight text-white leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]">
                          LIVE @ Bravo's Cafe, East Orange, NJ | 11/29/25</h1>
                        <YouTubeEmbed videoid="AKpjSQEntGE" height={300} width={430} />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-xl font-semibold tracking-tight text-white leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]">
                          LIVE @ The Meatlocker, Montclair, NJ | 1/19/25</h1>
                        <YouTubeEmbed videoid="c7WTpLkyRrc" height={300} width={430} />
                    </div>
                </div>
            </div>
        </div>
    );
}