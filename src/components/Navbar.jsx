import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";
import { LanguageContext } from "@/utils/contexts/contextLanguage";

function Navbarmenu() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [openLanguageMenu, setOpenLanguageMenu] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const { content, setLang } = useContext(LanguageContext);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [setIsHomePage, router]);

  const handleLanguageSpanish = () => {
    setLang("es");
  };
  const handleLanguageEnglish = () => {
    setLang("en");
  };

  return (
    <header>
      <nav className="fixed inset-x-0 z-[100] flex h-20 w-full border-b border-gray-800 bg-[#01071D] px-2 py-3">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
            {isHomePage ? (
              <ScrollLink
                to="home"
                smooth
                duration={300}
                exact="true"
                offset={-80}
              >
                <p className="cursor-pointer text-3xl font-bold text-white hover:text-purple-500 ">
                  Miracle Hotel
                </p>
              </ScrollLink>
            ) : (
              <Link href="/">
                <p className="cursor-pointer text-3xl font-bold text-white hover:text-purple-500 ">
                  Miracle Hotel
                </p>
              </Link>
            )}
            <button
              className={`block cursor-pointer rounded border border-solid border-transparent bg-purple-900 px-3 py-1 text-xl leading-none text-white outline-none transition-colors duration-300 hover:border-blue-500 hover:bg-blue-500 focus:outline-none lg:hidden ${
                navbarOpen
                  ? " focus:outline-none focus:ring focus:ring-purple-500"
                  : ""
              }`}
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
              title="Menu button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </button>
          </div>

          <div
            className={`flex-grow items-center lg:flex${
              navbarOpen
                ? " flex rounded-b-xl border-x border-b border-white bg-[#01071D] md:border-[#01071D] lg:border-[#01071D]"
                : " hidden "
            }`}
          >
            <div className="flex list-none flex-col text-white lg:ml-auto lg:flex-row">
              {isHomePage ? (
                <>
                  <ScrollLink
                    to="home"
                    smooth
                    duration={300}
                    exact="true"
                    offset={-80}
                  >
                    <p className="ml-10 cursor-pointer text-base hover:text-purple-500">
                      {content.navBar.main}
                    </p>
                  </ScrollLink>
                  <ScrollLink
                    to="rooms"
                    smooth
                    duration={300}
                    exact="true"
                    offset={-80}
                  >
                    <p className="ml-10 cursor-pointer text-base hover:text-purple-500">
                      {content.navBar.rooms}
                    </p>
                  </ScrollLink>
                  <ScrollLink
                    to="services"
                    smooth
                    duration={300}
                    exact="true"
                    offset={-80}
                  >
                    <p className="ml-10 cursor-pointer text-base hover:text-purple-500">
                      {content.navBar.services}
                    </p>
                  </ScrollLink>
                  <ScrollLink
                    to="about"
                    smooth
                    duration={300}
                    exact="true"
                    offset={-80}
                  >
                    <p className="ml-10 cursor-pointer text-base hover:text-purple-500">
                      {content.navBar.aboutUs}
                    </p>
                  </ScrollLink>
                  <ScrollLink
                    to="contact"
                    smooth
                    duration={300}
                    exact="true"
                    offset={-80}
                  >
                    <p className="ml-10 cursor-pointer text-base hover:text-purple-500">
                      {content.navBar.contact}
                    </p>
                  </ScrollLink>
                </>
              ) : (
                <>
                  <Link href="/#home">
                    <p className="ml-10 cursor-pointer text-base hover:text-purple-500">
                      {content.navBar.main}
                    </p>
                  </Link>
                  <Link href="/#rooms">
                    <p className="ml-10 cursor-pointer text-base hover:text-purple-500">
                      {content.navBar.rooms}
                    </p>
                  </Link>
                  <Link href="/#services">
                    <p className="ml-10 cursor-pointer text-base hover:text-purple-500">
                      {content.navBar.services}
                    </p>
                  </Link>
                  <Link href="/#about">
                    <p className="ml-10 cursor-pointer text-base hover:text-purple-500">
                      {content.navBar.aboutUs}
                    </p>
                  </Link>
                  <Link href="/#contact">
                    <p className="ml-10 cursor-pointer text-base hover:text-purple-500">
                      {content.navBar.contact}
                    </p>
                  </Link>
                </>
              )}
              <div className="relative">
                <button
                  type="button"
                  className="ml-10 flex items-center justify-center text-base hover:text-purple-500"
                  onClick={() => setOpenLanguageMenu(!openLanguageMenu)}
                >
                  {content.navBar.language}

                  {!openLanguageMenu ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 15a.75.75 0 01-.75-.75V7.612L7.29 9.77a.75.75 0 01-1.08-1.04l3.25-3.5a.75.75 0 011.08 0l3.25 3.5a.75.75 0 11-1.08 1.04l-1.96-2.158v6.638A.75.75 0 0110 15z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a.75.75 0 01.75.75v6.638l1.96-2.158a.75.75 0 111.08 1.04l-3.25 3.5a.75.75 0 01-1.08 0l-3.25-3.5a.75.75 0 111.08-1.04l1.96 2.158V5.75A.75.75 0 0110 5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
                {openLanguageMenu && (
                  <div className="absolute right-0 left-0 top-4 z-10 mt-1 flex w-48 flex-col justify-center rounded-b-md bg-[#01071D] shadow-lg lg:top-6">
                    <button
                      type="button"
                      className="my-1 inline-block hover:text-purple-500"
                      onClick={handleLanguageSpanish}
                    >
                      {content.navBar.spanish}
                    </button>

                    <button
                      type="button"
                      className="my-1 inline-block hover:text-purple-500"
                      onClick={handleLanguageEnglish}
                    >
                      {content.navBar.english}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbarmenu;
