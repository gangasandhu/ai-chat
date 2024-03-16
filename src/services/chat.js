import OpenAI from "openai";

const openai = new OpenAI({ apiKey: import.meta.env.VITE_API_KEY, dangerouslyAllowBrowser: true });

const chat = async (prompt) => {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: prompt }],
        model: "gpt-3.5-turbo",
    });

    const { message } = completion.choices[0];
    return message.content
}

const getImage = async (prompt) => {
    const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: "a white siamese cat",
        n: 1,
        size: "1024x1024",
      });
      image_url = response.data.data[0].url
      return image_url
}

export { chat, getImage }