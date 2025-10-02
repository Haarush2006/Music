
import Link from "next/link"
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export default function Herosection() {
  return (
    <div className="min-h-screen md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <Spotlight fill="blue"/>
        <div className="p-4 relative z-10 w-full text-center">
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400">
                Master the art of music
            </h1>
            <p className="mt-4 font-normal text-base md:text-lg text-nuetral-300 max-w-lg mx-auto">Dive into our comprehensive music courses and transform your musical journey today. Whether you&apos;re a beginner or looking to refine your skills, join us to unlock your true potential.</p>
            <div className="mt-10 flex justify-center items-center">
                <Link href="/courses">
                    <HoverBorderGradient
                        containerClassName="rounded-full border-2"
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                    >
                        <span className="font-bold bg-clip-text">Explore Courses</span>
                    </HoverBorderGradient>
                    
    
                </Link>
            </div>
        </div>
    </div>
  )
}

