import ProfileImage from "../assets/Images/regar-image.png";

const Hero = () => {
  return (
    <section id="tentang-saya" className="min-h-screen pt-24 pb-12 text-white flex items-center">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h5 className="font-bold text-2xl" style={{ textShadow: "0 0 8px rgba(255, 255, 255, 0.5)" }}>ESRA FERNANDA SIREGAR</h5>
          <h1 className="text-5xl md:text-7xl font-black text-[#fcff33] my-4" style={{ textShadow: "0 0 12px #fcff33" }}>Website Developer</h1>
          <p className="text-lg leading-relaxed text-gray-300">
            Halo, perkenalkan saya Esra Fernanda Siregar, seorang mahasiswa Sistem Informasi dari Universitas Mulawarman yang memiliki minat dalam mengembangkan diri di dunia Website Development. Saya memiliki ketertarikan dan ingin terus mengasah keterampilan saya dalam bidang ini.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-70 sm:w-[320px] md:w-87.5 h-[70vh] rounded-[40px] overflow-hidden group transition-all duration-500" style={{ boxShadow: "0 0 20px -5px rgba(255, 255, 255, 0.5)" }}>
            <img
              src={ProfileImage}
              alt="Esra Fernanda Siregar"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
