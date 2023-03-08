import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import { Link } from "react-router-dom";
import { BiRocket } from "react-icons/bi";
import { MdVisibility } from "react-icons/md";
import { IoEarth } from "react-icons/io5";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";
import TimeLine from "./TimeLine";

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
            <Link to="/team">
            <button className="bg-gray-500  hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
              Nuestro Equipo
            </button>
            </Link>
            <Link to="/robot">
            <button className="bg-gray-500  hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
            Nuestro Robot
            </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center md:-mt-32 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-20">
          <div className="col-span-1">
            <Card
              imageSrc={<BiRocket className="h-10 w-10 text-white" />}
              title="Objetivo"
              description="Ser un equipo de alto rendimiento dedicado al diseño de proyectos tecnológicos con la meta de generar un impacto positivo en la comunidad a través del uso de aplicaciones STEM."
            />
          </div>
          <div className="col-span-1">
            <Card
              imageSrc={<MdVisibility className="h-10 w-10 text-white" />}
              title="Vision"
              description="Ser un equipo relevante y expandir el área de alcance de nuestros proyectos a un ámbito internacional para el 2024."
            />
          </div>
          <div className="col-span-1">
            <Card
              imageSrc={<IoEarth className="h-10 w-10 text-white" />}
              title="Alcance"
              description="Desde febrero de 2001 iniciamos espacios donde no sólo los niños, sino también los jóvenes y adultos pueden trabajar desarrollando ideas poderosas aprendiendo con principios aplicados tanto a la ciencia e ingeniería, como física y matemáticas."
            />
          </div>
        </div>
      </div>

      
      


      <div className="flex flex-col items-center justify-center mb-8">
      <h1 className="text-4xl md:text-6xl text-black font-bold leading-tight mb-4"> HISTORIA </h1>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 px-20 md:px-40 lg:px-96 ">
          <div className="col-span-1">
            <Card
              imageSrc={<RiNumber1 className="h-10 w-10 text-white" />}
              description="Se inició a estudiar la plataforma en Septiembre del 2001. En Febrero del 2002, el taller de Robótica empezó como el primer taller vespertino impartido por Profesores en el Colegio Las Hayas."
            />
          </div>
          <TimeLine />
          <div className="col-span-1">
            <Card
              imageSrc={<RiNumber2 className="h-10 w-10 text-white" />}
              description="En el 2004 llega la primera competencia de FLL a México gracias a Bárbara Gómez de Navarro, lo que nos permitió participar. "
            />
          </div>
          <TimeLine />
          <div className="col-span-1">
            <Card
              imageSrc={<RiNumber3 className="h-10 w-10 text-white" />}
              description='Con ayuda de la Maestra Lula y el Maestro Carlos, el equipo de "Robocoons" comenzó a participar en distintas competencias de robótica, como "NanoQuest", "No Limits" y "Ocean Odyssey". '
            />
          </div>
          <TimeLine />
          <div className="col-span-1">
            <Card
              imageSrc={<RiNumber4 className="h-10 w-10 text-white" />}
              description='A través de los años, distintos estudiantes y profesores se han posicionado en podios Regionales, Naciones e Internacionales, formando así distintos equipos.'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
