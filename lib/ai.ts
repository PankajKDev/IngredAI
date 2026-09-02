import { google } from "@ai-sdk/google";
import { groq } from "@ai-sdk/groq";
import type { LanguageModel } from "ai";

const GEMINI_MODEL = process.env.GEMINI_MODEL ?? "gemini-2.0-flash";
const GROQ_MODEL = process.env.GROQ_MODEL ?? "moonshotai/kimi-k2-instruct-0905";

export function primaryModel(): LanguageModel {
  return google(GEMINI_MODEL);
}

export function fallbackModel(): LanguageModel {
  return groq(GROQ_MODEL);
}
