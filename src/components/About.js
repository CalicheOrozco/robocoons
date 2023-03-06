import React from "react";
import Navbar from "./Navbar";

function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-wrap items-center flex-grow justify-center bg-gray-100">
        <div className="w-full ">
          <div className="w-full ">
            <div class="w-32 h-32 rounded-br-full border-r-8 border-b-8 border-[#6baf92] "></div>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="px-4 py-8 flex text-center items-center justify-center">
            <h2 className="text-white text-6xl font-bold bg-[#A5C6B1] rounded-2xl w-4/5 md:w-1/2 py-4">
              Quiénes Somos
            </h2>
          </div>
          <div className="px-4 py-8 flex flex-col">
            <div className="w-full flex flex-col lg:flex-row py-8 text-center items-center justify-center gap-8">
              <h3 className="text-white text-lg lg:text-md 2xl:text-3xl font-bold bg-[#A5C6B1] rounded-2xl w-2/6  lg:w-2/6 xl:w-1/6  text-center py-2">
                MISIÓN
              </h3>
              <p className="text-gray-700 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                vulputate nulla at ante rhoncus, vel efficitur felis
                condimentum. Proin odio odio.
              </p>
            </div>

            <div className="w-full flex flex-col lg:flex-row py-8 text-center items-center justify-center gap-8">
              <h3 className="text-white text-lg lg:text-md 2xl:text-3xl font-bold bg-[#A5C6B1] rounded-2xl w-2/6 lg:w-2/6 xl:w-1/6  text-center py-2">
                VISIÓN
              </h3>
              <p className="text-gray-700 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                vulputate nulla at ante rhoncus, vel efficitur felis
                condimentum. Proin odio odio.
              </p>
            </div>

            <div className="w-full flex flex-col lg:flex-row py-8 text-center items-center justify-center gap-8">
              <h3 className="text-white text-lg lg:text-md 2xl:text-3xl font-bold bg-[#A5C6B1] rounded-2xl w-2/6 lg:w-2/6 xl:w-1/6  text-center py-2">
                ALCANCE
              </h3>
              <p className="text-gray-700 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                vulputate nulla at ante rhoncus, vel efficitur felis
                condimentum. Proin odio odio.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full md:w-1/3">
          <img
            src="./test-1.jpeg"
            alt="robot"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-[#A5C6B1] opacity-40"></div>
        </div>
        <div className="w-full hidden lg:block">
          <div class="w-32 h-32 rounded-tr-full bg-[#6baf92]"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
