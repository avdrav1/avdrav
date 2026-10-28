import { albumsAndEps, releaseArt, releaseUrl, videoUrl, type Release } from "../data/catalog";
import { usePlayer } from "../player";
import { PlayIcon, ExternalIcon } from "./icons";

function ReleaseCard({ r }: { r: Release }) {
  const { play } = usePlayer();
  const first = r.tracks[0];
  return (
    <article className="flex flex-col gap-1.5x">
      <a href={releaseUrl(r)} target="_blank" rel="noopener" className="art aspect-square w-full rounded-8" aria-label={`${r.title} on YouTube`}>
        <img src={releaseArt(r)} alt={`${r.title} artwork`} loading="lazy" width={200} height={200} />
      </a>
      <div>
        <h3 className="text-h3 text-primary">{r.title}</h3>
        <p className="text-captions text-secondary">{r.kind} · {r.year} · {r.tracks.length} {r.tracks.length === 1 ? "track" : "tracks"}</p>
      </div>
      <ol className="text-body text-secondary">
        {r.tracks.slice(0, 4).map((t) => (
          <li key={t.videoId} className="truncate">
            <a className="hover:text-primary" href={videoUrl(t.videoId)} target="_blank" rel="noopener">{t.title}</a>
          </li>
        ))}
        {r.tracks.length > 4 && <li>+ {r.tracks.length - 4} more</li>}
      </ol>
      <div className="mt-auto flex gap-1x">
        <button className="ctl ctl-primary" onClick={() => play({ videoId: first.videoId, title: first.title, from: r.title })}><PlayIcon /><span>Play</span></button>
        <a className="ctl ctl-secondary" href={releaseUrl(r)} target="_blank" rel="noopener"><ExternalIcon /><span>YouTube</span></a>
      </div>
    </article>
  );
}

export default function Releases() {
  return (
    <section id="music" className="mx-auto max-w-page px-2x py-4x sm:py-6x">
      <p className="eyebrow">Full catalog</p>
      <h2 className="mt-0.5x text-h2 sm:text-display3">Albums and EPs</h2>
      <div className="mt-3x grid grid-cols-2 gap-2x xs:gap-4x sm:grid-cols-3 md:grid-cols-5">
        {albumsAndEps.map((r) => <ReleaseCard key={r.slug} r={r} />)}
      </div>
    </section>
  );
}
