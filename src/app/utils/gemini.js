import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

export async function getReply(prompt) {
  try {
    const promptWithInstruction = `
      Reply to this message ${prompt}

      Note: You're replying to chat message, so do not include any speacial charachters in it and give answer in consice format and short.
    `;
    const { response } = await model.generateContent(promptWithInstruction);
    return response.text();
  } catch (err) {
    console.error("Gemini error:", err);
    return "Sorry, something went wrong with Gemini.";
  }
}
