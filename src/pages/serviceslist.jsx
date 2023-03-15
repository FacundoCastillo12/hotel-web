import React, { useContext } from "react";

import Image from "next/image";
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
    "services"
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
              <div className="">
                <h2 className="mb-4 font-mono text-4xl font-bold italic text-white ">
                  {isSpanish ? "Nuestros servicios" : "Our services"}
                </h2>
                <p className=" text-xl text-white">
                  {isSpanish
                    ? "En nuestro hotel, nos enorgullece brindar servicios de alta calidad para garantizar que cada huésped disfrute de una estancia inolvidable. Nuestros servicios están diseñados pensando en usted, por lo que estamos disponibles para atender todas sus necesidades durante su estancia."
                    : "At our hotel, we pride ourselves on providing high quality services to ensure that every guest enjoys an unforgettable stay. Our services are designed with you in mind, so we are available to attend to your every need during your stay."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-blue-gray-600 h-[100%] w-full ">
        <div className="bg-[#02134D] bg-gradient-to-t text-center">
          {loading && <Loading />}
          {error && (
            <div className="rounded bg-red-500 px-4 py-2 text-white">
              {isSpanish ? "Ha ocurrido un error." : "Something went wrong"}
            </div>
          )}
          {data && (
            <div className="mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-center p-2">
              {data.services.map((service) => (
                <div
                  key={service.id}
                  className={`w-full ${service.id % 2 === 0 ? "" : ""}`}
                >
                  <div
                    className={`flex flex-row flex-wrap items-center justify-center sm:flex-nowrap ${
                      service.id % 2 === 0 ? "" : "flex-row-reverse"
                    }`}
                  >
                    <div className="hover:scale-105">
                      <Carousel images={service.images} />
                    </div>
                    <div className="flex flex-col items-center justify-center text-center text-white">
                      <div className="">
                        <h2 className="mb-2 capitalize">
                          {isSpanish ? service.name.es : service.name.en}
                        </h2>
                      </div>
                      <div className=" mx-2">
                        <p className="text-justify">
                          {isSpanish
                            ? service.description.es
                            : service.description.en}
                        </p>
                      </div>
                      <div>
                        <div className="my-2">
                          <p>
                            {isSpanish ? "Hora de apertura" : "Opening hours"}:{" "}
                            <strong>{service.opening_hours}</strong>{" "}
                          </p>
                        </div>
                        <div className="">
                          <p>
                            {isSpanish ? "Hora de cierre" : "Closing hours"}:{" "}
                            <strong>{service.closing_hours}</strong>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default RoomsList;
