import React, { useContext } from "react";
import Link from "next/link";
import Carousel from "./Carousel";
import hotelApi from "@/utils/api";
import { LanguageContext } from "@/utils/contexts/contextLanguage";
import Loading from "./Loading";
import useFetchGetData from "@/hooks/useSimpleFetchHook";

function Services() {
  const { data, error, loading } = useFetchGetData(
    hotelApi.getHotelData,
    "services"
  );
  const { content, lang } = useContext(LanguageContext);

  return (
    <section id="services">
      <div className="w-full bg-gradient-to-t from-[#031961] to-[#02144D] text-center">
        <div className="mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-center p-2">
          <div className="order-first mb-2 w-full">
            <h2 className="mb-4 mt-10 text-2xl font-bold uppercase italic text-white">
              {content.services.title}
            </h2>
            <h3 className="font-bold text-white">{content.services.desc} </h3>
          </div>
          {loading && <Loading />}
          {error && (
            <div className="rounded bg-red-500 px-4 py-2 text-white">
              {content.services.error}
            </div>
          )}
          {data && (
            <div className="mx-auto mt-2 grid max-w-[1240px] gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {data.services.map((services) => (
                <div
                  key={services.id}
                  className="duration-200 ease-in hover:scale-105"
                >
                  <h3 className="capitalize text-white">
                    {services.name[lang]}
                  </h3>
                  <Carousel images={services.images} />
                </div>
              ))}
            </div>
          )}
          <div className="order-last my-5 w-full lg:my-20">
            <Link
              href="/serviceslist"
              className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-purple-500/50 hover:bg-gradient-to-br"
            >
              {content.services.seeAllServices}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
