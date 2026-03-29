import { useEffect, useState } from "react";
import { BsList, BsX } from "react-icons/bs";
import { navLinks } from "../utils/data";

const HEADER_OFFSET = 96;
const tabLinkById = {
  projects: "projects",
  skills: "skills",
  experience: "experience",
  organization: "organization",
};

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);

  if (!section) {
    return;
  }

  const top = section.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

  window.scrollTo({
    top: Math.max(top, 0),
    behavior: "smooth",
  });
};

const Navbar = ({ activeTab, onTabChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(() => {
    const currentHash = window.location.hash.replace("#", "");

    return currentHash || "tentang-saya";
  });

  useEffect(() => {
    const updateActiveLink = () => {
      const heroSection = document.getElementById("tentang-saya");
      const portfolioSection = document.getElementById("portfolio");
      const contactSection = document.getElementById("kontak");
      const scrollPosition = window.scrollY + HEADER_OFFSET + 24;

      if (contactSection && scrollPosition >= contactSection.offsetTop) {
        setActiveLink("kontak");
        return;
      }

      if (
        portfolioSection &&
        scrollPosition >= portfolioSection.offsetTop &&
        (!contactSection || scrollPosition < contactSection.offsetTop)
      ) {
        setActiveLink(tabLinkById[activeTab] ?? "experience");
        return;
      }

      if (heroSection) {
        setActiveLink("tentang-saya");
      }
    };

    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink, { passive: true });
    window.addEventListener("resize", updateActiveLink);

    return () => {
      window.removeEventListener("scroll", updateActiveLink);
      window.removeEventListener("resize", updateActiveLink);
    };
  }, [activeTab]);

  const handleNavigation = (link) => {
    setActiveLink(link.id);

    if (link.tab) {
      onTabChange(link.tab);
      window.history.replaceState(null, "", `#${link.id}`);

      window.requestAnimationFrame(() => {
        scrollToSection(link.sectionId);
      });
    } else {
      window.history.replaceState(null, "", `#${link.sectionId}`);
      scrollToSection(link.sectionId);
    }

    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 px-4 pt-4 md:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-slate-950/72 px-5 py-3 shadow-[0_18px_60px_rgba(3,8,20,0.45)] backdrop-blur-xl md:px-7">
        <a href="#tentang-saya" onClick={(event) => {
          event.preventDefault();
          handleNavigation(navLinks[0]);
        }} className="flex items-center gap-3 text-white">
          <div>
            <h2 className="text-lg font-black tracking-[0.24em] text-white md:text-xl">Esra F. Siregar</h2>
          </div>
        </a>

        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(event) => {
                event.preventDefault();
                handleNavigation(link);
              }}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                activeLink === link.id
                  ? "bg-[#fcff33] text-slate-950 shadow-[0_16px_30px_rgba(252,255,51,0.18)]"
                  : "text-white/78 hover:bg-white/6 hover:text-[#fcff33] hover:shadow-[0_0_24px_rgba(252,255,51,0.14)]"
              }`}
            >
              {link.title}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          className="rounded-full border border-white/10 bg-white/5 p-2 text-3xl text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <BsX /> : <BsList />}
        </button>
      </div>

      {isOpen && (
        <nav id="mobile-menu" className="mx-auto mt-3 flex max-w-6xl flex-col gap-2 rounded-4xl border border-white/10 bg-slate-950/92 px-5 py-5 shadow-[0_18px_60px_rgba(3,8,20,0.45)] backdrop-blur-xl lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(event) => {
                event.preventDefault();
                handleNavigation(link);
              }}
              className={`rounded-2xl border px-4 py-3 text-base font-semibold transition-all duration-300 ${
                activeLink === link.id
                  ? "border-[#fcff33]/60 bg-[#fcff33]/10 text-[#fcff33]"
                  : "border-transparent text-white/85 hover:border-cyan-300/30 hover:bg-white/5 hover:text-[#fcff33]"
              }`}
            >
              {link.title}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
