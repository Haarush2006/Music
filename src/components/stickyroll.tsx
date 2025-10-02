"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


// interface contentType {
//   title: string,
//   description: string,
//   content?: React.ReactNode
// }[]

function Stickyroll() {

  const content = [
  {
    title: "Learn from Experts",
    description:
      "Get trained by professional musicians with years of experience. Our academy offers personalized lessons in guitar, piano, vocals, and more. Whether you're a beginner or looking to refine your skills, our instructors will guide you every step of the way.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Learn from Experts
      </div>
    ),
  },
  {
    title: "Live Jam Sessions",
    description:
      "Experience the joy of music with real-time jam sessions. Play alongside fellow students, collaborate on songs, and improve your timing, rhythm, and creativity. Every session is a chance to learn, perform, and have fun together.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        Master art
      </div>
    ),
  },
  {
    title: "Track Your Progress",
    description:
      "Stay motivated with real-time progress tracking. Our platform keeps a record of your lessons, practice hours, and skill improvements. Never lose track of your growth as a musician—celebrate every milestone you achieve!",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Track Your Progress
      </div>
    ),
  },
  {
    title: "Perform & Shine",
    description:
      "Showcase your talent in our monthly recitals and live performances. Build confidence, gain stage experience, and share your music with a supportive audience. Whether solo or in a band, this is your moment to shine!",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white">
        Perform & Shine
      </div>
    ),
  },
];


  
  return (
    <div className="no-scrollbar">
        <StickyScroll content={content} />
    </div>
  )
}

export default Stickyroll