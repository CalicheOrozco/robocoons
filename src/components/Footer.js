import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs";


function Footer() {
    const currentTime = new Date();
  const year = currentTime.getFullYear();
  return (
    <div className="bg-black">
      <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
        <div className="flex flex-col md:flex-row justify-around items-center pb-2 gap-y-10">
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-center">
                <img src="/robocoons-logo.png" alt="logo" className="h-12 w-40" />
            </div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-center">
                <img src="/logo-hayas-blanco.png" alt="logo" className="h-15 w-40" />
            </div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-center">
                <img src="/first-lego-logo.png" alt="logo" className="h-15 w-40" />
            </div>
            </div>


        <div className="h-0.5 w-full bg-green-600"></div>
        <div className="flex flex-col text-white space-y-4 md:space-y-0 md:flex-row justify-around items-center mt-8 font-bold">
          <div>
            <span>{year} &copy; Robocoons. All Rights Reserved.</span>
          </div>
          <div>
            <span>
              Developed by
              <div className="inline-block transform hover:scale-110 hover:-rotate-3 transition duration-300">
                <a
                  className="hover:bg-green-500 rounded-md px-2 py-1  hover:text-gray-50"
                  href="https://calicheorozco.com"
                >
                  Caliche Orozco
                </a>
              </div>
            </span>
          </div>
          <div className="space-x-4 flex flex-row items-center">
            <a
              href="https://github.com/CalicheOrozco"
              className="text-base font-normal text-gray-600 dark:text-gray-300"
              target="_blank"
            >
              < BsGithub className="inline-block text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/calicheorozco/"
              className="text-base font-normal text-gray-600 dark:text-gray-300"
              target="_blank"
            >
              < BsLinkedin className="inline-block text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer