import { Configuration, OpenAIApi } from 'openai';

export const dalle = async (prompt, key) => {
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  const response = await openai.createImage({
    prompt: `${prompt}`,
    n: 1,
    size: '512x512',
  });

  return response;
};
