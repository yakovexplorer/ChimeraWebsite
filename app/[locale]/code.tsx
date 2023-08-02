import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeExampleProps {
  code: string;
  language: string;
}

const CodeExample: React.FC<CodeExampleProps> = ({ code, language }) => {
  return (
    <div className="bg-gray-700 text-white w-full min-h-[400px] rounded-lg p-5 font-mono relative my-4">
      <div className="flex absolute top-2.5 left-2.5">
        <div className="h-3.5 w-3.5 bg-red-500 rounded-full mr-1.5"></div>
        <div className="h-3.5 w-3.5 bg-yellow-500 rounded-full mr-1.5"></div>
        <div className="h-3.5 w-3.5 bg-green-500 rounded-full"></div>
      </div>
      <div className="mt-7">
        <span className="text-green-500">
          <SyntaxHighlighter
            language={language}
            
            style={twilight}
            customStyle={{ padding: 5 }}
          >
            {code}{" "}
          </SyntaxHighlighter>
        </span>
      </div>
    </div>
  );
};

export default CodeExample;

