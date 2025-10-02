"use client";

import Link from "next/link";
import coursesInfo from "../data/courses.json";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { BackgroundGradient } from "./ui/background-gradient";

interface course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function Cards() {
  const ftCourses = coursesInfo.courses.filter((c: course) => c.isFeatured);

  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          FEATURED COURSES
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With the Best
        </p>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {ftCourses.map((c: course) => (
            <div key={c.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {c.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {c.description}
                  </p>
                  <Link href={`/courses/${c.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-10">
        <Link href="/courses">
          <HoverBorderGradient
            containerClassName="rounded-full border-2"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <span className="font-bold bg-clip-text">View all courses</span>
          </HoverBorderGradient>
        </Link>
      </div>
    </div>
  );
}

export default Cards;
