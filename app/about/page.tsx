"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <div
            className="min-h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/bg1.jpeg')" }}
        >
            <div className="relative h-[30vh] flex flex-col justify-start pt-16 z-10 gap-14">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                >
                    <h1 className="text-5xl font-semibold tracking-tight text-center text-white leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]">About Us</h1>
                </motion.div>
            </div>
            <div className="flex-1 text-white">
                <h2 className="text-4xl font-semibold mb-4">
                Who We Are
                </h2>
                <p className="text-lg leading-relaxed opacity-90">
                Midnight Drive is a New Jersey–based band blending
                late-night energy with modern indie rock...
                </p>
            </div>

            <div className="flex-1 flex justify-end">
                <Image
                src="/about/jakesam.JPG"
                width={500}
                height={560}
                alt="Band photo"
                className="rounded-xl"
                />
            </div>
        </div>
    );
}