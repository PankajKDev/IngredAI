import { Communicate } from "edge-tts-universal";
import { cleanForTTS } from "@/lib/tts";

export const runtime = "nodejs";
export const maxDuration = 30;

const VOICE = "en-US-EmmaMultilingualNeural";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text");

  if (!text) {
    return Response.json({ error: "Missing text parameter" }, { status: 400 });
  }

  const communicate = new Communicate(cleanForTTS(text), {
    voice: VOICE,
    rate: "-15%",
    pitch: "+2Hz",
  });

  try {
    const chunks: Buffer[] = [];
    for await (const chunk of communicate.stream()) {
      if (chunk.type === "audio" && chunk.data) {
        chunks.push(chunk.data);
      }
    }

    if (chunks.length === 0) {
      return Response.json({ error: "No audio generated" }, { status: 502 });
    }

    return new Response(Buffer.concat(chunks), {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (error) {
    console.error("Edge TTS error:", error);
    return Response.json({ error: "TTS failed" }, { status: 500 });
  }
}
