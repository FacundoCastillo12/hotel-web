import Image from "next/image";
import React from "react";
import barThree from "../../public/assents/images/bar/taylordavidsonbar.jpg";

function About() {
  return (
    <section id="about" className=" border-blue-gray-600 border-y">
      <div className="flex w-full items-center justify-center bg-gradient-to-t from-[#0D47A1] to-[#0A3E8F] py-6 lg:h-screen">
        <div className="m-auto grid max-w-[1240px] grid-cols-2 gap-8 md:w-full lg:grid-cols-3">
          <div className="col-span-2 ml-2 md:col-span-1 lg:col-span-2">
            <h2 className="mb-4 mt-10 text-center text-2xl font-bold uppercase italic text-white">
              Acerca de nosotros
            </h2>
            <h3 className="text-lg text-white">
              Somos una institucion con mas de diez años de experiencia
            </h3>
            <p className="text-white">
              Somos uno de los mejores hoteles disponibles en la zona con varios
              servicios y relacionado con la comunidad. Acercamos los turistas a
              la comunidad permitiendole no solo disfrutar de sus vacaciones
              sino que conocer y compartir actividades.
            </p>
            <p className="my-2 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
              laudantium ullam illum voluptates voluptatibus. Minima, maiores?
              Itaque maxime commodi architecto dolores nihil temporibus, sint
              quibusdam! Unde asperiores illum eum eveniet.
            </p>
            <p className="text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              eligendi suscipit nostrum? Beatae laborum, velit molestias
              temporibus aliquid quae maiores pariatur minus reprehenderit,
              asperiores voluptatem placeat quo, aperiam repellendus sit?
            </p>
          </div>
          <div className="col-span-2 mx-2 mt-4 flex h-auto w-auto items-center justify-center rounded-lg bg-purple-900 p-4 shadow-xl shadow-blue-500 duration-300 ease-in hover:scale-105 md:col-span-1 2xl:h-[24rem] 2xl:w-[26rem]">
            <Image
              src={barThree}
              alt={`Image ${barThree}`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
