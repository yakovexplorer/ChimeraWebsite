
import CodeExample from "./code";
import {useTranslations} from 'next-intl';
export default function Examples(props: { invite: string }) {
    const t = useTranslations('Home.Examples')
    let code = `
    import openai

    openai.api_key = "your API KEY from 'key get' Discord command"
    openai.api_base = "https://chimeragpt.adventblocks.cc/v1"
    
    response = openai.ChatCompletion.create(
        model='gpt-4',
        messages=[
            {'role': 'user', 'content': "Hello"},
        ],
        stream=True
    )
    
    for chunk in response:
        print(chunk.choices[0].delta.get("content", ""), end="", flush=True)`
    return (
        <section className="bg-gray-900">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-2xl xl:gap-8 md:grid md:grid-cols-2 sm:py-8 lg:px-6">
                
                <CodeExample code={code}/>
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">{t('title')}</h2>
                    <p className="mb-6 font-light text-gray-400 md:text-lg dark:text-gray-400">{t('subtitle')}</p>
                    <a href={props.invite} className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                        {t('getStarted')}
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};
