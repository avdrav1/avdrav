import { createContext, useContext, useState, type ReactNode } from "react";

export type NowPlaying = { videoId: string; title: string; from: string } | null;

const Ctx = createContext<{ now: NowPlaying; play: (t: NonNullable<NowPlaying>) => void; stop: () => void }>({
  now: null,
  play: () => {},
  stop: () => {},
});

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [now, setNow] = useState<NowPlaying>(null);
  return <Ctx.Provider value={{ now, play: setNow, stop: () => setNow(null) }}>{children}</Ctx.Provider>;
}

export const usePlayer = () => useContext(Ctx);
