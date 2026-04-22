import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateScript(topic) {
  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{
      role: "user",
      content: `Write a viral 60-second motivational/history/health script about ${topic}`
    }]
  });

  return res.choices[0].message.content;
}
