
interface ChimeraServiceT {
  API_URL: string;
  WEBSITE_URL: string;
  SERVICE_NAME: string;
  DISCORD_INVITE_URL: string;
  LOGO: string;
  GITHUB_URL: string;
  VERSION: number;
}
interface ServiceUrlsT {
  IMAGE_GENERATION: {url: string, desc: string};
  CHAT_COMPLETIONS: {url: string, desc: string};
  COMPLETIONS: {url: string, desc: string};
  EMBEDDINGS: {url: string, desc: string};
  MODERATION: {url: string, desc: string};
  AUDIO_TRANSCRIPTION: {url: string, desc: string};
  AUDIO_TRANSLATIONS: {url: string, desc: string};
  TOKENIZER: {url: string, desc: string};
  TTS: {url: string, desc: string};
  MODELS: {url: string, desc: string};
  STATUS: {url: string, desc: string};
  FASTAPI: {url: string, desc: string};
}

export const ChimeraService: ChimeraServiceT = {
  API_URL: 'https://chimeragpt.adventblocks.cc/api/v1', //API_URL needs to remain localhost address OR static server ip, else the functions responsible for data fetching will keep hitting CF CDN (If we do have one)
  WEBSITE_URL: "https://chimeragpt.adventblocks.cc",
  SERVICE_NAME: "ChimeraAI",
  DISCORD_INVITE_URL: "https://discord.gg/nYrwM7HHdA",
  LOGO: "/assets/logo.svg",
  GITHUB_URL: 'https://github.com/yakovexplorer/ChimeraWebsite',
  VERSION: 2.141337

}
export const ServiceUrls: ServiceUrlsT = {
  IMAGE_GENERATION: {url: `${ChimeraService.API_URL}/images/generations`, desc: 'An image generation service that uses this'},
  CHAT_COMPLETIONS: {url:`${ChimeraService.API_URL}/chat/completions`, desc: 'An chat completion service that uses OpenAi standard for req,res structure.'},
  COMPLETIONS: {url:`${ChimeraService.API_URL}/completions`, desc: 'An completion service that uses OpenAi standard for req,res structure.'},
  EMBEDDINGS: {url:`${ChimeraService.API_URL}/embeddings`, desc: 'An embedding service that uses OpenAi standard for req,res structure.'},
  MODERATION: {url:`${ChimeraService.API_URL}/moderations`, desc: 'An Moderation service from OpenAi'},
  AUDIO_TRANSCRIPTION: {url:`${ChimeraService.API_URL}/audio/transcriptions`, desc: 'ATT (Audio to text) service'},
  AUDIO_TRANSLATIONS: {url: `${ChimeraService.API_URL}/audio/translations`, desc: 'ATT translation service'},
  TOKENIZER: {url: `${ChimeraService.API_URL}/tokenizer`, desc: 'An tokenizer from OpenAi'},
  TTS: {url: `${ChimeraService.API_URL}/tts/generate`, desc: 'An text to speech service from Google.'},
  MODELS: {url: `${ChimeraService.API_URL}/models`, desc: 'An endpoint that returns full model list supported by Chimera'},
  STATUS: {url: `${ChimeraService.API_URL}/status`, desc: 'An endpoint which discloses the vitals of services.'},
  FASTAPI: {url: `${ChimeraService.WEBSITE_URL}/api/docs`, desc: 'FastApi endpoint'}
}
export const META = {
  title: 'ChimeraAI - World Class AI API',
  description: 'ChimeraAI provides a world class API for Artificial Intelligence. Harness the power of AI in your applications with ease.',
  image: '/assets/metaimg.png',
  type: 'website',
  locale: 'en_US',
  url: ChimeraService.WEBSITE_URL,
  
};