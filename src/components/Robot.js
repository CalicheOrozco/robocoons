import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";
import Footer from "./Footer";

export default function Robot() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="relative flex flex-col items-center flex-grow  justify-center bg-black py-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 px-20 md:px-40 lg:px-96 ">
          <div className="col-span-1">
            <Card
              imageSrc={<RiNumber1 className="h-10 w-10 text-black" />}
              background="./robot-1.jpeg"
              title="Base motriz avanzada"
              description="Construida con el manual proporcionado por LEGO, con el propósito de probar las propuestas de código y misiones proporcionados por FIRST Lego League (2 modelos construidos)."
            />
          </div>

          <div className="col-span-1">
            <Card
              imageSrc={<RiNumber2 className="h-10 w-10 text-black" />}
              background="./robot-2.jpeg"
              title="Oaxaco"
              description="Construido tomando como estructura inicial la base motriz avanzada, pero fue modificado para adaptar las herramientas de forma sencilla, no hace uso de sensores."
            />
          </div>

          <div className="col-span-1">
            <Card
              imageSrc={<RiNumber3 className="h-10 w-10 text-black" />}
              background="./robot-3.jpg"
              title="CHILANGOTE"
              description="Construido para la fase Regional tomando en cuenta las necesidades del código, incorporando distintas adaptaciones que le permiten ser fácilmente adaptado a llevar a cabo cualquier misión. "
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
  );
}
