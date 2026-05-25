import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustBlocks } from "./components/TrustBlocks";
import { Menu } from "./components/Menu";
import { MarketPrices } from "./components/MarketPrices";
import { About } from "./components/About";
import { Awards } from "./components/Awards";
import { Reviews } from "./components/Reviews";
import { LocationHours } from "./components/LocationHours";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { useActiveSection } from "./hooks/useActiveSection";

function App() {
  useActiveSection();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBlocks />
        <Awards />
        <Menu />
        <MarketPrices />
        <About />
        <Reviews />
        <LocationHours />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
