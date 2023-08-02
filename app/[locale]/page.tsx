'use client'
import Hero from "./hero"
import { NextSeo } from "next-seo"
import { ChimeraService, META } from "@/constants/const.d"
import { useEffect, useRef } from "react"
import Head from "next/head"

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current) {
      const event = new MouseEvent('mousedown', {
        view: window,
        bubbles: true,
        cancelable: true,
      });

      canvasRef.current.dispatchEvent(event);
    }
  }, []);
  return (
    <>
      <NextSeo
        title={META.title}
        description={META.description}
        canonical={META.url}
        openGraph={{
          url: META.url,
          title: META.title,
          description: META.description,
          images: [
            {
              url: META.image,
              alt: META.title,
            }
          ],
          site_name: 'ChimeraGPT',
          locale: META.locale,
          type: META.type,

        }}
      />
      <Head>
      </Head>
      <div className="border-b-2 divide-y divide-neutral-800 border-neutral-800">
        <div className="relative h-screen overflow-hidden bg-black isolate">
          <div className="absolute w-full h-full">
            <canvas className="absolute z-0 hidden w-full h-screen bg-black sm:block" ref={canvasRef}></canvas>
          </div>
          <div className="relative z-10 grid items-center w-full gap-16 px-4 py-6 mx-auto pointer-events-none max-w-7xl sm:px-6 lg:px-8 sm:py-12 md:gap-8">
            <div className="md:max-xl:flex">
              <Hero invite={ChimeraService.DISCORD_INVITE_URL} />
            </div>
          </div>
        </div>
      </div>
      
      <script src="script.js" defer></script>
    </>
  )
}