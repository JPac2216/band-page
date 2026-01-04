"use client";

import { motion } from "framer-motion";
import { Blog7 } from "@/components/blog7";

export default function Releases() {
    return (
        <div
            className="min-h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/bg1.jpeg')" }}
        >
            <div className="relative min-h-screen flex flex-col items-center justify-start pt-16 z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                >
                    <h1 className="text-5xl font-semibold tracking-tight text-white leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]">Releases</h1>
                </motion.div>
                <Blog7 
                    tagline={""}
                    heading={""} 
                    description={"Discover Midnight Drive's latest songs."} 
                    buttonText={""} 
                    buttonUrl={""} 
                    posts={[
                        {
                            id: "post-2",
                            title: "City Lights",
                            summary:
                            "A song about the overwhelming feeling of being in a new place after leaving your past behind.",
                            label: "City Lights",
                            author: "Midnight Drive",
                            published: "September 26, 2025",
                            url: "/releases/city_lights",
                            image: "/albums/citylights.jpg",
                        },
                        {
                            id: "post-1",
                            title: "Made You Stay",
                            summary:
                            "A classic breakup song where one's past experiences are reflected in the world around them.",
                            label: "Made You Stay",
                            author: "Midnight Drive",
                            published: "May 2, 2025",
                            url: "",
                            image: "/albums/mys.jpg",
                        }
                    ]} 
                />
            </div>
        </div>
    );
}