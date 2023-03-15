import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { LanguageContext } from "@/utils/contexts/contextLanguage";

function Room({ room }) {
  const {
    title,
    room_image: roomImg,
    description,
    price_for_day: priceForDay,
  } = room;
  const { isSpanish } = useContext(LanguageContext);
  const priceForAWeek = priceForDay * 7;

  return (
    <div className="mt-2 h-full w-full rounded-lg border-2 border-slate-200 bg-white shadow-lg hover:scale-105">
      <div className="relative mx-4 mt-4 mb-4 block overflow-hidden rounded-lg bg-white bg-cover bg-no-repeat shadow-lg shadow-gray-500">
        <Image
          src={`/${roomImg}`}
          height="300"
          width="400"
          className="w-full rounded-lg"
          alt="Habitacion de hotel"
        />
      </div>

      <div className="h-48">
        <h5 className="mb-3 text-lg font-bold capitalize">
          {isSpanish ? `${title.es}` : `${title.en}`}
        </h5>
        <p className=" mx-2 text-justify">
          {isSpanish ? `${description.es}` : `${description.en}`}
        </p>
      </div>

      <Link
        href="/roomslist"
        className="mt-1 mb-1 inline-block rounded-full bg-purple-600 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-6 py-2.5 text-center text-sm font-medium uppercase leading-tight  text-white shadow-purple-500/50 hover:scale-105 hover:bg-gradient-to-br dark:shadow-lg dark:shadow-purple-800/80 dark:focus:ring-purple-800"
      >
        {isSpanish ? "Más información" : "Read more"}
      </Link>

      <div className="flex items-center justify-between border-t border-slate-100 py-3 px-2">
        <p className="text-sm text-gray-500 hover:text-gray-900">
          ${priceForDay}/{isSpanish ? "Noche" : "Night"}
        </p>
        <p className="text-sm text-gray-500 hover:text-gray-900">
          ${priceForAWeek}/{isSpanish ? "Semana" : "Week"}
        </p>
      </div>
    </div>
  );
}

export default Room;
