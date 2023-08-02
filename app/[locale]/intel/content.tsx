import React, { useState } from "react";
import Image from "next/image";
import CodeExample from "@/app/[locale]/code";
import * as codeSamples from "@/constants/codesamples.d";

interface Language {
  id: string;
  label: string;
  icon: string;
}

interface CodeExamples {
  [key: string]: {
    [key: string]: string;
  };
}

const languageData: Language[] = [
  { id: "python", label: "Python", icon: "python.svg" },
  { id: "javascript", label: "Javascript", icon: "javascript.svg" },
  // Add more languages here
];

const languageCodeExamples: CodeExamples = {
  python: {
    PYTHON_STREAMING: codeSamples.PYTHON_STREAMING,
    PYTHON_NONSTREAMING: codeSamples.PYTHON_NONSTREAMING,
    PYTHON_IMAGE_GENERATION: codeSamples.PYTHON_IMAGE_GENERATION,
    PYTHON_TOKENIZER: codeSamples.PYTHON_TOKENIZER,
    PYTHON_TTS: codeSamples.PYTHON_TTS,
    PYTHON_COMPLETION: codeSamples.PYTHON_COMPLETION,
    PYTHON_EMBEDDINGS: codeSamples.PYTHON_EMBEDDINGS,
    PYTHON_WHISPER_TRANSLATIONS: codeSamples.PYTHON_WHISPER_TRANSLATIONS,
    PYTHON_WHISPER_TRANSCRIPTION: codeSamples.PYTHON_WHISPER_TRANSCRIPTION,
    PYTHON_MODERATION: codeSamples.PYTHON_MODERATION,
  },
  javascript: {
    JAVASCRIPT_STREAMING: codeSamples.JAVASCRIPT_STREAMING,
    JAVASCRIPT_NONSTREAMING: codeSamples.JAVASCRIPT_NONSTREAMING,
    JAVASCRIPT_IMAGE_GENERATION: codeSamples.JAVASCRIPT_IMAGE_GENERATION,
    JAVASCRIPT_TOKENIZER: codeSamples.JAVASCRIPT_TOKENIZER,
    JAVASCRIPT_TTS: codeSamples.JAVASCRIPT_TTS,
    JAVASCRIPT_COMPLETION: codeSamples.JAVASCRIPT_COMPLETION,
    JAVASCRIPT_EMBEDDINGS: codeSamples.JAVASCRIPT_EMBEDDINGS,
    JAVASCRIPT_WHISPER_TRANSLATIONS: codeSamples.JAVASCRIPT_WHISPER_TRANSLATIONS,
    JAVASCRIPT_WHISPER_TRANSCRIPTION: codeSamples.JAVASCRIPT_WHISPER_TRANSCRIPTION,
    JAVASCRIPT_MODERATION: codeSamples.JAVASCRIPT_MODERATION,
  },
};

const Content: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("python");
  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  const selectedCodeExamples = languageCodeExamples[selectedLanguage];

  const getCodeForLanguage = (exampleKey: string): string => {
    return selectedCodeExamples[exampleKey] || "";
  };

  return (
    <div className="py-6 bg-gray-800 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xxl md:px-8">
        <div className="grid gap-4 md:grid-cols-2 lg:gap-4 sm:grid-cols-1">
          <div className="h-64 overflow-hidden rounded-lg md:h-auto">
            <h1 className="mb-4 text-2xl font-bold text-center text-gray-400 sm:text-3xl md:mb-6 md:text-left">
              Streaming
            </h1>
            <CodeExample
              code={getCodeForLanguage(
                `${selectedLanguage.toUpperCase()}_STREAMING`
              )}
              language={selectedLanguage}
            />
          </div>

          <div className="px-4 py-4 bg-gray-900 rounded-xl md:pt-8">
            <p className="font-bold text-center text-secondary md:text-left">
              Implementations
            </p>

            <h1 className="mb-4 text-2xl font-bold text-center text-primary sm:text-3xl md:mb-6 md:text-left">
              Let&apos;s Explore Different Implementations
            </h1>

            <p className="mb-6 text-gray-400 sm:text-lg md:mb-8">
              In the vast world of programming, numerous languages exist, each
              with its unique features and capabilities. We will provide you
              with simple examples of Chimera&apos;s implementations for some of
              these languages. However, it&apos;s important to note that due to
              variations in ecosystems, libraries, and other specifics, the
              examples will remain straightforward.
              <br />
              <br />
              On the left, you can find code samples for corresponding
              categories. For instance, explore streaming or non-streaming
              implementations like Text-to-Speech (TTS) or Image Generation.
            </p>

            <h2 className="mb-2 text-xl font-semibold text-center text-primary sm:text-2xl md:mb-4 md:text-left">
              How You Can Contribute
            </h2>

            <p className="mb-6 text-gray-400 sm:text-lg md:mb-8">
              Maintaining a codebase for various programming languages
              single-handedly is an incredibly challenging task. If you wish to
              help us in this endeavor, you can contribute to our project.
            </p>

            <div className="flex flex-wrap justify-center gap-4 px-4 py-4">
              {languageData.map((language) => (
                <button
                  key={language.id}
                  onClick={() => {
                    handleLanguageChange(language.id);
                  }}
                  type="button"
                  className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30"
                >
                  <Image
                    src={`/assets/Icons/${language.id}.svg`}
                    className="ml-1 mr-2"
                    height={18}
                    width={18}
                    alt=""
                  />
                  {language.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="py-6 bg-gray-800 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-xxl md:px-8">
            <div className="grid gap-4 md:grid-cols-2 lg:gap-4 sm:grid-cols-1">
              {/* Map over the code examples dynamically */}
              {Object.keys(selectedCodeExamples).map((exampleKey) => (
                <div
                  key={exampleKey}
                  className="px-4 py-4 my-4 bg-gray-900 rounded-xl"
                >
                  <h1 className="mb-4 text-2xl font-bold text-center text-gray-400 sm:text-3xl md:mb-6 md:text-left">
                    {exampleKey.replace("_", " ")}
                  </h1>
                  <CodeExample
                    code={getCodeForLanguage(`${exampleKey}`)}
                    language={selectedLanguage}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

