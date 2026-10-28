import { bio } from "../data/catalog";

export default function About() {
  return (
    <section id="about" className="mx-auto grid max-w-page gap-4x px-2x py-4x sm:grid-cols-[1fr_280px] sm:gap-5x sm:py-6x">
      <div>
        <p className="eyebrow">The artist</p>
        <h2 className="mt-0.5x text-h2 sm:text-display3">Avdrav</h2>
        <div className="mt-3x flex max-w-[640px] flex-col gap-2x text-body1 text-secondary">
          {bio.map((p, i) => <p key={i} className={i === 0 ? "text-primary" : ""}>{p}</p>)}
        </div>
      </div>
      <dl className="grid grid-cols-1 gap-2x self-start xs:grid-cols-3 sm:grid-cols-1">
        {[["Based in", "Philadelphia, PA"], ["Genre", "Mantra Pop"], ["Status", "Active"]].map(([k, v]) => (
          <div key={k}>
            <dt className="text-h5 text-secondary">{k}</dt>
            <dd className="text-h3 text-primary">{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
