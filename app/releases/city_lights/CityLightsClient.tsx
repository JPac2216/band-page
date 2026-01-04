"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export default function City_Lights() {
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
                    <h1 className="text-5xl font-semibold tracking-tight text-white leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]">Releases</h1>
                </motion.div>

                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center mb-12">
                    <div className="flex-1 text-white">
                        <h2 className="text-4xl font-semibold mb-4">
                        City Lights
                        </h2>
                        <p className="text-lg leading-relaxed opacity-90">
                        To understand the origins of City Lights, we have to 
                        go to back to College Orientation, where roommates Jake 
                        and Sam started jamming on Beatles tunes shortly after 
                        meeting for the first time. This time spent jamming turned 
                        into writing, and once Jake established the City Lights 
                        chorus riff with Sam's chord progression, we knew we had 
                        just written our first song. We met Pat shortly after, and 
                        he introduced the phrase while jamming on the song, "the City 
                        Lights are much too bright", and that paved the way for what 
                        the song would be about. We began jamming on the song as a trio 
                        throughout our freshman year semester. This song eventually 
                        came to be our opening song once we started playing as a band 
                        with Dray our drummer, and finally having it released is a true 
                        testimony to how we started and what we're continuing to strive 
                        for as a group. This song is about the overwhelming feeling of 
                        being in a new place after leaving your past behind.
                        </p>
                    </div>
    
                    <div className="flex-1 flex justify-end">
                        <Image
                        src="/albums/citylights.jpg"
                        width={400}
                        height={560}
                        alt="Band photo"
                        className="rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}