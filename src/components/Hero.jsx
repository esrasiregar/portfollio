import ProfileImage from "../assets/Images/regar-image.png";

const Hero = () => {
  return (
    <section id="tentang-saya" className="min-h-screen pt-24 pb-12 text-white flex items-center">
      <div className="mx-auto grid w-full max-w-8xl items-center gap-14 px-8 sm:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-16 xl:px-20 2xl:px-24">
        <div className="max-w-3xl">
          <h5 className="font-bold text-2xl" style={{ textShadow: "0 0 8px rgba(255, 255, 255, 0.5)" }}>ESRA FERNANDA SIREGAR</h5>
          <h1 className="my-4 text-5xl font-black leading-[0.95] text-[#fcff33] md:text-6xl" style={{ textShadow: "0 0 12px #fcff33" }}>Website Developer</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl md:leading-[1.55]">
            Halo, perkenalkan saya Esra Fernanda Siregar, seorang mahasiswa Sistem Informasi dari Universitas Mulawarman yang memiliki minat dalam mengembangkan diri di dunia Website Development. Saya memiliki ketertarikan dan ingin terus mengasah keterampilan saya dalam bidang ini.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="group h-[70vh] w-70 overflow-hidden rounded-[40px] sm:w-[320px] md:w-88 lg:w-[24rem] transition-all duration-500" style={{ boxShadow: "0 0 20px -5px rgba(255, 255, 255, 0.5)" }}>
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
