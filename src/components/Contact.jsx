import { socials } from "../utils/data";
import SetupImage from "../assets/Images/setup.jpeg";

const Contact = () => {
  return (
    <section id="kontak" className="min-h-screen py-20 text-white flex items-center">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-6xl md:text-7xl font-black leading-tight mb-4" style={{ textShadow: "0 0 12px rgba(255, 255, 255, 0.7)" }}>
            Let&apos;s <br /> Get In Touch
          </h1>
          <p className="text-lg mb-8 text-gray-300">
            Silakan menghubungi saya apabila ada pertanyaan atau sekadar menyapa.
          </p>
          <h5 className="font-bold text-xl mb-6 text-[#fcff33]" style={{ textShadow: "0 0 8px #fcff33" }}>esrafernanda2@gmail.com</h5>
          
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="w-16 h-16 bg-gray-900/50 text-cyan-400 text-3xl flex justify-center items-center rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(0,183,255,0.3)] hover:shadow-[0_0_25px_rgba(0,183,255,0.6)] hover:text-[#fcff33] hover:-translate-y-1"
                style={{ filter: "drop-shadow(0 0 8px #00b7ff)" }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end">
          <div className="w-70 sm:w-[320px] md:w-87.5 h-[70vh] rounded-[40px] overflow-hidden group transition-all duration-500" style={{ boxShadow: "0 0 20px -5px rgba(255, 255, 255, 0.5)" }}>
            <img
              src={SetupImage}
              alt="Setup Workspace"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
