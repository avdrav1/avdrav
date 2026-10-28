import { PlayerProvider } from "./player";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Releases from "./components/Releases";
import Tracks from "./components/Tracks";
import About from "./components/About";
import Footer from "./components/Footer";
import Player from "./components/Player";

export default function App() {
  return (
    <PlayerProvider>
      <Header />
      <main>
        <Hero />
        <Releases />
        <Tracks />
        <About />
      </main>
      <Footer />
      <Player />
    </PlayerProvider>
  );
}
