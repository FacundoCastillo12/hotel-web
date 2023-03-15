/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from "react";
import { LanguageContext } from "@/utils/contexts/contextLanguage";

function Contact() {
  const { isSpanish } = useContext(LanguageContext);

  return (
    <section id="contact">
      <div className="h-full w-full bg-gradient-to-b from-blue-900 via-[#04255A] to-[#0D47A1] text-center xl:h-screen">
        <div className="flex justify-center">
          <div className="mt-4 text-center">
            <h2 className="text-white ">
              {isSpanish ? "Contacta con nosotros" : "Contact us"}
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="mb-12 w-full basis-auto px-3 lg:mb-0 lg:w-2/5 lg:px-6">
            <form>
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-white"
                >
                  {isSpanish ? "Nombre" : "Name"}
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder={
                    isSpanish ? "Ingresa tu nombre" : "Enter your name"
                  }
                  className="w-[260px] rounded border-2 border-solid border-gray-300 bg-gray-50 py-1.5 transition ease-in-out focus:border-purple-600 focus:text-gray-700 focus:outline-none sm:w-96 sm:text-lg md:w-96 lg:w-96"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-lg font-medium text-white"
                >
                  {isSpanish ? "Asunto" : "Subject"}
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder={
                    isSpanish ? "Reservar habitación" : "Reserve a room"
                  }
                  className="w-[260px] rounded border-2 border-solid border-gray-300 bg-gray-50 py-1.5 transition ease-in-out focus:border-purple-600 focus:text-gray-700 focus:outline-none sm:w-96 sm:text-lg md:w-96 lg:w-96"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-white"
                >
                  {isSpanish ? "Correo electrónico" : "Email"}
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="email@gmail.com"
                  className="w-[260px] rounded border-2 border-solid border-gray-300 bg-gray-50 py-1.5 transition ease-in-out focus:border-purple-600 focus:text-gray-700 focus:outline-none sm:w-96 sm:text-lg md:w-96 lg:w-96"
                />
              </div>
              <div>
                <label
                  htmlFor="textarea"
                  className="block text-lg font-medium text-white"
                >
                  {isSpanish ? "Mensaje" : "Message"}
                </label>
                <textarea
                  id="textarea"
                  rows="4"
                  placeholder={
                    isSpanish
                      ? "Escribe tu mensaje aqui..."
                      : "Write your message here..."
                  }
                  className="w-[260px] border-2 border-solid border-gray-300 bg-gray-50 transition ease-in-out focus:border-purple-600 focus:bg-white focus:text-gray-700 focus:outline-none sm:w-96 md:w-96 lg:w-96"
                />
              </div>
              <div>
                <button
                  type="button"
                  className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-purple-500/50 hover:scale-105 hover:bg-gradient-to-br dark:shadow-lg dark:shadow-purple-800/80 dark:focus:ring-purple-800"
                >
                  {isSpanish ? "Enviar" : "Send"}
                </button>
              </div>
            </form>
          </div>
          <div className="mb-12 w-full lg:w-[60%] lg:px-6">
            <div className="mt-4 flex flex-wrap items-center justify-center">
              <div className="my-6 mx-4 lg:w-[40%] lg:px-6 xl:w-[45%]">
                <div className="shadow-blue-gray-400 flex h-16 w-52 items-center justify-center rounded bg-purple-500 shadow-lg hover:scale-110 lg:my-8">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                    >
                      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />{" "}
                    </svg>
                  </div>
                  <div className="mx-4">
                    <p className=" text-base text-white">
                      {isSpanish ? "Telefono" : "Phone Number"}
                    </p>
                    <p className="text-gray-400">+0264123456</p>
                  </div>
                </div>
              </div>
              <div className="my-6 mx-4 lg:w-[40%] lg:px-6 xl:w-[45%]">
                <div className="shadow-blue-gray-400 flex h-16 w-52 items-center justify-center rounded bg-purple-500 shadow-lg hover:scale-110 lg:my-8">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                    >
                      <path d="M215.4 96H144 107.8 96v8.8V144v40.4 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3V96c0-26.5 21.5-48 48-48h76.6l49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48H416c26.5 0 48 21.5 48 48v44.3l22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4v-89V144 104.8 96H404.2 368 296.6 215.4zM0 448V242.1L217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1V448v0c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v0zM176 160H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                    </svg>
                  </div>
                  <div className="mx-4">
                    <p className="text-base text-white">
                      {isSpanish ? "Correo de soporte" : "Support e-mail"}
                    </p>
                    <p className="text-gray-400">hotel@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="my-6 mx-4 lg:w-[40%] lg:px-6 xl:w-[45%]">
                <div className="shadow-blue-gray-400 flex h-16 w-52 items-center justify-center rounded bg-purple-500 shadow-lg hover:scale-110 lg:my-8">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 384 512"
                    >
                      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />{" "}
                    </svg>
                  </div>
                  <div className="mx-4">
                    <p className=" text-base text-white">
                      {isSpanish ? "Ubicación" : "Location"}
                    </p>
                    <p className="text-gray-400">Av. 9 de Julio</p>
                  </div>
                </div>
              </div>
              <div className="my-6 mx-4 lg:w-[40%] lg:px-6 xl:w-[45%]">
                <div className="shadow-blue-gray-400 flex h-16 w-52 items-center justify-center rounded bg-purple-500 shadow-lg hover:scale-110 lg:my-8">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0c53 0 96 43 96 96v3.6c0 15.7-12.7 28.4-28.4 28.4H188.4c-15.7 0-28.4-12.7-28.4-28.4V96c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4H312c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H416c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6V240c0-8.8-7.2-16-16-16s-16 7.2-16 16V479.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96.3c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z" />
                    </svg>
                  </div>
                  <div className="mx-4">
                    <p className=" text-base text-white">
                      {isSpanish ? "Reporte de errores" : "Bug report"}
                    </p>
                    <p className="text-gray-400">
                      <a
                        href="https://github.com/FacundoCastillo12/hotel-web/issues"
                        target="_blank"
                      >
                        Github
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
