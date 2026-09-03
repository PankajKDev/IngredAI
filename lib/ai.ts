import { google } from "@ai-sdk/google";
import { groq } from "@ai-sdk/groq";
import type { LanguageModel } from "ai";

const GEMINI_MODEL = process.env.GEMINI_MODEL ?? "gemini-3.5-flash-lite";
const GROQ_MODEL = process.env.GROQ_MODEL ?? "groq/compound";

export function primaryModel(): LanguageModel {
  return google(GEMINI_MODEL);
}

export function fallbackModel(): LanguageModel {
  return groq(GROQ_MODEL);
}
