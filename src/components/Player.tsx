import { useEffect } from "react";
import { usePlayer } from "../player";
import { videoUrl } from "../data/catalog";
import { CloseIcon, ExternalIcon } from "./icons";

/** The persistent player bar: 48px of chrome over a YouTube embed. */
export default function Player() {
  const { now, stop } = usePlayer();
  useEffect(() => {
    document.body.style.paddingBottom = now ? "300px" : "";
    return () => { document.body.style.paddingBottom = ""; };
  }, [now]);
  if (!now) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-surface shadow-[0_-1px_0_var(--highlight)]" role="region" aria-label="Now playing">
      <div className="mx-auto flex h-player max-w-page items-center gap-2x px-2x">
        <span className="inline-flex items-end gap-[2px] h-2x" aria-hidden="true">
          {[6, 12, 16, 9, 13].map((h, i) => <b key={i} className="block w-[3px] rounded-100 bg-special animate-pulse" style={{ height: h, animationDelay: `${i * 120}ms` }} />)}
        </span>
        <div className="min-w-0 flex-1">
          <div className="truncate text-h4 text-primary">{now.title}</div>
          <div className="truncate text-captions text-secondary">{now.from}</div>
        </div>
        <a className="ctl ctl-tertiary ctl-small text-secondary" href={videoUrl(now.videoId)} target="_blank" rel="noopener"><ExternalIcon /><span className="hidden xs:inline">YouTube</span></a>
        <button className="ctl ctl-tertiary" onClick={stop} aria-label="Close player"><CloseIcon /></button>
      </div>
      <div className="mx-auto max-w-page px-2x pb-2x">
        <iframe
          key={now.videoId}
          className="aspect-video w-full max-h-[240px] rounded-4 bg-highlight sm:max-h-[200px] sm:w-[356px]"
          src={`https://www.youtube-nocookie.com/embed/${now.videoId}?autoplay=1&rel=0`}
          title={now.title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
