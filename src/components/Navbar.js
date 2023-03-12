import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  const { pathname } = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize(); // para actualizar el estado cuando se carga la página

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#000] px-4 py-8 min-h-[10vh] min-w-full">
      <div className="flex md:flex-row justify-around items-center">
        <div className="flex flex-col">
          <Link to="http://hayas.edu.mx/">
            <img
              src="/logo-hayas-blanco.png"
              alt="Logo Colegio Las Hayas"
              className="w-60 h-12"
            />
          </Link>
        </div>

        <div className="space-x-8 px-6 hidden lg:block  text-white font-semibold">
          <Link to="/">
            <span
              className={
                pathname === "/"
                  ? ` text-green-600  font-bold`
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
          <Link to="/team">
            <span
              className={
                pathname === "/team"
                  ? ` text-green-600  font-bold`
                  : `lg:hover:text-slate-400`
              }
            >
              {"Equipo"}

              {pathname === "/team" && (
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
          <Link to="/robot">
            <span
              className={
                pathname === "/robot"
                  ? ` text-green-600  font-bold`
                  : `lg:hover:text-slate-400`
              }
            >
              {"Fases del robot"}
              {pathname === "/robot" && (
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
          <Link to="/investigation">
            <span
              className={
                pathname === "/investigation"
                  ? ` text-green-600  font-bold`
                  : `lg:hover:text-slate-400`
              }
            >
              {"Investigación"}
              {pathname === "/investigation" && (
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

        <div className="hidden md:flex gap-4 ">
        <Link
            to="https://github.com/NeftaliVenancio/Robocoons-FLL-Challenge-2023.git"
            className="text-base font-bold text-white"
          >
            <FaGithub className="text-2xl" />
          </Link>
          <Link
            to={isMobile ? "https://drive.google.com/file/d/1zHs7kh_D_7befzZAVY0BcfwB2R5L8w4C/view" : "/documentation"}
          >
            <span className="text-base font-bold text-white p-1.5 md:p-3 bg-green-500 rounded-xl hover:bg-green-900 ">{"Documentación "}</span>
          </Link>
        </div>

      </div>
      <div className="flex gap-x-4 justify-around items-center text-center lg:hidden mt-4 text-white font-semibold">
        <Link to="/">
          <span
            className={
              pathname === "/"
                ? ` text-green-600  font-bold`
                : `lg:hover:text-slate-400`
            }
          >
            {"Inicio"}
          </span>
        </Link>
        <Link to="/team">
          <span
            className={
              pathname === "/team"
                ? ` text-green-600  font-bold`
                : `lg:hover:text-slate-400`
            }
          >
            {"Equipo"}
          </span>
        </Link>
        <Link to="/robot">
          <span
            className={
              pathname === "/robot"
                ? ` text-green-600  font-bold`
                : `lg:hover:text-slate-400`
            }
          >
            {"Fases del robot"}
          </span>
        </Link>
        <Link to="/investigation">
          <span
            className={
              pathname === "/investigation"
                ? ` text-green-600  font-bold`
                : `lg:hover:text-slate-400`
            }
          >
            {"Investigación"}
          </span>
        </Link> 
      </div>
      
      <div className="flex md:hidden w-full gap-4 justify-center py-5">
        <Link
            to="https://github.com/NeftaliVenancio/Robocoons-FLL-Challenge-2023.git"
            className="block text-base font-bold text-white"
          >
            <FaGithub className="text-2xl" />
          </Link>
          <Link
            to={isMobile ? "https://drive.google.com/file/d/1zHs7kh_D_7befzZAVY0BcfwB2R5L8w4C/view" : "/documentation"}
          >
            <span className="text-base font-bold text-white p-3 md:p-3 bg-green-500 rounded-xl hover:bg-green-900 ">{"Documentación "}</span>
          </Link>
        </div>
      
    </div>
  );
}

export default Navbar;
