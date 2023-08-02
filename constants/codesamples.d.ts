export const PYTHON_STREAMING = `import openai

openai.api_key = "your API KEY from \`/key get\` Discord command"
openai.api_base = "https://chimeragpt.adventblocks.cc/api/v1"

response = openai.ChatCompletion.create(
    model='gpt-4',
    messages=[
        {'role': 'user', 'content': "Hello"},
    ],
    stream=True,
    allow_fallback=True
)

for chunk in response:
    print(chunk.choices[0].delta.get("content", ""), end="", flush=True)`;

export const PYTHON_NONSTREAMING = `import openai

openai.api_key = "your API KEY from \`/key get\` Discord command"
openai.api_base = "https://chimeragpt.adventblocks.cc/api/v1"

response = openai.ChatCompletion.create(
    model='gpt-4',
    messages=[
        {'role': 'user', 'content': "Hello"},
    ],
    allow_fallback=True
)

print(response)`;

export const PYTHON_IMAGE_GENERATION = `import openai

openai.api_key = "Your API KEY"
openai.api_base = "https://chimeragpt.adventblocks.cc/api/v1"

response = openai.Image.create(
    prompt="A big EGG",
    n=10,  # images count
    size="1024x1024"
)

print(response["data"])`;

export const PYTHON_TOKENIZER = `import aiohttp
import asyncio


async def get_tokens(api_key: str, model: str, messages: list):
    headers = {'Authorization': f'Bearer {api_key}'}
    json_data = {'model': model, 'messages': messages}
    async with aiohttp.ClientSession(headers=headers) as session:
        async with session.post('https://chimeragpt.adventblocks.cc/api/v1/chat/tokenizer', json=json_data) as resp:
            response = await resp.json()
            return response


async def main():
    api_key = 'YOUR YOUNG API SWORD'
    model = "gpt-4"
    messages = [{'role': 'user', 'content': "What is the speed of sound?"}]
    response = await get_tokens(api_key, model, messages)
    print(response)  # json with data from our API


asyncio.run(main())`

export const PYTHON_TTS = `import asyncio

import aiohttp


async def generate_speech(api_key: str, text: str):
    headers = {'Authorization': f'Bearer {api_key}'}
    json_data = {'text': text}
    async with aiohttp.ClientSession(headers=headers) as session:
        async with session.post('https://chimeragpt.adventblocks.cc/api/v1/audio/tts/generation', json=json_data) as resp:
            response = await resp.json()
            return response


async def main():
    api_key = 'API KEEEYYY'
    text = "Glory Ukraine!"
    response = await generate_speech(api_key, text)
    print(response)  # prints json that contains URl of file. After 1 hour it will be deleted from our server.


asyncio.run(main())`
export const PYTHON_COMPLETION = `import openai

openai.api_key = "Your API key goes here"
openai.api_base = "https://chimeragpt.adventblocks.cc/v1"

response = openai.Completion.create(
    model='text-davinci-003',
    prompt="Hey How are u?!",
    stream=True
)

for chunk in response:
    print(chunk.choices[0].text, end="")`;

export const PYTHON_EMBEDDINGS = `import openai

openai.api_key = "Your API key goes here"
openai.api_base = "https://chimeragpt.adventblocks.cc/api/v1"

response = openai.Embedding.create(
    input="Big EGG in your...",
    model="text-embedding-ada-002"
)
embeddings = response['data'][0]['embedding']
print(embeddings)`

export const PYTHON_WHISPER_TRANSCRIPTION = `import json

import openai

openai.api_key = "CHIMERA API KEY"
openai.api_base = "https://chimeragpt.adventblocks.cc/api/v1"

audio_file = open("./audio_file.mp3", "rb")

transcript = openai.Audio.transcribe("whisper-1", audio_file)
print(json.dumps(transcript, ensure_ascii=False))`;

export const PYTHON_WHISPER_TRANSLATIONS = `import json

import openai

openai.api_key = "CHIMERA API KEY"
openai.api_base = "https://chimeragpt.adventblocks.cc/api/v1"

audio_file = open("./ded.mp3", "rb")

translation = openai.Audio.translate("whisper-1", audio_file)
print(json.dumps(translation, ensure_ascii=False))`

export const PYTHON_MODERATION = `import openai

openai.api_key = "Yes."
openai.api_base = "https://chimeragpt.adventblocks.cc/api/v1"

response = openai.Moderation.create(
    input="I WANT TO KILL U"
)
print(response)`
export const JAVASCRIPT_STREAMING = `const axios = require('axios');

const API_KEY = 'your API KEY from \`/key get\` Discord command';
const API_BASE = 'https://chimeragpt.adventblocks.cc/api/v1';

async function chatCompletion() {
  try {
    const response = await axios.post(
      \`\${API_BASE}/chat/completion\`,
      {
        model: 'gpt-4',
        messages: [
          { role: 'user', content: 'Hello' }
        ],
        stream: true,
        allow_fallback: true
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: \`Bearer \${API_KEY}\`
        }
      }
    );

    for (const chunk of response.data.choices) {
      const content = chunk.delta.content;
      process.stdout.write(content);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

chatCompletion();

`
export const JAVASCRIPT_NONSTREAMING = `const axios = require('axios');

const API_KEY = 'your API KEY from \`/key get\` Discord command';
const API_BASE = 'https://chimeragpt.adventblocks.cc/api/v1';

async function chatCompletion() {
  try {
    const response = await axios.post(
      \`\${API_BASE}/chat/completion\`,
      {
        model: 'gpt-4',
        messages: [
          { role: 'user', content: 'Hello' }
        ],
        allow_fallback: true
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: \`Bearer \${API_KEY}\`
        }
      }
    );

    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

chatCompletion();
`
export const JAVASCRIPT_IMAGE_GENERATION = `
const axios = require('axios');

const API_KEY = 'Your API KEY';
const API_BASE = 'https://chimeragpt.adventblocks.cc/api/v1';

async function generateImage() {
  try {
    const response = await axios.post(
      \`\${API_BASE}/image\`,
      {
        prompt: 'A big EGG',
        n: 10,  // images count
        size: '1024x1024'
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: \`Bearer \${API_KEY}\`
        }
      }
    );

    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

generateImage();
`;
export const JAVASCRIPT_TOKENIZER = `
const axios = require('axios');

async function getTokens() {
  try {
    const API_KEY = 'YOUR YOUNG API SWORD';
    const model = 'gpt-4';
    const messages = [{ role: 'user', content: 'What is the speed of sound?' }];

    const response = await axios.post(
      'https://chimeragpt.adventblocks.cc/api/v1/chat/tokenizer',
      { model, messages },
      { headers: { Authorization: \`Bearer \${API_KEY}\` } }
    );

    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

getTokens();
`;

export const JAVASCRIPT_TTS = `
const axios = require('axios');

async function generateSpeech() {
  try {
    const API_KEY = 'API KEEEYYY';
    const text = 'Glory Ukraine!';

    const response = await axios.post(
      'https://chimeragpt.adventblocks.cc/api/v1/audio/tts/generation',
      { text },
      { headers: { Authorization: \`Bearer \${API_KEY}\` } }
    );

    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

generateSpeech();
`;
export const JAVASCRIPT_COMPLETION = `
const axios = require('axios');

async function textCompletion() {
  try {
    const API_KEY = 'Your API key goes here';
    const API_BASE = 'https://chimeragpt.adventblocks.cc/v1';

    const response = await axios.post(
      \`\${API_BASE}/completion\`,
      {
        model: 'text-davinci-003',
        prompt: 'Hey How are u?!',
        stream: true
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: \`Bearer \${API_KEY}\`
        }
      }
    );

    response.data.choices.forEach(chunk => {
      console.log(chunk.text);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

textCompletion();
`;

export const JAVASCRIPT_EMBEDDINGS = `
const axios = require('axios');

async function getEmbeddings() {
  try {
    const API_KEY = 'Your API key goes here';
    const API_BASE = 'https://chimeragpt.adventblocks.cc/api/v1';

    const response = await axios.post(
      \`\${API_BASE}/embedding\`,
      {
        input: 'Big EGG in your...',
        model: 'text-embedding-ada-002'
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: \`Bearer \${API_KEY}\`
        }
      }
    );

    const embeddings = response.data[0].embedding;
    console.log(embeddings);
  } catch (error) {
    console.error('Error:', error);
  }
}

getEmbeddings();
`;
export const JAVASCRIPT_WHISPER_TRANSCRIPTION = `
const axios = require('axios');
const fs = require('fs');

async function whisperTranscription() {
  try {
    const API_KEY = 'CHIMERA API KEY';
    const API_BASE = 'https://chimeragpt.adventblocks.cc/api/v1';
    const audioFile = fs.readFileSync('./audio_file.mp3');

    const response = await axios.post(
      \`\${API_BASE}/audio/transcribe/whisper-1\`,
      audioFile,
      {
        headers: {
          'Content-Type': 'audio/mpeg',
          Authorization: \`Bearer \${API_KEY}\`
        }
      }
    );

    console.log(JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
}

whisperTranscription();
`;

export const JAVASCRIPT_WHISPER_TRANSLATIONS = `
const axios = require('axios');
const fs = require('fs');

async function whisperTranslations() {
  try {
    const API_KEY = 'CHIMERA API KEY';
    const API_BASE = 'https://chimeragpt.adventblocks.cc/api/v1';
    const audioFile = fs.readFileSync('./ded.mp3');

    const response = await axios.post(
      \`\${API_BASE}/audio/translate/whisper-1\`,
      audioFile,
      {
        headers: {
          'Content-Type': 'audio/mpeg',
          Authorization: \`Bearer \${API_KEY}\`
        }
      }
    );

    console.log(JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
}

whisperTranslations();
`;

export const JAVASCRIPT_MODERATION = `
const axios = require('axios');

async function moderation() {
  try {
    const API_KEY = 'Yes.';
    const API_BASE = 'https://chimeragpt.adventblocks.cc/api/v1';

    const response = await axios.post(
      \`\${API_BASE}/moderation\`,
      { input: 'I WANT TO KILL U' },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: \`Bearer \${API_KEY}\`
        }
      }
    );

    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

moderation();
`;
