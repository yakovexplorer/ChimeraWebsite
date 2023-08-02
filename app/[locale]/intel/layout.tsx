import { ChimeraService } from "@/constants/const.d";
import Link from "next/link";
import React, { ReactNode } from "react";
import Lottie from 'lottie-react'
import LottieRender from "@/components/Intel/Lottie";

const IntelLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <section className="bg-white rounded dark:bg-gray-800 patternBg">
        <div className="px-4 py-12 mx-auto">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="px-2 py-2 mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                Comprehensive <p className="gradient-text">Developer</p> Guide.
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Welcome to our API documentation! Here, you will find
                comprehensive information about the code, endpoints, overall
                structure, and service details. We are excited to present
                examples showcasing how to interact with our API and explore its
                incredible possibilities. Lets dive in and unlock the full
                potential of our API together!
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Go to Playground
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <LottieRender />
            </div>
          </div>
        </div>
        <div className="flex justify-center px-4 py-4">
        <div className="tabs tabs-boxed">
          <Link href="/intel" className="tab">
            Models/Statuses
          </Link>
          <Link href="/intel/samples" className="tab tab-active">
            Code samples
          </Link>
          <Link href="/tablez" className="tab">
            Tab 3
          </Link>
        </div>
      </div>
      </section>
      
      {children}
    </>
  );
};

export default IntelLayout;
