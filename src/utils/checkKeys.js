import { Configuration, OpenAIApi } from 'openai';
export const checkApiKey = async (keys) => {
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  return openai.listModels();
};
