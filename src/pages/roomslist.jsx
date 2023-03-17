import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useFetchGetData } from "@/hooks/useSimpleFecthHook";
import hotelApi from "@/utils/api";
import { LanguageContext } from "@/utils/contexts/contextLanguage";
import imgMain from "../../public/assents/images/background/main.jpg";
import Carousel from "@/components/Carousel";
import Loading from "@/components/Loading";

function RoomsList() {
  const { isSpanish } = useContext(LanguageContext);
  const { data, error, loading } = useFetchGetData(
    hotelApi.getHotelData,
    "rooms"
  );

  return (
    <>
      <section>
        <div className="h-96 w-full bg-[#042459] bg-cover bg-center bg-no-repeat text-center">
          <div className="relative h-full">
            <Image
              className="absolute h-full w-full object-cover"
              src={imgMain}
              alt="background"
              priority
            />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-80" />
            <div className="absolute inset-0 mx-auto flex h-full w-full max-w-[1240px] items-center justify-center p-2">
              <div className="mt-10">
                <h2 className="mt-10 font-mono text-4xl font-bold italic text-white ">
                  {isSpanish ? "Nuestras habitaciones" : "Our rooms"}
                </h2>
                <p className=" text-xl text-white">
                  {isSpanish
                    ? "Descubre la comodidad y la calidad en cada una de nuestras habitaciones, diseñadas para brindarte una experiencia inolvidable. Además, ofrecemos servicios para todos los gustos, para que disfrutes de tu estadía al máximo. ¡Explora nuestras opciones y reserva tu habitación ahora mismo!"
                    : "Discover the comfort and quality in each one of our rooms, designed to provide you with an unforgettable experience. In addition, we offer services for all tastes, so you can enjoy your stay to the fullest. Explore our options and book your room now!"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-blue-gray-600 h-[100%] w-full">
        <div className="bg-[#02134D] bg-gradient-to-t text-center">
          <div className="mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-center p-2">
            {loading && <Loading />}
            {error && (
              <div className="rounded bg-red-500 px-4 py-2 text-white">
                {isSpanish ? "Ha ocurrido un error." : "Something went wrong"}
              </div>
            )}
            {data && (
              <div className="mx-2 mt-2 grid max-w-[1240px] gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {data.rooms.map((room) => (
                  <div
                    key={room.id}
                    className="mx-2 my-4 border border-purple-500 bg-[#01032B] text-white hover:scale-105 hover:bg-blue-600"
                  >
                    <div className="my-2 h-8 border-b border-purple-500">
                      <h3 className="text-xl capitalize">
                        {isSpanish ? room.title.es : room.title.en}
                      </h3>
                    </div>
                    <div className="my-1 border-b border-purple-500">
                      <div className="">
                        <Carousel images={room.images} />
                      </div>
                    </div>
                    <div className="h-52 border-b border-purple-500 sm:h-32 md:h-40 lg:h-48">
                      <p className="mx-2 my-4 text-justify">
                        {isSpanish ? room.description.es : room.description.en}
                      </p>
                    </div>
                    <div className="my-2 h-52">
                      <div className="flex justify-between border-b border-purple-500">
                        <p className="mx-2">
                          {isSpanish ? "Precio por dia" : "Price per day"}:{" "}
                        </p>
                        <strong className="mx-2">{room.price_for_day}$</strong>
                      </div>
                      <div className="flex justify-between border-b border-purple-500">
                        <p className="mx-2">{isSpanish ? "Cama" : "Bed"}: </p>
                        <strong className="mx-2 capitalize">{room.bed}</strong>
                      </div>
                      <div className="flex justify-between border-b border-purple-500">
                        <p className="mx-2">Jacuzzi:</p>
                        <strong className="mx-2 capitalize">
                          {(room.jacuzzi && (isSpanish ? "Sí" : "Yes")) || "No"}
                        </strong>
                      </div>
                      <div className="flex justify-between border-b border-purple-500">
                        <p className="mx-2">
                          {isSpanish
                            ? "Aire acondicionado"
                            : "Air conditioning"}
                        </p>
                        <strong className="mx-2 capitalize">
                          {(room.air_conditioning &&
                            (isSpanish ? "Sí" : "Yes")) ||
                            "No"}
                        </strong>
                      </div>
                      <div className="flex justify-between border-b border-purple-500">
                        <p className="mx-2">
                          {isSpanish ? "Baño privado" : "Private bathroom"}:
                        </p>
                        <strong className="mx-2 capitalize">
                          {(room.private_bathroom &&
                            (isSpanish ? "Sí" : "Yes")) ||
                            "No"}
                        </strong>
                      </div>
                      <div className="flex justify-between border-b border-purple-500">
                        <p className="mx-2">
                          {isSpanish ? "Television" : "Television"}:
                        </p>
                        <strong className="mx-2 capitalize">
                          {(room.television && (isSpanish ? "Sí" : "Yes")) ||
                            "No"}
                        </strong>
                      </div>
                      <div className="flex justify-between border-b border-purple-500">
                        <p className="mx-2">
                          {isSpanish ? "Sala de estar" : "Living room"}:
                        </p>
                        <strong className="mx-2 capitalize">
                          {(room.living_room && (isSpanish ? "Sí" : "Yes")) ||
                            "No"}
                        </strong>
                      </div>
                      <div className="flex justify-between border-b border-purple-500">
                        <p className="mx-2">
                          {isSpanish ? "Minibar" : "Minibar"}:
                        </p>
                        <strong className="mx-2 capitalize">
                          {(room.mini_bar && (isSpanish ? "Sí" : "Yes")) ||
                            "No"}
                        </strong>
                      </div>
                    </div>
                    <div className="my-2 h-10">
                      <Link
                        href="/#contact"
                        className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-purple-500/50 hover:scale-105 hover:bg-gradient-to-br"
                      >
                        {isSpanish ? "Reservar" : "Reserve"}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default RoomsList;
