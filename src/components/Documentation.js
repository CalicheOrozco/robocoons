import React from 'react'
import Footer from './Footer';
import Navbar from "./Navbar";

export default function Documentation() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="w-full h-screen flex-grow">
        <object
          data="/documentacion.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        >
            <p>
                  Parece que no tiene un complemento de PDF para este navegador.
                  No hay problema... puedes <a href="https://drive.google.com/file/d/1zHs7kh_D_7befzZAVY0BcfwB2R5L8w4C/view">haz clic aquí para
                  descarga el archivo PDF.</a>
              </p>
        </object>

      </div>
      <Footer />
    </div>
  )
}
