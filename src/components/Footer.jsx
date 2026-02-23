import { navLinks, socials } from "../utils/data";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white py-12 shadow-[0_-5px_15px_-5px_rgba(0,183,255,0.2)]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-cyan-400/30 pb-8">
          <div>
            <h5 className="font-bold text-xl mb-4 text-[#fcff33]" style={{ textShadow: "0 0 6px #fcff33" }}>Esra Fernanda Siregar</h5>
            <p className="text-gray-400">
              Mahasiswa Sistem Informasi Universitas Mulawarman dengan fokus pada Website Development.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-xl mb-4" style={{ textShadow: "0 0 8px rgba(255,255,255,0.6)" }}>Navigasi</h5>
            <ul className="flex flex-col gap-2 text-gray-400">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="transition-all duration-300 hover:text-[#fcff33] hover:drop-shadow-[0_0_5px_#fcff33]">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-xl mb-4" style={{ textShadow: "0 0 8px rgba(255,255,255,0.6)" }}>Terhubung</h5>
            <div className="flex flex-col gap-3 text-gray-400">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 transition-all duration-300 hover:text-[#fcff33] w-fit"
                >
                  <span className="text-xl transition-all duration-300 group-hover:text-[#fcff33]">{social.icon}</span>
                  <span className="transition-all duration-300 group-hover:drop-shadow-[0_0_5px_#fcff33]">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-500" style={{ textShadow: "0 0 4px rgba(255,255,255,0.2)" }}>
          <p>&copy; {new Date().getFullYear()} - Esra Fernanda Siregar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
