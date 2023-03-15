import Image from "next/image";
import React, { useContext } from "react";
import barThree from "../../public/assents/images/sashakaunashotel.jpg";
import { LanguageContext } from "@/utils/contexts/contextLanguage";

function About() {
  const { isSpanish } = useContext(LanguageContext);
  return (
    <section id="about" className=" border-y border-gray-600">
      <div className="flex w-full items-center justify-center bg-gradient-to-t from-[#031D73] to-[#031961] py-6 lg:h-screen">
        <div className="m-auto grid max-w-[1240px] grid-cols-2 gap-8 md:w-full lg:grid-cols-3">
          <div className="col-span-2 ml-2 md:col-span-1 lg:col-span-2">
            <h2 className="mb-4 mt-10 text-center text-2xl font-bold uppercase italic text-white">
              {isSpanish ? "Acerca de nosotros" : "About us"}
            </h2>
            <h3 className="text-lg text-white">
              {isSpanish
                ? "Somos una institución con más de diez años de experiencia en la industria hotelera."
                : "We are an institution with more than ten years of experience in the hotel industry."}
            </h3>
            <p className="text-white">
              {isSpanish
                ? "Desde nuestros comienzos, nos hemos comprometido a brindar a nuestros huéspedes la mejor experiencia posible durante su estadía en nuestro hotel."
                : "Since our beginning, we have been committed to providing our guests with the best possible experience during their stay at our hotel."}
            </p>
            <p className="my-2 text-white">
              {isSpanish
                ? "Somos reconocidos como uno de los mejores hoteles disponibles en la zona de la playa, y nos enorgullece ofrecer una amplia variedad de servicios para satisfacer las necesidades de nuestros huéspedes. Desde habitaciones cómodas y elegantes hasta excelentes opciones gastronómicas y servicios de spa de alta calidad, nuestro objetivo es hacer que cada huésped se sienta como en casa."
                : "We are recognized as one of the finest hotels available in the beach area, and we are proud to offer a wide variety of services to meet the needs of our guests. From comfortable and elegant rooms to excellent dining options and high quality spa services, our goal is to make every guest feel at home."}
            </p>
            <p className="text-white">
              {isSpanish
                ? "Además, estamos profundamente comprometidos con la comunidad que nos rodea. Nos esforzamos por acercar a los turistas a la cultura y el estilo de vida local, ofreciendo actividades y excursiones que permiten a nuestros huéspedes no solo disfrutar de sus vacaciones, sino también aprender y compartir experiencias con la gente del lugar. Nos enorgullece ser parte de la comunidad y siempre nos esforzamos por tener un impacto positivo en ella."
                : "In addition, we are deeply committed to the surrounding community. We strive to bring tourists closer to the local culture and lifestyle by offering activities and excursions that allow our guests not only to enjoy their vacation, but also to learn and share experiences with the local people. We are proud to be part of the community and always strive to have a positive impact on it."}
            </p>
          </div>
          <div className="col-span-2 mx-2 mt-4 flex h-auto w-auto items-center justify-center rounded-lg bg-purple-900 p-4 shadow-xl shadow-blue-500 duration-300 ease-in hover:scale-105 md:col-span-1 2xl:h-[24rem] 2xl:w-[26rem]">
            <Image
              src={barThree}
              alt={`Image ${barThree}`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
