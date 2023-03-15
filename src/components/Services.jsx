import React, { useContext } from "react";
import Link from "next/link";
import Carousel from "./Carousel";
import { useFetchGetData } from "@/hooks/useSimpleFecthHook";
import hotelApi from "@/utils/api";
import { LanguageContext } from "@/utils/contexts/contextLanguage";
import Loading from "./Loading";

function Services() {
  const { data, error, loading } = useFetchGetData(
    hotelApi.getHotelData,
    "services"
  );
  const { isSpanish } = useContext(LanguageContext);
  // Aqui tomar el if de data y adentro usar un usestate crear un slice de la data.services
  // Luego guardarlo en el usestate y usar esos elementos para que cargue todo. Por mientras poner loading

  return (
    <section id="services">
      <div className="w-full bg-gradient-to-t from-[#031961] to-[#02144D] text-center">
        <div className="mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-center p-2">
          <div className="order-first mb-2 w-full">
            <h2 className="mb-4 mt-10 text-2xl font-bold uppercase italic text-white">
              {isSpanish ? "Nuestros servicios" : "Our services"}
            </h2>
            <h3 className="font-bold text-white">
              {isSpanish
                ? "Disfruta de un espacio diseñado para tu confort y tranquilidad, con acceso a los mejores servicios e instalaciones del hotel."
                : "Enjoy a space designed for your comfort and tranquility, with access to the best services and facilities of the hotel."}
            </h3>
          </div>
          {loading && <Loading />}
          {error && (
            <div className="rounded bg-red-500 px-4 py-2 text-white">
              {isSpanish ? "Ha ocurrido un error." : "Something went wrong"}
            </div>
          )}
          {data && (
            <div className="mx-auto mt-2 grid max-w-[1240px] gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {data.services.map((services) => (
                <div key={services.id} className="hover:scale-105">
                  <h3 className="capitalize text-white">
                    {isSpanish ? `${services.name.es}` : `${services.name.en}`}
                  </h3>
                  <Carousel images={services.images} />
                </div>
              ))}
            </div>
          )}

          <div className="order-last my-5 w-full hover:scale-110 lg:my-20">
            <Link
              href="/serviceslist"
              className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-purple-500/50 hover:bg-gradient-to-br dark:shadow-lg dark:shadow-purple-800/80 dark:focus:ring-purple-800"
            >
              {isSpanish
                ? "Conocé mas sobre nuestros servicios"
                : "Learn more about our services"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
