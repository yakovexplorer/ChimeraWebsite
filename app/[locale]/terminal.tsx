import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { twilight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MacWindow = () => {
    const [displayedCode, setDisplayedCode] = useState(['']);
    const codes = useMemo(() => [
        "Write python3 function that encodes string input into base64",
        "Thinking...",
        "Certainly, the function to encode a string into base64 in Python is very similar to the one I provided earlier. Here is the function:",
        "```    import base64\n\n    def encode_string_to_base64(input_str):\n        # Ensure the input is bytes\n        input_bytes = input_str.encode('utf-8')\n\n        # Encode the bytes to base64\n        base64_bytes = base64.b64encode(input_bytes)\n\n        # Convert the base64 bytes back to string\n        base64_str = base64_bytes.decode('utf-8')\n\n        return base64_str```",
    ], []);
    const currentLine = useRef(0);
    const currentCharacter = useRef(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setDisplayedCode((prev) => {
                const newDisplayedCode = [...prev];
                if (currentLine.current < codes.length) {
                    if (currentCharacter.current < codes[currentLine.current].length) {
                        newDisplayedCode[currentLine.current] = (newDisplayedCode[currentLine.current] || "") + codes[currentLine.current][currentCharacter.current];
                        currentCharacter.current++;
                    } else {
                        if (currentLine.current < codes.length - 1) {
                            newDisplayedCode.push('');
                        }
                        currentLine.current++;
                        currentCharacter.current = 0;
                    }
                }
                return newDisplayedCode;
            });

            if (currentLine.current >= codes.length) {
                clearInterval(timer);
            }
        }, 5); // Adjust the interval to change typing speed

        return () => clearInterval(timer);
    }, [codes]);

    const emptyLines = new Array(10 - displayedCode.length).fill('~');

    return (
        <div className="bg-black text-green-400 w-full rounded-lg overflow-hidden shadow-xl">
            <div className="bg-gray-700 px-2 py-1 flex items-center">
                <div className="flex space-x-1 mr-3">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <span className="text-sm">Vim Terminal</span>
            </div>
            <div className="p-2 font-mono text-xs h-[450px] overflow-auto flex flex-col bg-gray-800">
                <p className="text-white">root@mac:~$ vim ChimeraGPT</p>
                {displayedCode.map((line, index) => {
                    if (line.startsWith('```') && line.endsWith('```')) {
                        return (
                            <SyntaxHighlighter language="python" style={twilight} customStyle={{ padding: 0, margin: 0 }} key={index}>
                                {line.slice(3, -3)}
                            </SyntaxHighlighter>
                        )
                    } else {
                        return (
                            <p key={index} className="text-white">{line}</p>
                        )
                    }
                })}
                {emptyLines.map((line, index) => (
                    <p key={index} className="text-gray-500">{line}</p>
                ))}
                <p className="text-white border-t border-white py-1 mt-auto">&quot;ChimeraGPT&quot; [New File]</p>
            </div>
        </div>
    );
};

export default MacWindow;
