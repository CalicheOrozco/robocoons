import { useState, useEffect } from "react";

function Card({ imageSrc, title, description, background, none }) {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  let classBackground =
    "relative rounded-lg shadow-xl h-full overflow-hidden h-80 flex flex-col items-center justify-center";
  let classTitle = "text-2xl font-bold text-gray-800";
  let classDescription = "mt-2 text-gray-600";
  let classImage =
    "flex items-center justify-center h-16 w-16 rounded-full mx-auto my-6 ";

  const handleMouseEnter = () => {
    if (background && !isMobile) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    if (background && !isMobile) {
      setIsHovering(false);
    }
  };

  if (!background) {
    classBackground += " bg-white";
    classImage += "bg-black";
  } else {
    classTitle += " text-white";
    classDescription += " text-white";
    classImage += "bg-white";
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1280);
    };

    handleResize(); // para actualizar el estado cuando se carga la página

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={classBackground}>
      {/* bg-white  */}
      {background && (
        <div
          className="bg-cover bg-center absolute inset-0 z-0"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ backgroundImage: `url(${background})` }}
        >
          <div
            className={
              isHovering ? "hidden" : "bg-black opacity-70 absolute inset-0"
            }
          ></div>
        </div>
      )}
      <div className="text-center px-6 py-4 relative">
        {none ? null : (
          <div
            className={isHovering ? "hidden" : classImage}
            onMouseEnter={handleMouseEnter}
          >
            {imageSrc}
          </div>
        )}
        <h2
          className={isHovering ? "hidden" : classTitle}
          onMouseEnter={handleMouseEnter}
        >
          {title}
        </h2>
        <p
          className={isHovering ? "hidden" : classDescription}
          onMouseEnter={handleMouseEnter}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
