import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export default function Investigation() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="relative flex flex-col items-center flex-grow  justify-center bg-white py-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 px-20 md:px-40 lg:px-96 ">
          <div className="col-span-1">
            <Card
              imageSrc={<RiNumber1 className="h-10 w-10 text-black" />}
              
              background="./investigation-1.jpg"
              title="Problemática"
              description="Las PTAR consumen mucha energía eléctrica externa de fuentes no renovables y contaminantes, lo que representa una carga económica significativa."
            />
          </div>

          <div className="col-span-1">
            <Card
              imageSrc={<RiNumber2 className="h-10 w-10 text-black" />}
              
              background="./investigation-2.jpg"
              title="Investigación"
              description="Se investigaron sitios y expertos en ecología, energía, desarrollo ambiental, investigación e innovación."
            />
          </div>

          <div className="col-span-1">
            <Card
              imageSrc={<RiNumber3 className="h-10 w-10 text-black" />}
              
              background="./investigation-3.jpg"
              title="Solución"
              description="Crear una minicentral hidroeléctrica de tipo agua fluyente que reduzca los costos por consumo de electricidad y promueva una estrategia sustentable para la PTAR y la comunidad."
            />
          </div>
          <div className="col-span-1">
            <Link to="https://drive.google.com/file/d/1zHs7kh_D_7befzZAVY0BcfwB2R5L8w4C/view">
            <Card
              imageSrc={<RiNumber4 className="h-10 w-10 text-black" />}
              
              background="./investigation-4.jpg"
              title="Desarrollo"
              description="Mediante la convergencia de las experiencias obtenidas de la investigación, se realizó la redacción de nuestro artículo de divulgación."
            />
            </Link>
          </div>
        </div>
      </div>
      <ScrollToTop />
      <Footer />
    </div>
  )
}
