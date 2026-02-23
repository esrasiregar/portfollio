import { useState } from "react";
import { BsList, BsX } from "react-icons/bs";
import { navLinks } from "../utils/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0f0f0f] shadow-[0_0_15px_rgba(0,183,255,0.4)]">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-black text-white flex items-center gap-3" style={{ textShadow: "0 0 10px #00b7ff" }}>
          <h2 className="my-auto">SIREGAR</h2>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-6 font-bold">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="text-white transition-all duration-300 hover:text-[#fcff33] hover:drop-shadow-[0_0_8px_#fcff33]">
              {link.title}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          className="lg:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <BsX /> : <BsList />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <nav id="mobile-menu" className="lg:hidden bg-[#0f0f0f] border-t border-gray-800 flex flex-col px-6 py-4 gap-4 font-bold">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`} 
              onClick={() => setIsOpen(false)}
              className="text-white transition-all duration-300 hover:text-[#fcff33] hover:drop-shadow-[0_0_8px_#fcff33]"
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
