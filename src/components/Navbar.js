import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();

  return (
    <div className="bg-[#404040] px-4 py-8 min-h-[10vh] min-w-full">
      <div className="flex md:flex-row justify-center lg:justify-between items-center">
        <div className="flex flex-col">
          <Link to="/">
            <img
              src="/logo-hayas-blanco.png"
              alt="Logo Colegio Las Hayas"
              className="w-80 h-12"
            />
          </Link>
        </div>

        <div className="space-x-8 px-6 hidden lg:block  text-white font-semibold">
          <Link to="/">
            <span
              className={
                pathname === "/"
                  ? ` text-[#A5C6B1]  font-bold`
                  : `lg:hover:text-slate-400`
              }
            >
              Inicio
              {pathname === "/" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              )}
            </span>
          </Link>
          <Link to="/our-robots">
            <span
              className={
                pathname === "/our-robots"
                  ? ` text-[#A5C6B1]  font-bold`
                  : `lg:hover:text-slate-400`
              }
            >
              {"Nuestros Robots"}

              {pathname === "/our-robots" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              )}
            </span>
          </Link>
          <Link to="/contact">
            <span
              className={
                pathname === "/contact"
                  ? ` text-[#A5C6B1]  font-bold`
                  : `lg:hover:text-slate-400`
              }
            >
              {"Contacto"}
              {pathname === "/contact" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              )}
            </span>
          </Link>
        </div>
      </div>
      <div className="flex gap-x-4 justify-center lg:hidden mt-4 text-white font-semibold">
        <Link to="/">
          <span
            className={
              pathname === "/"
                ? ` text-[#A5C6B1]  font-bold`
                : `lg:hover:text-slate-400`
            }
          >
            {"Inicio"}
          </span>
        </Link>
        <Link to="/our-robots">
          <span
            className={
              pathname === "/our-robots"
                ? ` text-[#A5C6B1]  font-bold`
                : `lg:hover:text-slate-400`
            }
          >
            {"Nuestros Robots"}
          </span>
        </Link>
        <Link to="/contact">
          <span
            className={
              pathname === "/contact"
                ? ` text-[#A5C6B1]  font-bold`
                : `lg:hover:text-slate-400`
            }
          >
            {"Contacto"}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
