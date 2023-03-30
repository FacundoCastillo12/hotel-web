import Image from "next/image";
import React, { useContext } from "react";
import barThree from "../../public/assets/images/sashakaunashotel.webp";
import { LanguageContext } from "@/utils/contexts/contextLanguage";

function About() {
  const { content } = useContext(LanguageContext);
  return (
    <section id="about" className="border-y border-gray-600">
      <div className="flex w-full items-center justify-center bg-gradient-to-t from-[#031D73] to-[#031961] py-6 lg:h-screen">
        <div className="m-auto grid max-w-[1240px] grid-cols-2 gap-8 md:w-full lg:grid-cols-3">
          <div className="col-span-2 ml-2 md:col-span-1 lg:col-span-2">
            <h2 className="mb-4 mt-10 text-center text-2xl font-bold uppercase italic text-white">
              {content.about.title}
            </h2>
            <h3 className="my-2 text-lg text-white">{content.about.subTitle}</h3>
            <p className="text-white">{content.about.firstParagraph}</p>
            <p className="my-2 text-white">{content.about.secondParagraph}</p>
            <p className="text-white">{content.about.thirdParagraph}</p>
          </div>
          <div className="col-span-2 mx-4 mt-4 flex h-auto w-auto items-center justify-center rounded-lg bg-purple-900 p-4 shadow-xl shadow-blue-500 duration-300 ease-in hover:scale-105 md:col-span-1 2xl:h-[24rem] 2xl:w-[26rem]">
            <Image src={barThree} alt="Image hotel" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
