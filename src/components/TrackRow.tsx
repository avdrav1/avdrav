import { artworkUrl, videoUrl } from "../data/catalog";
import { usePlayer } from "../player";
import { PlayIcon, PauseIcon, ExternalIcon } from "./icons";

type Props = { videoId: string; title: string; from: string; meta: string; compact?: boolean };

export default function TrackRow({ videoId, title, from, meta, compact }: Props) {
  const { now, play, stop } = usePlayer();
  const playing = now?.videoId === videoId;
  return (
    <article className={`flex gap-1.5x ${playing ? "bg-highlight" : ""} rounded-4 p-1x -m-1x`}>
      <a href={videoUrl(videoId)} target="_blank" rel="noopener" className={`art shrink-0 rounded-4 ${compact ? "h-art-8x w-art-8x" : "h-art-8x w-art-8x sm:h-art-16x sm:w-art-16x"}`} aria-label={`${title} on YouTube`}>
        <img src={artworkUrl(videoId)} alt="" loading="lazy" width={128} height={128} />
      </a>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start gap-1.5x">
          <button
            className="flex h-disc w-disc shrink-0 items-center justify-center rounded-full bg-primary text-surface [&_svg]:h-2x [&_svg]:w-2x [&_svg]:fill-current hover:[&_svg]:opacity-60 focus-visible:shadow-button-focus"
            onClick={() => (playing ? stop() : play({ videoId, title, from }))}
            aria-label={playing ? `Pause ${title}` : `Play ${title}`}
          >
            <span className={playing ? "text-special" : ""}>{playing ? <PauseIcon /> : <PlayIcon />}</span>
          </button>
          <div className="min-w-0 flex-1">
            <div className="text-captions text-secondary">{from}</div>
            <a href={videoUrl(videoId)} target="_blank" rel="noopener" className={`block truncate text-h4 ${playing ? "text-special" : "text-primary"} hover:opacity-40`}>{title}</a>
          </div>
          <div className="hidden text-captions text-secondary xs:block">{meta}</div>
        </div>
        {!compact && (
          <div className="mt-auto hidden items-center gap-1x pt-1x sm:flex">
            <a className="ctl ctl-tertiary ctl-small text-secondary" href={videoUrl(videoId)} target="_blank" rel="noopener"><ExternalIcon /><span>Open on YouTube</span></a>
          </div>
        )}
      </div>
    </article>
  );
}
