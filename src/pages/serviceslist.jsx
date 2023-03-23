import React, { useContext } from "react";
import Image from "next/image";
import hotelApi from "@/utils/api";
import { LanguageContext } from "@/utils/contexts/contextLanguage";
import imgMain from "../../public/assents/images/background/main.jpg";
import Carousel from "@/components/Carousel";
import Loading from "@/components/Loading";
import useFetchGetData from "@/hooks/useSimpleFetchHook";

function ServicesList() {
  const { content, lang } = useContext(LanguageContext);
  const { data, error, loading } = useFetchGetData(
    hotelApi.getHotelData,
    "services"
  );

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
              <div className="mt-16">
                <h2 className="mb-4 font-mono text-4xl font-bold italic text-white ">
                  {content.servicesList.title}
                </h2>
                <p className=" text-xl text-white">
                  {content.servicesList.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-blue-gray-600 h-[100%] w-full ">
        <div className="bg-[#02134D] bg-gradient-to-t text-center">
          <div className="mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-center p-2">
            {loading && <Loading />}
            {error && (
              <div className="rounded bg-red-500 px-4 py-2 text-white">
                {content.servicesList.error}
              </div>
            )}
            {data && (
              <div>
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
                      <div className="duration-200 ease-in hover:scale-105">
                        <Carousel images={service.images} />
                      </div>
                      <div className="flex flex-col items-center justify-center text-center text-white">
                        <div className="">
                          <h2 className="mb-2 capitalize">
                            {service.name[lang]}
                          </h2>
                        </div>
                        <div className=" mx-2">
                          <p className="text-justify">
                            {service.description[lang]}
                          </p>
                        </div>
                        <div>
                          <div className="my-2">
                            <p>
                              {content.servicesList.services.openingHours}:{" "}
                              <strong>{service.opening_hours}</strong>
                            </p>
                          </div>
                          <div className="">
                            <p>
                              {content.servicesList.services.closingHours}:{" "}
                              <strong>{service.closing_hours}</strong>
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
        </div>
      </section>
    </>
  );
}

export default ServicesList;
