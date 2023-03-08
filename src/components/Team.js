import React from "react";
import Navbar from "./Navbar";
import ProfileCard from "./ProfileCard";

export default function Team() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row flex-wrap gap-16 items-center justify-center min-h-full py-10">
        <ProfileCard
          imageSrc="./JP.jpeg"
          name="José Pablo"
          position="Capitan de equipo"
        />

        <ProfileCard
          imageSrc="./Scarlett.jpeg"
          name="Scarlett"
          position="Operadora / Administradora"
        />

        <ProfileCard
          imageSrc="./cuauh.jpeg"
          name="Cuauhtemoc"
          position="Operador / Diseño - Creativo"
        />

        <ProfileCard
          imageSrc="./camila.jpeg"
          name="Camila"
          position="Operadora / Programadora"
        />

        <ProfileCard
          imageSrc="./andre.jpeg"
          name="André"
          position="Operador / Programador"
        />

        <ProfileCard
          imageSrc="./KAI.jpeg"
          name="Rodrigo"
          position="Capitán de Proyecto de Innovación / Investigador"
        />

        <ProfileCard
          imageSrc="./jesus-zuñiga.jpeg"
          name="Jesús Armando"
          position="Constructor"
        />

        <ProfileCard
          imageSrc="./jesus.jpeg"
          name="Jesús Ruiz"
          position="Estratega"
        />
      </div>

      <div className=" bg-black text-center rounded-t-3xl">
        <h1 className="text-4xl text-white md:text-6xl font-bold leading-tight py-4">
          COACHES Y MENTORES
        </h1>
        <div className="flex flex-row flex-wrap bg-black gap-16 items-center justify-center min-h-full py-10">
          <ProfileCard
            imageSrc="./test-1.jpg"
            name="Caliche Orozco"
            position="Desarrollador Web"
          />

          <ProfileCard
            imageSrc="./test-1.jpg"
            name="Caliche Orozco"
            position="Desarrollador Web"
          />

          <ProfileCard
            imageSrc="./test-1.jpg"
            name="Caliche Orozco"
            position="Desarrollador Web"
          />

          <ProfileCard
            imageSrc="./test-1.jpg"
            name="Caliche Orozco"
            position="Desarrollador Web"
          />

          <ProfileCard
            imageSrc="./test-1.jpg"
            name="Caliche Orozco"
            position="Desarrollador Web"
          />
        </div>
      </div>
    </>
  );
}
