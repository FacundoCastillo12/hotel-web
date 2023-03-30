import React, { useContext } from "react";
import Image from "next/image";
import imgMain from "../../public/assets/images/background/main.webp";
import { LanguageContext } from "@/utils/contexts/contextLanguage";

function Main() {
  const { content } = useContext(LanguageContext);
  return (
    <section id="home">
      <div className=" h-screen w-full bg-[#031A44] bg-cover bg-center bg-no-repeat text-center">
        <div className="relative h-full">
          <Image
            className="absolute h-full w-full object-cover"
            src={imgMain}
            alt="background"
            priority
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-40" />
          <div className=" absolute inset-0 mx-auto flex h-full w-full max-w-[1240px]  items-center justify-center p-2">
            <div>
              <h2 className="mb-4 font-mono text-4xl font-bold italic text-white">
                {content.main.welcome}
              </h2>
              <p className=" text-xl text-white">{content.main.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
