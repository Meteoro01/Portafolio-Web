import React, { useState } from "react";
import EmailSvg from "../assets/icons/Email.svg";
import Send from "../assets/icons/Send.svg";
import Copi from "../assets/icons/Copi.svg";
const Email = () => {
  const copiEmail = () => {
    // Obtener el elemento por su ID
    let emailDev = document.getElementById("email-dev");

    // Crear un área de texto temporal
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = emailDev.textContent;

    // Agregar el área de texto al documento
    document.body.appendChild(tempTextArea);

    // Seleccionar y copiar el contenido del área de texto
    tempTextArea.select();
    document.execCommand("copy");

    // Eliminar el área de texto temporal
    document.body.removeChild(tempTextArea);

    // Puedes mostrar un mensaje o realizar otras acciones después de copiar
  };

  return (
    <div className="mx-auto mt-6 w-11/12 rounded-3xl pb-16 md:w-10/12 lg:w-8/12">
      <h1 className="ml-3 flex gap-3 py-3 text-2xl  font-bold text-white md:ml-7 md:text-3xl">
        Email
        <img className="w-[40px]" src={EmailSvg} alt="" />
      </h1>
      <div className="grid grid-cols-10 gap-3 md:px-10">
        <div className="col-span-10 rounded-xl bg-slate-500 md:col-span-8">
          <p className="p-2 text-2xl text-slate-200" id="email-dev">
            luis.xd.saavedra@gmail.com
          </p>
        </div>
        <div className="col-span-5 rounded-xl bg-indigo-500 py-2 md:col-span-1 md:p-0 hover:dark:bg-opacity-90">
          <a
            href="mailto:luis.xd.saavedra@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex  h-full w-full items-center justify-center"
          >
            <img
              className="w-[25px] md:w-[30px] lg:w-[40px] "
              src={Send}
              alt=""
            />
          </a>
        </div>
        <div className="col-span-5 rounded-xl bg-indigo-500 py-2 md:col-span-1 md:p-0 hover:dark:bg-opacity-90">
          <button
            href=""
            onClick={copiEmail}
            className="flex  h-full w-full items-center justify-center"
          >
            <img
              className="w-[25px] md:w-[30px] lg:w-[40px] "
              src={Copi}
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Email;
