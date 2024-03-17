import React from "react";
import Hero from "@/components/Sections/Hero";
import ValidationTables from "@/components/Tables/ValidationTables";
import Validate from "@/components/Sections/Validate";
export default function Home() {
  return (
    <main className="bg-grey-gradient relative">
      <Hero />
      <div className="relative bottom-[100px] -mb-[100px] md:bottom-[160px] md:-mb-[160px] lg:bottom-[210px] lg:-mb-[210px] xl:bottom-[320px] xl:-mb-[320px] overflow-y-visible container flex-col items-center flex justify-center mx-auto ">
        <img src="/images/section.png" />
        {/* <img src='/images/phones.png'/> */}
      </div>
     <Validate/>
    </main>
  );
}
