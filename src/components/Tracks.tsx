import { popular, singles } from "../data/catalog";
import TrackRow from "./TrackRow";

export default function Tracks() {
  return (
    <section id="singles" className="mx-auto grid max-w-page gap-4x px-2x py-4x sm:grid-cols-2 sm:gap-5x sm:py-6x">
      <div>
        <p className="eyebrow">Most played</p>
        <h2 className="mt-0.5x text-h2 sm:text-display3">Popular tracks</h2>
        <div className="mt-3x flex flex-col gap-2x">
          {popular.map((t) => (
            <TrackRow key={t.videoId} videoId={t.videoId} title={t.title} from={t.from} meta={String(t.year)} />
          ))}
        </div>
      </div>
      <div>
        <p className="eyebrow">Singles</p>
        <h2 className="mt-0.5x text-h2 sm:text-display3">Singles</h2>
        <div className="mt-3x flex flex-col gap-2x">
          {singles.map((r) => (
            <TrackRow key={r.slug} compact videoId={r.tracks[0].videoId} title={r.title} from="Single" meta={String(r.year)} />
          ))}
        </div>
      </div>
    </section>
  );
}
