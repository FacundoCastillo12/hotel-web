import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import hotelApi from "@/utils/api";
import { LanguageContext } from "@/utils/contexts/contextLanguage";
import imgMain from "../../public/assets/images/background/main.webp";
import Carousel from "@/components/Carousel";
import Loading from "@/components/Loading";
import useFetchGetData from "@/hooks/useSimpleFetchHook";

function RoomsList() {
  const { content, lang } = useContext(LanguageContext);
  const { data, error, loading } = useFetchGetData(hotelApi.getHotelData, "rooms");

  return (
    <>
      <section>
        <div className="h-[32rem] w-full bg-[#042459] bg-cover bg-center bg-no-repeat text-center">
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
                  {content.roomsList.title}
                </h2>
                <p className=" text-xl text-white">{content.roomsList.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[100%] w-full">
        <div className="bg-[#02134D] bg-gradient-to-t text-center">
          <div className="mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-center p-2">
            {loading && <Loading />}
            {error && (
              <div className="rounded bg-red-500 px-4 py-2 text-white">
                {content.roomsList.error}
              </div>
            )}
            {data && (
              <div className="mx-2 mt-2 grid max-w-[1240px] gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {data.rooms.map((room) => (
                  <div
                    key={room.id}
                    className="mx-2 my-4 rounded-lg border border-purple-500 bg-[#01032B] text-white duration-200 ease-in hover:scale-105 hover:bg-blue-600"
                  >
                    <div className="my-2 h-8 border-b border-purple-500">
                      <h3 className="text-xl capitalize">{room.title[lang]}</h3>
                    </div>
                    <div className="my-1 border-b border-purple-500">
                      <div className="">
                        <Carousel images={room.images} />
                      </div>
                    </div>
                    <div className="border-b border-purple-500 sm:h-32 md:h-40 lg:h-48">
                      <p className="mx-2 my-4 text-justify">{room.description[lang]}</p>
                    </div>
                    <div className="my-2 h-52">
                      <div className="flex justify-between border-purple-500">
                        <p className="mx-2">{content.roomsList.rooms.priceForDay}:</p>
                        <strong className="mx-2">{room.price_for_day}$</strong>
                      </div>
                      <div className="flex justify-between border-purple-500">
                        <p className="mx-2">{content.roomsList.rooms.bed}: </p>
                        <strong className="mx-2 capitalize">{room.bed}</strong>
                      </div>
                      <div className="flex justify-between border-purple-500">
                        <p className="mx-2">Jacuzzi:</p>
                        <strong className="mx-2 capitalize">
                          {(room.jacuzzi && content.roomsList.rooms.isYes) ||
                            content.roomsList.rooms.isNo}
                        </strong>
                      </div>
                      <div className="flex justify-between border-purple-500">
                        <p className="mx-2">{content.roomsList.rooms.airConditioning}</p>
                        <strong className="mx-2 capitalize">
                          {(room.air_conditioning && content.roomsList.rooms.isYes) ||
                            content.roomsList.rooms.isNo}
                        </strong>
                      </div>
                      <div className="flex justify-between border-purple-500">
                        <p className="mx-2">{content.roomsList.rooms.privateBathroom}</p>
                        <strong className="mx-2 capitalize">
                          {(room.private_bathroom && content.roomsList.rooms.isYes) ||
                            content.roomsList.rooms.isNo}
                        </strong>
                      </div>
                      <div className="flex justify-between border-purple-500">
                        <p className="mx-2">{content.roomsList.rooms.television}</p>
                        <strong className="mx-2 capitalize">
                          {(room.television && content.roomsList.rooms.isYes) ||
                            content.roomsList.rooms.isNo}
                        </strong>
                      </div>
                      <div className="flex justify-between border-purple-500">
                        <p className="mx-2">{content.roomsList.rooms.livingRoom}</p>
                        <strong className="mx-2 capitalize">
                          {(room.living_room && content.roomsList.rooms.isYes) ||
                            content.roomsList.rooms.isNo}
                        </strong>
                      </div>
                      <div className="flex justify-between border-purple-500">
                        <p className="mx-2">{content.roomsList.rooms.minibar}</p>
                        <strong className="mx-2 capitalize">
                          {(room.mini_bar && content.roomsList.rooms.isYes) ||
                            content.roomsList.rooms.isNo}
                        </strong>
                      </div>
                    </div>
                    <div className="my-2 h-10">
                      <Link
                        href="/#contact"
                        className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-purple-500/50 duration-200 ease-in hover:scale-105 hover:bg-gradient-to-br"
                      >
                        {content.roomsList.rooms.buttonReserve}
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
