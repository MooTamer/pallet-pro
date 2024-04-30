import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import { Waitlist } from "@/components/shared/waitlist";
import { HeroScroll } from "@/components/shared/scrollTest";
import { CustomerReviews } from "@/components/shared/customer-reviews";


export default function Home() {
  return (
    <>
      <Spotlight />
      <div className="h-screen w-screen dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center space-around justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_80%)]"></div>
        <h1 className="text-5xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-12">
          CanvaTech
        </h1>
        <p className="text-3xl sm:text-4xl my-8 font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-12">
          Designing dreams, one palette at a time.
        </p>
      </div>
      <CustomerReviews />
      <HeroScroll />
      <Waitlist />
    </>
  );
}
