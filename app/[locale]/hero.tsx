'use client'
import MacWindow from './terminal';
import { useTranslations } from 'next-intl';
const Hero = (props: { invite: string }) => {
    const t = useTranslations('Home')

    return (
        <section className="pt-12 sm:pt-16">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">

                    <p className="mt-5 text-4xl font-bold leading-tight text-gray-50 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">

                        {t('Hero.title')}
                        <span className="relative inline-flex sm:inline">
                            <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                            <span className="relative gradient-text"> Chimera </span>
                        </span>
                    </p>

                    <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                        <a
                            href={props.invite}
                            title=""
                            className="inline-flex items-center justify-center w-full bg-slate-800 px-8 py-3 text-lg font-bold text-white transition-all duration-200 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 pointer-events-auto"
                            role="button"
                        >
                            {t('Hero.goToDiscord')}
                        </a>


                    </div>

                    <p className="mt-8 text-base text-gray-400 font-inter">
                        {t('Hero.subtitle')}
                    </p>
                </div>
            </div>

            <div className="pb-2">
                <div className="relative">
                    <div className="relative mx-auto">
                        <div className="lg:max-w-6xl lg:mx-auto">
                            <MacWindow />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Hero;