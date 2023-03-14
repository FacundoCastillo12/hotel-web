import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as SrollLink } from "react-scroll";
import { useRouter } from "next/router";

function Navbarmenu() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [setIsHomePage, router]);

  return (
    <header>
      <nav className="fixed inset-x-0 z-[100] flex h-20 w-full border-b border-gray-800 bg-[#01071D] px-2 py-3">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
            {isHomePage ? (
              <>
                <SrollLink
                  to="home"
                  smooth={true}
                  duration={300}
                  exact="true"
                  offset={-80}
                >
                  <p className="cursor-pointer text-3xl font-bold text-white">
                    Miracle Hotel
                  </p>
                </SrollLink>
              </>
            ) : (
              <>
                <Link href="/">
                  <p className="cursor-pointer text-3xl font-bold text-white">
                    Miracle Hotel
                  </p>
                </Link>
              </>
            )}
            <button
              className={
                "block cursor-pointer rounded border border-solid border-transparent bg-purple-900 px-3 py-1 text-xl leading-none text-white outline-none transition-colors duration-300 hover:border-blue-500 hover:bg-blue-500 focus:outline-none lg:hidden " +
                (navbarOpen
                  ? " focus:outline-none focus:ring focus:ring-purple-500"
                  : "")
              }
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
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
            className={
              "flex-grow items-center lg:flex" +
              (navbarOpen
                ? " flex rounded-b-xl border-x border-b border-white bg-[#01071D] md:border-[#01071D] lg:border-[#01071D]"
                : " hidden ")
            }
          >
            <ul className="flex list-none flex-col text-white lg:ml-auto lg:flex-row">
              {isHomePage ? (
                <>
                  <SrollLink
                    to="home"
                    smooth={true}
                    duration={300}
                    exact="true"
                    offset={-80}
                  >
                    <li className="ml-10 text-base hover:border-b">Inicio</li>
                  </SrollLink>
                  <SrollLink
                    to="rooms"
                    smooth={true}
                    duration={300}
                    exact="true"
                    offset={-80}
                  >
                    <li className="ml-10 text-base hover:border-b">
                      Habitaciones
                    </li>
                  </SrollLink>
                  <SrollLink
                    to="services"
                    smooth={true}
                    duration={300}
                    exact="true"
                    offset={-80}
                  >
                    <li className="ml-10 text-base hover:border-b">
                      Servicios
                    </li>
                  </SrollLink>
                  <SrollLink
                    to="about"
                    smooth={true}
                    duration={300}
                    exact="true"
                    offset={-80}
                  >
                    <li className="ml-10 text-base hover:border-b">
                      Acerca de Nosotros
                    </li>
                  </SrollLink>
                  <SrollLink
                    to="contact"
                    smooth={true}
                    duration={300}
                    exact="true"
                    offset={-80}
                  >
                    <li className="ml-10 text-base hover:border-b">Contacto</li>
                  </SrollLink>
                </>
              ) : (
                <>
                  <Link href="/#home">
                    <li className="ml-10 text-base hover:border-b">Inicio</li>
                  </Link>
                  <Link href="/#rooms">
                    <li className="ml-10 text-base hover:border-b">
                      Habitaciones
                    </li>
                  </Link>
                  <Link href="/#services">
                    <li className="ml-10 text-base hover:border-b">
                      Servicios
                    </li>
                  </Link>
                  <Link href="/#about">
                    <li className="ml-10 text-base hover:border-b">
                      Acerca de Nosotros
                    </li>
                  </Link>
                  <Link href="/#contact">
                    <li className="ml-10 text-base hover:border-b">Contacto</li>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbarmenu;
