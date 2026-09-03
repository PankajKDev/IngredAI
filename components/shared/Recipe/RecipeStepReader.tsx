"use client";

import { useRef, useState } from "react";
import { Volume2, Pause, Play, RotateCcw } from "lucide-react";
import { Instruction } from "@/types";

const PAUSE_MS = 1000;

type Status = "idle" | "playing" | "paused";

export function RecipeStepReader({
  instructions,
}: {
  instructions: Instruction[];
}) {
  const [status, setStatus] = useState<Status>("idle");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const cancelledRef = useRef(false);
  const pausedRef = useRef(false);
  const indexRef = useRef(0);

  const playOne = (text: string) =>
    new Promise<void>((resolve, reject) => {
      fetch(`/api/tts?text=${encodeURIComponent(text)}`)
        .then(async (res) => {
          if (!res.ok) throw new Error("TTS failed");
          const blob = await res.blob();
          const url = URL.createObjectURL(blob);
          const audio = new Audio(url);
          audioRef.current = audio;
          audio.onended = () => {
            URL.revokeObjectURL(url);
            resolve();
          };
          audio.onerror = () => {
            URL.revokeObjectURL(url);
            reject(new Error("Audio error"));
          };
          return audio.play();
        })
        .catch(reject);
    });

  const sleep = (ms: number) =>
    new Promise<void>((r) => setTimeout(r, ms));

  const waitWhilePaused = async () => {
    while (pausedRef.current) {
      await sleep(200);
    }
  };

  const runFromCurrent = async () => {
    setStatus("playing");
    for (; indexRef.current < instructions.length; indexRef.current++) {
      if (cancelledRef.current) break;
      await waitWhilePaused();
      if (cancelledRef.current) break;

      const inst = instructions[indexRef.current];
      try {
        await playOne(`Step ${inst.step}. ${inst.details}`);
        if (cancelledRef.current) break;
        await waitWhilePaused();
        if (cancelledRef.current) break;
        await sleep(PAUSE_MS);
      } catch (error) {
        console.error("TTS error:", error);
        break;
      }
    }
    indexRef.current = 0;
    setStatus("idle");
  };

  const run = () => {
    indexRef.current = 0;
    cancelledRef.current = false;
    pausedRef.current = false;
    runFromCurrent();
  };

  const handlePlay = () => {
    audioRef.current?.pause();
    run();
  };

  const handlePause = () => {
    pausedRef.current = true;
    audioRef.current?.pause();
    setStatus("paused");
  };

  const handleResume = async () => {
    pausedRef.current = false;
    const audio = audioRef.current;
    if (audio) {
      try {
        await audio.play();
        setStatus("playing");
        return;
      } catch {
        // failed to resume mid-step; restart the current step from scratch
        cancelledRef.current = true;
        audioRef.current = null;
        setTimeout(() => {
          cancelledRef.current = false;
          setStatus("playing");
          runFromCurrent();
        }, 0);
        return;
      }
    }
    setStatus("playing");
  };

  const handleRestart = () => {
    cancelledRef.current = true;
    pausedRef.current = false;
    audioRef.current?.pause();
    indexRef.current = 0;
    setStatus("idle");
    // restart after a tick so any pending loop cleanup finishes
    setTimeout(() => {
      pausedRef.current = false;
      cancelledRef.current = false;
      run();
    }, 50);
  };

  const btnBase =
    "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors";

  return (
    <div className="flex items-center gap-2">
      {status === "paused" ? (
        <button
          type="button"
          onClick={handleResume}
          className={`${btnBase} bg-green-500/15 text-green-500 hover:bg-green-500/25`}
        >
          <Play className="w-3.5 h-3.5" /> Resume
        </button>
      ) : status === "playing" ? (
        <button
          type="button"
          onClick={handlePause}
          className={`${btnBase} bg-orange-500/15 text-orange-500 hover:bg-orange-500/25`}
        >
          <Pause className="w-3.5 h-3.5" /> Pause
        </button>
      ) : (
        <button
          type="button"
          onClick={handlePlay}
          className={`${btnBase} bg-orange-500/10 text-orange-500 hover:bg-orange-500/20`}
        >
          <Volume2 className="w-3.5 h-3.5" /> Listen to steps
        </button>
      )}
      {status !== "idle" && (
        <button
          type="button"
          onClick={handleRestart}
          title="Restart from the beginning"
          className={`${btnBase} bg-neutral-500/10 text-neutral-400 hover:bg-neutral-500/20`}
        >
          <RotateCcw className="w-3.5 h-3.5" /> Restart
        </button>
      )}
    </div>
  );
}
