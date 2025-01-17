import { BaseInfo } from "@/Data/data";
import React from "react";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0f15] overflow-hidden relative">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto ">
        <div className=" grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content  */}
                  <div >
                      {/* Sub heading */}
                      <h1 className=" text-3xl md:text-4xl lg:text-5xl mb-5 text-gray-300 font-semibold">
                         I am {BaseInfo.name}  </h1>
                      {/* Title  */}
                      <h1 className="text-bg text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white">{BaseInfo.position}</h1>
          
                      {/* Description */}
                      <p className="mt-6 text-sm md:text-base text-white text-opacity-60">{BaseInfo.description}</p>
                      {/* Button */}
                      <div className="mt-8">
                          <button className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-gray-500 hover:bg-blue-700 flex items-center space-x-2">
                              <span><Link href="https://resume-builder-nu-self.vercel.app/"target="_blank">Download Cv</Link></span>
                              <FaDownload />
                          </button>
                      </div> 
                  </div>
          {/* Image content */}
                  <div className="mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-x-hidden">
                      <Image
                          src={BaseInfo.profilePic} alt={BaseInfo.name} width={400} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
