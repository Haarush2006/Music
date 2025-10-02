import React from 'react'
import Image from 'next/image'
import surajImage from "@/data/images/suraj.jpeg";
import jeevanImage from "@/data/images/jeevan.jpeg";
import harshithImage from "@/data/images/harshith.jpeg";
import haarushImage from "@/data/images/haarush.jpeg";
import { WavyBackground } from './ui/wavy-background';
import { AnimatedTooltip } from './ui/animated-tooltip';

function educators() {


const instructors = [
    {
      id: 1,
      name: 'Suraj',
      designation: 'Vocal Coach',
      image: surajImage.src
    },
    {
        id: 2,
        name: 'Harshith',
        designation: 'Piano Teacher',
        image: harshithImage.src
    },
    {
        id: 3,
        name: 'Haarush',
        designation: 'Drumming Expert',
        image: haarushImage.src
    },
    {
      id: 4,
      name: 'Jeevan',
      designation: 'Guitar Instructor',
      image: jeevanImage.src
    },
  ];


  return (
    <div className="relative     overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default educators