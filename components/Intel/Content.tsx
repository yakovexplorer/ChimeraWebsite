import React, { useState } from "react";
import Image from "next/image";

import CodeExample from "@/app/[locale]/code";
type Props = {};
const languageData = [
  { id: "python", label: "Python", icon: "python.svg" },
  { id: "php", label: "PHP", icon: "trash.svg" },
  { id: "java", label: "Java", icon: "garbage.svg" },
  { id: "javascript", label: "JavaScript", icon: "javascript.svg" },
  { id: "c", label: "C/C++", icon: "c.svg" },
  { id: "swift", label: "Swift", icon: "swift.svg" },
  { id: "kotlin", label: "Kotlin", icon: "kotlin.svg" },

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
const javascriptCode = `
const fetch = require('node-fetch');

const apiKey = 'your API KEY from "key get" Discord command';
const apiBase = 'https://chimeragpt.adventblocks.cc/v1';

async function chatWithGpt4() {
  const messages = [{ role: 'user', content: 'Hello' }];

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + apiKey,
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: messages,
      stream: true,
    }),
  };

  try {
    const response = await fetch(apiBase + '/chat/completions', requestOptions);
    const reader = response.body.getReader();

    let chunks = '';
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      chunks += new TextDecoder().decode(value);
      const chunkLines = chunks.split('\n');
      chunks = chunkLines.pop(); // Save any incomplete chunk for the next iteration

      for (const line of chunkLines) {
        const parsedLine = JSON.parse(line);
        const content = parsedLine.choices[0].delta.content;
        process.stdout.write(content);
      }
    }
  } catch (error) {
    console.error('Error while fetching data:', error);
  }
}

chatWithGpt4();
`
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
?>`;

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

      String data = '{ "model": "gpt-4", "messages": [ { "role": "user", "content": "Hello" } ], "stream": true }';

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
        String content = chunk.split("'content':'")[1].split("'")[0];
        System.out.print(content);
      }
    }
  }
`;
const Content = (props: Props) => {
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  const getSelectedCode = () => {
    switch (selectedLanguage) {
      case "python":
        return pythonCode;
      case "javascript":
        return javascriptCode
      case "php":
        return phpCode;
      case "java":
        return javaCode;
      default:
        return pythonCode;
    }
  };
  return (
    <div className="py-6 bg-gray-800 sm:py-8 lg:py-12">
      <div className="px-4 mx-auto max-w-screen-xxl md:px-8">
        <div className="grid gap-4 md:grid-cols-2 lg:gap-4">
          <div className="h-64 overflow-hidden rounded-lg shadow-lg md:h-auto">
          <h1 className="mb-4 text-2xl font-bold text-center text-primary sm:text-3xl md:mb-6 md:text-left">
              Streaming
            </h1>
            <CodeExample code={getSelectedCode()} language={selectedLanguage} />
            <h1 className="mb-4 text-2xl font-bold text-center text-primary sm:text-3xl md:mb-6 md:text-left">
              Non-Streaming
            </h1>
            <CodeExample code={getSelectedCode()} language={selectedLanguage} />
          </div>

          <div className="px-4 py-4 bg-gray-900 rounded-xl md:pt-8">
            <p className="font-bold text-center text-secondary md:text-left">
              Implementations
            </p>

            <h1 className="mb-4 text-2xl font-bold text-center text-primary sm:text-3xl md:mb-6 md:text-left">
            Let's Explore Different Implementations
            </h1>

            <p className="mb-6 text-gray-400 sm:text-lg md:mb-8">
            In the vast world of programming, numerous languages exist, each with its unique features and capabilities. We will provide you with simple examples of "chimera" implementations for some of these languages. However, it's important to note that due to variations in ecosystems, libraries, and other specifics, the examples will remain straightforward.
              <br />
              <br />
              On the left, you can find code samples for corresponding categories. For instance, explore streaming or non-streaming implementations like Text-to-Speech (TTS) or Image Generation. 
              
            </p>

            <h2 className="mb-2 text-xl font-semibold text-center text-primary sm:text-2xl md:mb-4 md:text-left">
            How You Can Contribute
            </h2>

            <p className="mb-6 text-gray-400 sm:text-lg md:mb-8">
            Maintaining a codebase for various programming languages single-handedly is an incredibly challenging task. If you wish to help us in this endeavor, you can contribute to our project.
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
            <h1 className="mb-4 text-2xl font-bold text-center text-primary sm:text-3xl md:mb-6 md:text-left">
              Image Generation
            </h1>
            <CodeExample code={getSelectedCode()} language={selectedLanguage} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Content;
