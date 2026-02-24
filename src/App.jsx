import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tabs from "./components/Tabs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="bg-transparent">
      <Navbar />
      <main>
        <Hero />
        <Tabs />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;