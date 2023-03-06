import React from "react";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="relative bg-cover bg-center flex-grow flex items-center justify-center">
        <img
          src="./hero.jpeg"
          alt="background"
          className="w-full h-full absolute inset-0 z-0 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 text-white text-center flex flex-col items-center justify-center">
            <img
                src="./robocoons-logo2.png"
                alt="Logo Robocoons"
                className="w-1/2 h-1/2"
            />

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Bienvenido a nuestro sitio web
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Somos una empresa especializada en servicio de robótica y automatización
          </p>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <button className="bg-[#A5C6B1]  hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
                    Contactanos
                </button>
                <button className="bg-[#A5C6B1]  hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
                    Conoce más
                </button>
                </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;