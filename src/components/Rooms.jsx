import React, { useContext } from "react";
import Link from "next/link";
import Roomitem from "./RoomItem";
import hotelApi from "@/utils/api";
import { LanguageContext } from "@/utils/contexts/contextLanguage";
import { useFetchGetData } from "@/hooks/useSimpleFecthHook";
import Loading from "./Loading";

function Rooms() {
  const { isSpanish } = useContext(LanguageContext);
  const { data, error, loading } = useFetchGetData(
    hotelApi.getHotelData,
    "rooms"
  );

  return (
    <section id="rooms" className="border-y border-gray-600">
      <div className="h-full w-full bg-gradient-to-t from-[#02144D] to-[#020F3B] text-center">
        <div className="mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-center p-2">
          <div className="order-first mb-2 w-full">
            <h2 className="mb-4 mt-2 text-2xl font-bold uppercase italic text-white">
              {isSpanish ? "Nuestras habitaciones" : "Our rooms"}
            </h2>
            <h3 className="mb-4 text-2xl font-bold italic text-white">
              {isSpanish
                ? "Descansa en nuestras habitaciones de lujo"
                : "Rest in our deluxe rooms"}
            </h3>
            <p className="font-bold text-white">
              {isSpanish
                ? "Disfruta de un espacio diseñado para tu confort y tranquilidad, con acceso a los mejores servicios y eventos del hotel."
                : "Enjoy a space designed for your comfort and tranquility, with access to the best services and events of the hotel."}
            </p>
          </div>
          {loading && <Loading />}
          {error && (
            <div className="rounded bg-red-500 px-4 py-2 text-white">
              {isSpanish ? "Ha ocurrido un error." : "Something went wrong"}
            </div>
          )}
          {data && (
            <div className="mx-4 my-3 mt-2 grid max-w-[1240px] gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {data.rooms.map((room) => (
                <div key={room.id}>
                  <Roomitem room={room} />
                </div>
              ))}
            </div>
          )}
          <div className="order-last my-5 w-full hover:scale-110 lg:my-20">
            <Link
              href="/roomslist"
              className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-purple-500/50 hover:scale-105 hover:bg-gradient-to-br dark:shadow-lg dark:shadow-purple-800/80 dark:focus:ring-purple-800"
            >
              {isSpanish
                ? "Ver todas nuestras habitaciones"
                : "See all our rooms"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rooms;
