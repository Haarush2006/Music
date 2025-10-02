"use client"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/lib/utils";

function Testimonals() {
    
    
    return (
        <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
            <Grid></Grid>
      <div
        className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
        />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      
    </div>
  );
}



function Grid() {
    
    const musicAcademyData: { quote: string; name: string; title: string; }[] = [
      {
        quote: "Learning music here transformed my confidence and creativity.",
        name: "Aarav Mehta",
        title: "Student - Guitar Program",
      },
      {
        quote: "The teachers are not only skilled musicians but also inspiring mentors.",
        name: "Sneha Kapoor",
        title: "Parent of a Piano Student",
      },
      {
        quote: "The academy provides the perfect balance of theory and practice.",
        name: "Rahul Sharma",
        title: "Student - Vocal Training",
      },
      {
        quote: "Performing on stage in the annual concert was a life-changing experience.",
        name: "Meera Iyer",
        title: "Student - Violin Program",
      },
      {
        quote: "Their online classes are as engaging as the in-person ones.",
        name: "Arjun Reddy",
        title: "Student - Drums Program",
      },
      {
        quote: "Thanks to the academy, I cleared my Trinity music exam with distinction.",
        name: "Kavya Nair",
        title: "Student - Keyboard Program",
      },
    ];
    
    return (
        <div>


        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8 z-10">Our Voice of Success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={musicAcademyData}
                        direction="right"
                        speed="slow"
                        />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonals