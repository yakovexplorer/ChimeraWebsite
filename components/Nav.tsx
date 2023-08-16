
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChimeraService } from "@/constants/const.d";

const Navbar = () => {
  const URLS = [
    
    { Home: "/" },
    { Docs: "/intel" },
    { Examples: "/intel/samples" },
    { FastApi: "/intel/fastapi" },
    { "NEW! Discord": ChimeraService.DISCORD_INVITE_URL },
  ];
  return (
    <nav className="border-b-2 border-gray-200 bg-zinc-900 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <a href="#" className="flex items-center">
          <Image src={"/assets/logo.svg"} height={32} width={32} alt="" />
          <span className="self-center text-2xl font-bold whitespace-nowrap gradient-text">
            {ChimeraService.SERVICE_NAME}
          </span>
          
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col mt-4 font-medium rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            {URLS.map((url, index) => (
              <li key={index}>
                <Link
                  href={Object.values(url)[0]}
                  className="block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {Object.keys(url)[0]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
