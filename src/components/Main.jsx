import Image from "next/image";
import React from "react";
import imgMain from "../../public/assents/images/background/main.jpg";

function Main() {
  return (
    <section id="home">
      <div className=" h-screen w-full bg-[#042459] bg-cover bg-center bg-no-repeat text-center">
        <div className="relative h-full">
          <Image
            className="absolute h-full w-full object-cover"
            src={imgMain}
            alt="background"
            priority={true}
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>
          <div className=" absolute inset-0 mx-auto flex h-full w-full max-w-[1240px] items-center justify-center p-2">
            <div className="">
              <h2 className="mb-4 font-mono text-4xl font-bold italic text-white ">
                Bienvenidos a Hotel Miracle
              </h2>
              <p className=" text-xl text-white">
                El mejor hotel de playa para aquellos que buscan comodidad en un
                ambiente relajante y exclusivo. Nuestro hotel cuenta con amplias
                habitaciones con vista al mar, restaurantes de primer nivel,
                piscinas y zonas de relajación para que disfrutes al máximo de
                tus vacaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
