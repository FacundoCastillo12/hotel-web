import React from "react";
import Carousel from "./Carousel";

import barOne from "../../public/assents/images/bar/crew.jpg";
import barTwo from "../../public/assents/images/bar/patricktomasso.jpg";
import barThree from "../../public/assents/images/bar/taylordavidsonbar.jpg";
import restaurantOne from "../../public/assents/images/restaurant/jaywennington.jpg";
import restaurantTwo from "../../public/assents/images/restaurant/manuel.jpg";
import restaurantThree from "../../public/assents/images/restaurant/ramonkagie.jpg";
import swimmingOne from "../../public/assents/images/swimmingpool/marcbabin.jpg";
import swimmingTwo from "../../public/assents/images/swimmingpool/xaviercoiffic.jpg";
import swimmingThree from "../../public/assents/images/swimmingpool/zhekaboychenko.jpg";
import gymOne from "../../public/assents/images/gym/daniellecerullo.jpg";
import gymTwo from "../../public/assents/images/gym/humphreymuleba.jpg";
import gymThree from "../../public/assents/images/gym/markbertulfo.jpg";

function Services() {
  const barImages = [barOne, barTwo, barThree];
  const restaurantImages = [restaurantOne, restaurantTwo, restaurantThree];
  const swimmingPoolImages = [swimmingOne, swimmingTwo, swimmingThree];
  const gymImages = [gymOne, gymTwo, gymThree];

  return (
    <section id="services">
      <div className=" w-full bg-gradient-to-t from-[#0A3E8F] to-[#073378] text-center">
        <div className="mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-center p-2">
          <div className="order-first mb-2 mt-8 w-full">
            <h2 className="mb-4 mt-10 text-2xl font-bold uppercase italic text-white">
              Servicios
            </h2>
            <h3 className="font-bold text-white">
              Disfruta de un espacio diseñado para tu confort y tranquilidad,
              con acceso a los mejores servicios e instalaciones del hotel.
            </h3>
          </div>

          <div className="mx-auto mt-2 grid max-w-[1240px] gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="">
              <h3 className="text-white">Restaurantes</h3>
              <Carousel images={restaurantImages} />
            </div>
            <div className="">
              <h3 className="text-white">Gimnasios</h3>
              <Carousel images={gymImages} />
            </div>
            <div className="">
              <h3 className="text-white">Piscinas</h3>
              <Carousel images={swimmingPoolImages} />
            </div>
            <div className="">
              <h3 className="text-white">Bares</h3>
              <Carousel images={barImages} />
            </div>
          </div>

          <div className="order-last my-5 w-full lg:my-20">
            <button
              type="button"
              className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-purple-500/50 hover:scale-105 hover:bg-gradient-to-br dark:shadow-lg dark:shadow-purple-800/80 dark:focus:ring-purple-800"
            >
              Conocé mas sobre nuestros servicios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
