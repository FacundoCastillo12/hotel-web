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
  const { content, lang } = useContext(LanguageContext);
  const priceForAWeek = priceForDay * 7;

  return (
    <div className=" h-full w-full rounded-lg border-2 border-slate-200 bg-white shadow-lg duration-200 ease-in hover:scale-105">
      <div className="relative mx-4 mt-4 mb-4 block overflow-hidden rounded-lg bg-white bg-cover bg-no-repeat shadow-sm shadow-gray-500">
        <Image
          src={`/${roomImg}`}
          height="300"
          width="400"
          className="w-full rounded-lg"
          alt="Habitacion de hotel"
        />
      </div>

      <div className="  lg:h-52">
        <h5 className="mb-3 text-lg font-bold capitalize">{title[lang]}</h5>
        <p className=" mx-2 text-justify">{description[lang]}</p>
      </div>

      <Link
        href="/roomslist"
        className="mt-1 mb-1 inline-block rounded-full bg-purple-600 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-6 py-2.5 text-center text-sm font-medium uppercase leading-tight text-white shadow-purple-500/50  duration-200 ease-in hover:scale-105 hover:bg-gradient-to-br"
      >
        {content.rooms.roomItems.moreInfo}
      </Link>

      <div className="flex items-center justify-between border-t border-slate-100 py-3 px-2">
        <p className="text-sm">
          ${priceForDay}/{content.rooms.roomItems.priceForNight}
        </p>
        <p className="text-sm">
          ${priceForAWeek}/{content.rooms.roomItems.priceForWeek}
        </p>
      </div>
    </div>
  );
}

export default Room;
