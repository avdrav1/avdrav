export const PlayIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2l10 6-10 6z" /></svg>
);
export const PauseIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 2h4v12H3zM9 2h4v12H9z" /></svg>
);
export const CloseIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 2.1L8 6.6l4.5-4.5 1.4 1.4L9.4 8l4.5 4.5-1.4 1.4L8 9.4l-4.5 4.5-1.4-1.4L6.6 8 2.1 3.5z" /></svg>
);
export const ExternalIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 2v2H4v8h8v-2h2v4H2V2zm3 0h5v5h-2V5.4L7.4 10 6 8.6 10.6 4H9z" /></svg>
);
export const YouTubeIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M15.7 4.6c-.2-.7-.7-1.2-1.4-1.4C13 2.9 8 2.9 8 2.9s-5 0-6.3.3C1 3.4.5 3.9.3 4.6 0 5.9 0 8 0 8s0 2.1.3 3.4c.2.7.7 1.2 1.4 1.4 1.3.3 6.3.3 6.3.3s5 0 6.3-.3c.7-.2 1.2-.7 1.4-1.4.3-1.3.3-3.4.3-3.4s0-2.1-.3-3.4zM6.4 10.2V5.8L10.6 8z" /></svg>
);
export const SpotifyIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.7 11.5a.5.5 0 01-.7.2c-1.9-1.2-4.2-1.4-7-.8a.5.5 0 11-.2-1c3-.7 5.6-.4 7.7.9.2.2.3.5.2.7zm1-2.2a.6.6 0 01-.9.2c-2.1-1.3-5.4-1.7-7.9-.9a.6.6 0 11-.4-1.2c2.9-.9 6.5-.5 9 1 .3.2.4.6.2.9zm.1-2.3C10.2 5.5 6 5.4 3.6 6.1a.8.8 0 01-.4-1.4c2.8-.8 7.4-.7 10.3 1.1a.8.8 0 01-.7 1.2z" /></svg>
);
export const AppleIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M13 8.5c0-1.7 1.4-2.5 1.4-2.5-.8-1.1-2-1.3-2.4-1.3-1-.1-2 .6-2.5.6s-1.3-.6-2.2-.6c-1.1 0-2.2.7-2.8 1.7-1.2 2.1-.3 5.2.9 6.9.6.8 1.2 1.8 2.1 1.7.9 0 1.2-.5 2.2-.5s1.3.5 2.2.5c.9 0 1.5-.8 2-1.7.7-.9.9-1.9.9-1.9s-1.8-.7-1.8-2.9zM11.4 3.6c.5-.6.8-1.4.7-2.2-.7 0-1.5.5-2 1-.4.5-.8 1.3-.7 2.1.8.1 1.5-.4 2-.9z" /></svg>
);
export const Bars = ({ className = "" }: { className?: string }) => (
  <span className={`inline-flex items-end gap-[2px] h-2x ${className}`} aria-hidden="true">
    {[6, 12, 16, 9, 13].map((h, i) => (
      <b key={i} className="block w-[3px] rounded-100 bg-special" style={{ height: h }} />
    ))}
  </span>
);
