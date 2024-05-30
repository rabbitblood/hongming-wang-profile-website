import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

if (!process.env.OPEN_AI_API_KEY) {
  throw new Error("Missing OPEN_AI_API_KEY");
}
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

const ASSISTANT_ID = "asst_F5SlNRJjjbybxBWhGk8vlNyS";

export async function POST(req: NextRequest) {
  const { message, threadId } = await req.json();
  if (!threadId || !message) {
    return NextResponse.error();
  }

  //console.log(message);
  const newMessage = await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: message,
  });
  //console.log(newMessage);
  const run = await openai.beta.threads.runs.create(threadId, {
    assistant_id: ASSISTANT_ID,
  });
  //console.log(run);
  let runData = null;
  while (!runData || runData.status !== "completed") {
    runData = await openai.beta.threads.runs.retrieve(threadId, run.id);
    if (runData.status === "failed") {
      return NextResponse.error();
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  //console.log(runData);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const lastMessage = (await openai.beta.threads.messages.list(threadId))
    .data[0];

  console.log(lastMessage);

  return NextResponse.json(lastMessage?.content);
}
