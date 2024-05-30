import OpenAI from "openai";

if (!process.env.OPEN_AI_API_KEY) {
  throw new Error("Missing OPEN_AI_API_KEY");
}
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

export async function GET(req: Request) {
  //create and get a new thread
  const thread = await openai.beta.threads.create();

  return Response.json(thread.id);
}
