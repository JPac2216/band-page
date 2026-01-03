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
            <div className="max-w-6xl mx-auto px-6 flex gap-12 items-center">
                <div className="flex-1 text-white">
                    <h2 className="text-4xl font-semibold mb-4">
                    Who We Are
                    </h2>
                    <p className="text-lg leading-relaxed opacity-90">
                    Midnight Drive is a New Jersey-based band blending
                    late-night energy with modern indie rock. We began
                    officially changing the world in 2024 at Stevens
                    Institute of Technology.
                    </p>
                </div>

                <div className="flex-1 flex justify-end">
                    <Image
                    src="/about/band1.JPG"
                    width={600}
                    height={560}
                    alt="Band photo"
                    className="rounded-xl"
                    />
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-6 flex gap-12 items-center">
                <div className="flex-1 flex justify-start">
                    <Image
                    src="/about/jakesam.JPG"
                    width={500}
                    height={560}
                    alt="Band photo"
                    className="rounded-xl"
                    />
                </div>
                <div className="flex-1 text-white justify-end">
                    <h2 className="text-4xl font-semibold mb-4">
                    Foundation
                    </h2>
                    <p className="text-lg leading-relaxed opacity-90">
                    After finally committing to Stevens in Spring of 2023, Jake Paccione
                    reached out to Sam Ferro on a Stevens Class of '27 Instagram page, 
                    seeking to find a roommate for freshmen year. Immediately the two bonded
                    over a common passion for music and became instantly known in their
                    dorm building for being the "guitar guys." After knowing
                    each other for just a week, the duo began writing songs together.
                    </p>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-6 flex gap-12 items-center">
                <div className="flex-1 text-white">
                    <p className="text-lg leading-relaxed opacity-90">
                    Sam and Jake went on to meet Patrick Cortelli in the 
                    Stevens dining hall in the first week of school, where the trio began
                    talking about forming a band-- having all previously been in bands in
                    high school. Patrick additionally joined in the songwriting process,
                    and named Sam and Jake's unfinished song <a className="italic" href="/releases">City Lights</a>, 
                    which would later be released in Fall of 2025. 
                    </p>
                </div>

                <div className="flex-1 flex justify-end">
                    <Image
                    src="/about/pat.JPG"
                    width={600}
                    height={560}
                    alt="Band photo"
                    className="rounded-xl"
                    />
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-6 flex gap-12 items-center">
                <div className="flex-1 flex justify-start">
                    <Image
                    src="/about/dray.JPEG"
                    width={500}
                    height={560}
                    alt="Band photo"
                    className="rounded-xl"
                    />
                </div>
                <div className="flex-1 text-white justify-end">
                    <p className="text-lg leading-relaxed opacity-90">
                    During their first semester, Sam participated in an Open Mic 
                    organized by the school's music organization SUMAC, where he performed
                    an acoustic version of his new song, <a className="italic" href="/releases">Made You Stay</a>.
                    There, he met Drayton Barrand, a sophomore at the time who also happened 
                    to be performing in the same Open Mic. After just one practice together,
                    the group solidified, and Dray coined the group Midnight Drive.

                    </p>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-6 flex gap-12 items-center mb-12">
                <div className="flex-1 text-white">
                    <h2 className="text-4xl font-semibold mb-4">
                    The Rest is History
                    </h2>
                    <p className="text-lg leading-relaxed opacity-90">
                    The band quickly made a name for themselves among the Stevens Campus,
                    playing shows anywhere they can find, and going on to win the 2024 
                    Battle of the Bands competition. Midnight Drive opened 
                    for <a className="italic" href="https://www.neontrees.com/">Neon Trees</a> as
                    part of the 2024 annual Stevens Techfest event, and has continued to play
                    live shows on college campuses and release music.  
                    </p>
                </div>

                <div className="flex-1 flex justify-end">
                    <Image
                    src="/about/techfest.JPG"
                    width={600}
                    height={560}
                    alt="Band photo"
                    className="rounded-xl"
                    />
                </div>
            </div>
        </div>
    );
}