import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";
import Footer from "./Footer";

export default function Investigation() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="relative flex flex-col items-center flex-grow  justify-center bg-white py-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 px-20 md:px-40 lg:px-96 ">
          <div className="col-span-1">
            <Card
              imageSrc={<RiNumber1 className="h-10 w-10 text-black" />}
              background="./robot-1.jpeg"
              title="Problemática"
              description="Las PTAR consumen mucha energía eléctrica externa de fuentes no renovables y contaminantes, lo que representa una carga económica significativa."
            />
          </div>

          <div className="col-span-1">
            <Card
              imageSrc={<RiNumber2 className="h-10 w-10 text-black" />}
              background="./robot-2.jpeg"
              title="Investigación"
              description="Se investigaron sitios y expertos en ecología, energía, desarrollo ambiental, investigación e innovación."
            />
          </div>

          <div className="col-span-1">
            <Card
              imageSrc={<RiNumber3 className="h-10 w-10 text-black" />}
              background="./robot-3.jpg"
              title="Solución"
              description="Crear una minicentral hidroeléctrica de tipo agua fluyente que reduzca los costos por consumo de electricidad y promueva una estrategia sustentable para la PTAR y la comunidad."
            />
          </div>

          <div className="col-span-1">
            <Card
              imageSrc={<RiNumber4 className="h-10 w-10 text-black" />}
              background="./robot-4.jpg"
              title="Chilangote 2.0"
              description="Construido para la fase Nacional. Versión compacta del CHILANGOTE que permite mayor rango de movilidad y versatilidad (2 modelos construidos)."
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
