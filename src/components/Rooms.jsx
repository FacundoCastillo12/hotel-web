import React from "react";
import Roomitem from "./RoomItem";
import roomOne from "../../public/assents/images/roomone.jpg";
import roomTwo from "../../public/assents/images/roomtwo.jpg";
import roomThree from "../../public/assents/images/roomthree.jpg";

function Rooms() {
  const firstRoom = {
    id: 1,
    title: "Vista al mar",
    roomImg: roomOne,
    details:
      "Esta habitación cuenta con una vista impresionante del océano. El precio promedio por noche es de $250 dólares. La habitación tiene una cama king size, televisión de pantalla plana, minibar, baño privado con ducha, aire acondicionado y balcón privado.",
    priceForDay: 250,
  };
  const secondRoom = {
    id: 2,
    title: "Bungalow en la playa",
    roomImg: roomTwo,
    details:
      "Esta habitación es una cabaña de madera que se encuentra directamente en la playa. La habitación cuenta con una cama king size, aire acondicionado, minibar, baño privado con ducha, terraza privada con hamaca y sillas para relajarse mientras escucha las olas del mar",
    priceForDay: 350,
  };
  const thirdRoom = {
    id: 3,
    title: "Suite de lujo con jacuzzi privado",
    roomImg: roomThree,
    details:
      "Esta habitación es la más lujosa del hotel y cuenta con un jacuzzi privado en la terraza con hamacas y sillas para relajarse. La habitación tiene una cama king size, aire acondicionado, minibar, baño privado con ducha y una sala de estar con sofá y televisión de pantalla plana.",
    priceForDay: 500,
  };

  return (
    <section id="rooms" className="border-blue-gray-600 border-y">
      <div className="h-full w-full bg-gradient-to-t from-[#073378] to-[#042459] text-center">
        <div className="mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-center p-2">
          <div className="order-first mb-2 w-full">
            <h2 className="mb-4 mt-2 text-2xl font-bold uppercase italic text-white">
              Habitaciones
            </h2>
            <h3 className="mb-4 text-2xl font-bold italic text-white">
              Descansa en nuestras habitaciones de lujo
            </h3>
            <p className="font-bold text-white">
              Disfruta de un espacio diseñado para tu confort y tranquilidad,
              con acceso a los mejores servicios y eventos del hotel.
            </p>
          </div>
          <div className="mx-auto mt-2 grid max-w-[1240px] gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="">
              <Roomitem room={firstRoom} />
            </div>
            <div className="">
              <Roomitem room={secondRoom} />
            </div>
            <div className="">
              <Roomitem room={thirdRoom} />
            </div>
          </div>
          {/* Quizas seccion donde un button para mas */}
          <div className="order-last my-5 w-full lg:my-20">
            <button
              type="button"
              className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-purple-500/50 hover:scale-105 hover:bg-gradient-to-br dark:shadow-lg dark:shadow-purple-800/80 dark:focus:ring-purple-800"
            >
              Ver mas habitaciones
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rooms;
