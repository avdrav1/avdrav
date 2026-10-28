// The catalog. Every link goes to YouTube (Avdrav - Topic uploads on the avdrav channel).
// Release dates come from Apple Music; video and playlist IDs from youtube.com/@avdrav8362.

export const CHANNEL_URL = "https://www.youtube.com/@avdrav8362";
export const CHANNEL_ID = "UCJNn9op61Q0lR2mzTc7Iung";

export const PLATFORMS = {
  youtube: CHANNEL_URL,
  spotify: "https://open.spotify.com/artist/17TgFagHs0TupeSzBLuTHV",
  apple: "https://music.apple.com/us/artist/avdrav/1500207773",
};

export type Track = { title: string; videoId: string };

export type Release = {
  slug: string;
  title: string;
  kind: "Album" | "EP" | "Single";
  year: number;
  date: string;
  playlistId?: string;
  tracks: Track[];
};

export const videoUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;
export const playlistUrl = (id: string) => `https://www.youtube.com/playlist?list=${id}`;
export const releaseUrl = (r: Release) =>
  r.playlistId ? playlistUrl(r.playlistId) : videoUrl(r.tracks[0].videoId);
export const artworkUrl = (videoId: string) => `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
export const releaseArt = (r: Release) => artworkUrl(r.tracks[0].videoId);

export const releases: Release[] = [
  {
    slug: "jeevan",
    title: "Jeevan",
    kind: "EP",
    year: 2023,
    date: "2023-10-13",
    playlistId: "OLAK5uy_lP9SGMphc3NiCxlvUQkbfwmEgvX1uqgTM",
    tracks: [
      { title: "Departure", videoId: "nhZ3GJcKU9A" },
      { title: "Eulogy", videoId: "OFCmlC-O8ks" },
      { title: "Rebirth", videoId: "bRmKXIFxblk" },
      { title: "Catharsis", videoId: "hZQ8P7NOngo" },
      { title: "Return", videoId: "EfuY1UHx_SM" },
      { title: "Expansion", videoId: "brnRlIG53xs" },
    ],
  },
  {
    slug: "philadelphia-rebirth",
    title: "Philadelphia Rebirth",
    kind: "Album",
    year: 2023,
    date: "2023-10-06",
    playlistId: "OLAK5uy_ndtDPM1S3LtQjo8VjJDBO6-8UVsINHzwQ",
    tracks: [
      { title: "Intertwine", videoId: "o3dg0YsxiU8" },
      { title: "Morning", videoId: "AFIuiF3nMYM" },
      { title: "Healer", videoId: "5R7jryXuh2I" },
      { title: "Counting Shadows", videoId: "rtlx58S40vE" },
      { title: "I Wanna Dance", videoId: "WdwiPa8j2mk" },
      { title: "Financial Crimes", videoId: "9FZ-rM6hVUA" },
      { title: "Immigrant Song", videoId: "DSTEOjLFpmQ" },
      { title: "Even On His Best Days", videoId: "Rqp9Jp9zhnA" },
      { title: "We Lay In Bed", videoId: "pVy7Au042Nc" },
      { title: "Flowers Keep On Growing", videoId: "tWrBdXAZLXM" },
    ],
  },
  {
    slug: "the-tunnel-ep",
    title: "The Tunnel EP",
    kind: "EP",
    year: 2023,
    date: "2023-06-23",
    playlistId: "OLAK5uy_mzx6GmUaS-RRoDGb5bZODa4EPn3ICHVCs",
    tracks: [
      { title: "Wise Tunnel Woman", videoId: "B0gB23TNI64" },
      { title: "Wise Tunnel Man", videoId: "m4RL4LAx9VM" },
    ],
  },
  {
    slug: "morningstar",
    title: "Morningstar",
    kind: "Single",
    year: 2023,
    date: "2023-06-14",
    playlistId: "OLAK5uy_mHfJuYaFdPTnL077vt9qwdqKJe3lcwnx4",
    tracks: [{ title: "Morningstar", videoId: "Ir3YFjKWJFM" }],
  },
  {
    slug: "fibonacci-mantras",
    title: "Fibonacci Mantras",
    kind: "Album",
    year: 2023,
    date: "2023-05-02",
    playlistId: "OLAK5uy_n0UANof3OxrVDANfaMWYtpLeETofg6tk4",
    tracks: [
      { title: "Twenty One", videoId: "Dv8RAT81PuU" },
      { title: "Thirteen", videoId: "OIV4-SRQtYs" },
      { title: "Eight", videoId: "mysxYLUgHd8" },
      { title: "Five", videoId: "N6rtHPMUlGA" },
      { title: "Three", videoId: "0uzYKVSXWl0" },
      { title: "Two", videoId: "Le-06wqnWbI" },
      { title: "One", videoId: "rZuIpzmzM7k" },
    ],
  },
  {
    slug: "freight",
    title: "Freight",
    kind: "Single",
    year: 2022,
    date: "2022",
    tracks: [{ title: "Freight", videoId: "NquGOLjzURw" }],
  },
  {
    slug: "bracelet",
    title: "Bracelet",
    kind: "Single",
    year: 2021,
    date: "2021-09-29",
    playlistId: "OLAK5uy_lavpAcRZXgI-mEqbrXdK-BtdF3fTgtesk",
    tracks: [{ title: "Bracelet", videoId: "GNsRmt1_-sQ" }],
  },
  {
    slug: "freedom-pills",
    title: "Freedom Pills",
    kind: "Single",
    year: 2021,
    date: "2021-09-29",
    playlistId: "OLAK5uy_lv2VaY4WPj6Uq7ayc7ZcocvcMkL2mfa1A",
    tracks: [{ title: "Freedom Pills", videoId: "kc-RWx2esx8" }],
  },
  {
    slug: "growth",
    title: "Growth",
    kind: "Single",
    year: 2021,
    date: "2021-09-29",
    playlistId: "OLAK5uy_mBfF-8dWW5Mtze1ggH9oocUCL9YUZeWM4",
    tracks: [{ title: "Growth", videoId: "bMPI8K8pSUw" }],
  },
  {
    slug: "your-story",
    title: "Your Story",
    kind: "Single",
    year: 2021,
    date: "2021-09-24",
    playlistId: "OLAK5uy_n2JNLV2ffV13D5qtOPWWYSsjpJEO2Ch9o",
    tracks: [{ title: "Your Story", videoId: "BSt5ZXMPMJw" }],
  },
  {
    slug: "first-sunset",
    title: "First Sunset",
    kind: "Single",
    year: 2021,
    date: "2021-09-22",
    playlistId: "OLAK5uy_nsUw1W8HxwgBZnSQGbHbsdiYEtTCuIyi4",
    tracks: [{ title: "First Sunset", videoId: "GRw1Z5LkeJo" }],
  },
  {
    slug: "rhinoceros",
    title: "Rhinoceros",
    kind: "Single",
    year: 2021,
    date: "2021-05-07",
    playlistId: "OLAK5uy_kjpLUArb8-manwroLRgbeYseUlrK5jRFU",
    tracks: [{ title: "Rhinoceros", videoId: "K7ZEloCCujU" }],
  },
  {
    slug: "buffalo",
    title: "Buffalo",
    kind: "Single",
    year: 2021,
    date: "2021-04-30",
    tracks: [{ title: "Buffalo", videoId: "w3OypKEZoJ4" }],
  },
  {
    slug: "beautiful",
    title: "Beautiful",
    kind: "Single",
    year: 2021,
    date: "2021-04-09",
    tracks: [{ title: "Beautiful", videoId: "6Uzl3LIiVmo" }],
  },
  {
    slug: "bushido-flamingo",
    title: "Bushido Flamingo",
    kind: "Album",
    year: 2020,
    date: "2020-11-06",
    playlistId: "OLAK5uy_m6oN9H-UCPvPIyk6PRS_2j4uL13PSU2pE",
    tracks: [
      { title: "The Sky Stood Still (feat. Barabbas T. Jones)", videoId: "C7X8gkZ6UmU" },
      { title: "Chemical Ghost (feat. Barabbas T. Jones)", videoId: "YPtubtSZzsI" },
      { title: "Purpose of Courage (feat. Barabbas T. Jones & Baaz)", videoId: "f0ohVyRJioE" },
      { title: "Moon as my Witness (feat. Barabbas T. Jones)", videoId: "FxCYtUVkJYw" },
      { title: "My Worries were as Fallen Leaves (feat. Barabbas T. Jones)", videoId: "tzgPprZDr14" },
      { title: "Utopia by Hand (feat. Barabbas T. Jones)", videoId: "o-gTxuctFp4" },
      { title: "Four Percent and Falling (feat. Barabbas T. Jones, Tone Deaf Jeff, DHXP & LOHM)", videoId: "jKyFfpTRSDY" },
      { title: "Dance (feat. Barabbas T. Jones)", videoId: "nqAOvGXtEN4" },
    ],
  },
];

export const latest = releases[0];
export const albumsAndEps = releases.filter((r) => r.kind !== "Single");
export const singles = releases.filter((r) => r.kind === "Single");

/** The "Most played" list the old site featured, with their YouTube videos. */
export const popular: { title: string; from: string; year: number; videoId: string }[] = [
  { title: "Morningstar", from: "Single", year: 2023, videoId: "Ir3YFjKWJFM" },
  { title: "First Sunset", from: "Single", year: 2021, videoId: "GRw1Z5LkeJo" },
  { title: "Freight", from: "Single", year: 2022, videoId: "NquGOLjzURw" },
  { title: "Intertwine", from: "Philadelphia Rebirth", year: 2023, videoId: "o3dg0YsxiU8" },
  { title: "Five", from: "Fibonacci Mantras", year: 2023, videoId: "N6rtHPMUlGA" },
  { title: "Departure", from: "Jeevan", year: 2023, videoId: "nhZ3GJcKU9A" },
];

export const bio = [
  "Avdrav builds songs the way a producer builds worlds: layering warm, harmonic vocals over shifting electronic terrain until the line between pop melody and ambient texture dissolves. The result sits somewhere between Kraftwerk's precision and The Postal Service's ache, filtered through a psychedelic lens entirely his own.",
  "The pandemic gave him the room to commit. Since 2020, Avdrav has released three albums, two EPs and a steady stream of singles, each one pushing further into the space where indie pop meets electronica. More material is already in motion.",
  "Based in Philadelphia, he carries the city's grit and generosity into his work: music that feels both meticulously crafted and wide open, atmospheric without being cold, adventurous without losing the hook.",
];
