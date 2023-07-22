import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

import CodeExample from './code';

const languageData = [
  { id: 'python', label: 'Python' },
  { id: 'php', label: 'PHP' },
  { id: 'java', label: 'Java' },
  // Add more languages here if needed
];
const pythonCode = `
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
      print(chunk.choices[0].delta.get("content", ""), end="", flush=True)
`;

const phpCode = `
  <?php

  $api_key = "your API KEY from 'key get' Discord command";
  $api_base = "https://chimeragpt.adventblocks.cc/v1/chat/completions";

  $data = array(
    "model" => "gpt-4",
    "messages" => array(
      array("role" => "user", "content" => "Hello"),
    ),
    "stream" => true,
  );

  $ch = curl_init();
  curl_setopt_array($ch, array(
    CURLOPT_URL => $api_base,
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_POST => 1,
    CURLOPT_POSTFIELDS => json_encode($data),
    CURLOPT_HTTPHEADER => array(
      "Content-Type: application/json",
      "Authorization: Bearer " . $api_key,
    ),
  ));

  $response = curl_exec($ch);
  curl_close($ch);

  $chunks = json_decode($response, true);
  foreach ($chunks as $chunk) {
    echo $chunk["choices"][0]["delta"]["content"];
  }
`;

const javaCode = `
  import java.io.BufferedReader;
  import java.io.IOException;
  import java.io.InputStreamReader;
  import java.net.HttpURLConnection;
  import java.net.URL;

  public class Main {
    public static void main(String[] args) throws IOException {
      String api_key = "your API KEY from 'key get' Discord command";
      String api_base = "https://chimeragpt.adventblocks.cc/v1/chat/completions";

      URL url = new URL(api_base);
      HttpURLConnection con = (HttpURLConnection) url.openConnection();
      con.setRequestMethod("POST");
      con.setRequestProperty("Content-Type", "application/json");
      con.setRequestProperty("Authorization", "Bearer " + api_key);
      con.setDoOutput(true);

      String data = "{ \"model\": \"gpt-4\", \"messages\": [ { \"role\": \"user\", \"content\": \"Hello\" } ], \"stream\": true }";

      con.getOutputStream().write(data.getBytes());

      BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
      String inputLine;
      StringBuilder response = new StringBuilder();

      while ((inputLine = in.readLine()) != null) {
        response.append(inputLine);
      }

      in.close();
      con.disconnect();

      String json = response.toString();
      String[] chunks = json.substring(1, json.length() - 1).split("\\},\\{");

      for (String chunk : chunks) {
        String content = chunk.split("\"content\":\"")[1].split("\"")[0];
        System.out.print(content);
      }
    }
  }
`;

export default function Examples(props: {invite: string}) {
    const t = useTranslations('Home.Examples');
    const [selectedLanguage, setSelectedLanguage] = useState('python');
  
    const handleLanguageChange = (language: string) => {
      setSelectedLanguage(language);
    };
  
    const getSelectedCode = () => {
      switch (selectedLanguage) {
        case 'python':
          return pythonCode;
        case 'php':
          return phpCode;
        case 'java':
          return javaCode;
        default:
          return pythonCode;
      }
    };
  
    return (
      <section className="bg-gray-900">
        <div className="max-w-screen-2xl mx-auto px-4 py-8 md:grid md:grid-cols-2 gap-8 lg:px-6 xl:gap-8 items-center">
          <CodeExample language={selectedLanguage} code={getSelectedCode()} />
          <div className="mt-4 md:mt-0">
            <h2 className="text-4xl font-extrabold tracking-tight text-white dark:text-white mb-4">
              {t('title')}
            </h2>
            <p className="text-gray-400 font-light md:text-lg dark:text-gray-400 mb-6">
              {t('subtitle')}
            </p>
            <div className="flex items-center space-x-4 mb-6">
              {languageData.map((language) => (
                <button
                  key={language.id}
                  className="inline-flex items-center justify-center w-full bg-slate-800 px-8 py-3 text-lg font-bold text-white transition-all duration-200 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 pointer-events-auto"
                  onClick={() => handleLanguageChange(language.id)}
                >
                  {language.label}
                </button>
              ))}
            </div>
            <a
              href={props.invite}
              className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              {t('getStarted')}
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    );
  };
  