import React, { useContext } from "react";
import Link from "next/link";
import Roomitem from "./RoomItem";
import { LanguageContext } from "@/utils/contexts/contextLanguage";
import Loading from "./Loading";
import useHandleLoadRooms from "@/hooks/useHandleLoadRooms";

function Rooms() {
  const { content } = useContext(LanguageContext);
  const { roomData, error, loading, handlePrevClick, handleNextClick } =
    useHandleLoadRooms();

  return (
    <section id="rooms" className="border-y border-gray-600">
      <div className="h-full w-full bg-gradient-to-t from-[#02144D] to-[#020F3B] text-center">
        <div className="mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-center p-2">
          <div className="order-first mb-2 w-full">
            <h2 className="my-2 mb-4 mt-2 text-2xl font-bold uppercase italic text-white ">
              {content.rooms.title}
            </h2>
            <p className="my-2 font-bold text-white ">{content.rooms.desc}</p>
          </div>
          <div className="flex flex-wrap">
            <button
              onClick={handlePrevClick}
              type="button"
              className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-purple-500/50 hover:scale-105 hover:bg-gradient-to-br"
            >
              {content.rooms.buttons.previous}
            </button>
            <button
              type="button"
              onClick={handleNextClick}
              className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-purple-500/50 hover:scale-105 hover:bg-gradient-to-br"
            >
              {content.rooms.buttons.next}
            </button>
          </div>

          <div className="flex w-full">{loading && <Loading />}</div>

          {error && (
            <div className="rounded bg-red-500 px-4 py-2 text-white">
              {content.rooms.error}
            </div>
          )}

          {roomData && (
            <div className="mx-4 my-3 mt-2 grid max-w-[1240px] gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {roomData.map((room) => (
                <div key={room.id}>
                  <Roomitem room={room} />
                </div>
              ))}
            </div>
          )}

          <div className="order-last my-5 w-full lg:my-20">
            <Link
              href="/roomslist"
              className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-purple-500/50 hover:scale-105 hover:bg-gradient-to-br"
            >
              {content.rooms.seeAllRooms}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rooms;
