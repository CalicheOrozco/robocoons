import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";

function Hero() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="relative bg-cover bg-center py-20 flex-grow flex items-center justify-center">
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
            Somos una empresa especializada en servicio de robótica y
            automatización
          </p>

          <div className=" hidden md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4  pb-20">
            <button className="bg-[#A5C6B1]  hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
              Contactanos
            </button>
            <button className="bg-[#A5C6B1]  hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
              Conoce más
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center md:-mt-32 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-20">
          <div className="col-span-1">
            <Card
              color={"#A5C6B1"}
              imageSrc="./objetivo.png"
              title="Objetivo"
              description="Ser un equipo de alto rendimiento dedicado al diseño de proyectos tecnológicos con la meta de generar un impacto positivo en la comunidad a través del uso de aplicaciones STEM."
            />
          </div>
          <div className="col-span-1">
            <Card
              color={"#A5C6B1"}
              imageSrc="./vision.png"
              title="Vision"
              description="Ser un equipo relevante y expandir el área de alcance de nuestros proyectos a un ámbito internacional para el 2024."
            />
          </div>
          <div className="col-span-1">
            <Card
              color={"#A5C6B1"}
              imageSrc="./alcance.png"
              title="Alcance"
              description="Desde febrero de 2001 iniciamos espacios donde no sólo los niños, sino también los jóvenes y adultos pueden trabajar desarrollando ideas poderosas aprendiendo con principios aplicados tanto a la ciencia e ingeniería, como física y matemáticas."
            />
          </div>
        </div>
      </div>

      
      


      <div className="flex flex-col items-center justify-center mb-8">
      <h1 className="text-4xl md:text-6xl text-black font-bold leading-tight mb-4"> Historia </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-20">
          <div className="col-span-1">
            <Card
            
              color={"#FFD524"}
              imageSrc="./history-1.png"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate nulla at ante rhoncus, vel efficitur felis condimentum. Proin odio odio."
            />
          </div>
          <div className="col-span-1">
            <Card
              color={"#FFD524"}
              imageSrc="./history-2.png"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate nulla at ante rhoncus, vel efficitur felis condimentum. Proin odio odio."
            />
          </div>
          <div className="col-span-1">
            <Card
              color={"#FFD524"}
              imageSrc="./history-3.png"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate nulla at ante rhoncus, vel efficitur felis condimentum. Proin odio odio."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
