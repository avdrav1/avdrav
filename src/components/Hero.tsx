import { latest, releaseArt, releaseUrl, PLATFORMS } from "../data/catalog";
import { usePlayer } from "../player";
import { PlayIcon, YouTubeIcon, SpotifyIcon, AppleIcon } from "./icons";

export default function Hero() {
  const { play } = usePlayer();
  const first = latest.tracks[0];
  return (
    <section id="top" className="pt-header">
      <div className="mx-auto grid max-w-page gap-4x px-2x pb-6x pt-6x sm:grid-cols-[320px_1fr] sm:items-end sm:pt-8x">
        <a href={releaseUrl(latest)} target="_blank" rel="noopener" className="art aspect-square w-full max-w-art-40x rounded-8" aria-label={`${latest.title} on YouTube`}>
          <img src={releaseArt(latest)} alt={`${latest.title} artwork`} width={320} height={320} />
        </a>
        <div>
          <p className="eyebrow">Indie Pop Electronica · Philadelphia</p>
          <h1 className="mt-2x text-display2 sm:text-display1 leading-none">Avdrav</h1>
          <p className="mt-2x text-body1 text-secondary">Indie Pop Electronica with a dash of Psychedelic feels.</p>
          <p className="mt-3x text-body text-secondary">
            Latest: <span className="text-primary font-semibold">{latest.title}</span> · {latest.kind} · {latest.year}
          </p>
          <div className="mt-2x flex flex-wrap gap-1x">
            <button className="ctl ctl-special" onClick={() => play({ videoId: first.videoId, title: first.title, from: latest.title })}>
              <PlayIcon /><span>Play {latest.title}</span>
            </button>
            <a className="ctl ctl-secondary" href={PLATFORMS.youtube} target="_blank" rel="noopener"><YouTubeIcon /><span>YouTube</span></a>
            <a className="ctl ctl-secondary" href={PLATFORMS.spotify} target="_blank" rel="noopener"><SpotifyIcon /><span>Spotify</span></a>
            <a className="ctl ctl-secondary" href={PLATFORMS.apple} target="_blank" rel="noopener"><AppleIcon /><span>Apple Music</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
