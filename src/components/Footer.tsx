import { PLATFORMS } from "../data/catalog";
import { Bars, YouTubeIcon, SpotifyIcon, AppleIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-page flex-wrap items-center gap-2x px-2x pb-player pt-8x">
      <a href="#top" className="flex items-center gap-1x text-h4 text-primary"><Bars />Avdrav</a>
      <span className="text-captions text-secondary">© {new Date().getFullYear()} Avdrav. All rights reserved.</span>
      <nav className="ml-auto flex items-center gap-1x" aria-label="Platforms">
        <a className="ctl ctl-tertiary [&_svg]:text-youtube" href={PLATFORMS.youtube} target="_blank" rel="noopener" aria-label="YouTube"><YouTubeIcon /></a>
        <a className="ctl ctl-tertiary [&_svg]:text-spotify" href={PLATFORMS.spotify} target="_blank" rel="noopener" aria-label="Spotify"><SpotifyIcon /></a>
        <a className="ctl ctl-tertiary [&_svg]:text-apple" href={PLATFORMS.apple} target="_blank" rel="noopener" aria-label="Apple Music"><AppleIcon /></a>
      </nav>
      <div className="mb-6x w-full" />
    </footer>
  );
}
