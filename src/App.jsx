import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tabs from "./components/Tabs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundEffects from "./components/BackgroundEffects";
import { Analytics } from "@vercel/analytics/react";

const tabHashes = {
  pengalaman: "experience",
  experience: "experience",
  projects: "projects",
  skills: "skills",
  organization: "organization",
};

function App() {
  const [activeTab, setActiveTab] = useState(() => {
    const currentHash = window.location.hash.replace("#", "");

    return tabHashes[currentHash] ?? "projects";
  });

  return (
    <div className="relative isolate min-h-screen bg-transparent">
      <BackgroundEffects />
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <main>
        <Hero />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
