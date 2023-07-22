'use client'
import Hero from "./hero"
import Statistics from "./stats"
import Examples from "./examples"
import { NextSeo } from "next-seo"
import { DISCORD_INVITE_URL, META } from "@/constants/const"
import { useEffect, useRef } from "react"
import Head from "next/head"
import { useTranslations } from "next-intl"

export default function Home() {
  const t = useTranslations('Index')
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
      <div className="divide-y divide-neutral-800 border-b-2 border-neutral-800">
        <div className="relative isolate overflow-hidden bg-black h-screen">
          <div className="absolute h-full w-full">
            <canvas className="absolute z-0 hidden h-screen w-full bg-black sm:block" ref={canvasRef}></canvas>
          </div>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pointer-events-none relative z-10 grid items-center gap-16 py-6 sm:py-12 md:gap-8">
            <div className="md:max-xl:flex">
              <Hero invite={DISCORD_INVITE_URL} />
            </div>
          </div>
        </div>
      </div>
      <Statistics />
      <Examples invite={DISCORD_INVITE_URL} />

      <script src="script.js" defer></script>
    </>
  )
}