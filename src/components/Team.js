import React from "react";
import Navbar from "./Navbar";
import ProfileCard from "./ProfileCard";

export default function Team() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row flex-wrap gap-16 items-center justify-center min-h-full py-10">
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
