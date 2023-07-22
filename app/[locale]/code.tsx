import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { twilight } from 'react-syntax-highlighter/dist/esm/styles/prism';
const CodeExample = (props: {code: string}) => {
  return (
    <div className="bg-gray-800 text-white w-512 min-h-[400px] rounded-lg p-5 font-mono relative">
      <div className="flex absolute top-2.5 left-2.5">
        <div className="h-3.5 w-3.5 bg-red-500 rounded-full mr-1.5"></div>
        <div className="h-3.5 w-3.5 bg-yellow-500 rounded-full mr-1.5"></div>
        <div className="h-3.5 w-3.5 bg-green-500 rounded-full"></div>
      </div>
      <div className="mt-7">
        <span className="text-green-500"><SyntaxHighlighter language="python" style={twilight} customStyle={{ padding: 5,  }}>{props.code}  </SyntaxHighlighter></span>
      </div>
    </div>
  );
};

export default CodeExample;

