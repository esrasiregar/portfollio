import { experiences } from "../utils/data";

const Experience = () => {
  if (experiences.length === 0) {
    return (
      <section id="experience" className="py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="mb-8 text-4xl font-black md:text-5xl" style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.7)" }}>
            Academic Experiences
          </h3>
          <div className="rounded-4xl border border-white/10 bg-gray-900/40 px-6 py-12 backdrop-blur-sm shadow-[0_0_18px_rgba(0,183,255,0.14)]">
            <p className="text-xl font-bold text-[#fcff33]" style={{ textShadow: "0 0 8px rgba(252,255,51,0.35)" }}>
              Konten academic experience akan ditambahkan di sini.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-gray-300">
              Tab ini sudah siap untuk menampilkan pengalaman seputar akademik seperti proyek kuliah, pencapaian, riset, atau kegiatan pembelajaran lainnya.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-20 text-white">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl md:text-5xl font-black text-center mb-12" style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.7)" }}>Academic Experiences</h3>
        <div className="max-w-4xl mx-auto relative border-l-4 border-cyan-400/85 ml-4 md:ml-auto md:mr-auto">
          {experiences.map((exp) => (
            <div key={`${exp.year}-${exp.title}`} className="group relative pl-8 mb-10">
              <div className="absolute -left-3.5 top-1 w-6 h-6 rounded-full border-4 border-[#fcff33] bg-gray-900 transition duration-300 group-hover:shadow-[0_0_14px_rgba(252,255,51,0.85)]"></div>
              <div className="rounded-lg border border-cyan-400/20 bg-gray-900/50 p-6 backdrop-blur-sm transition duration-300 hover:bg-gray-800/60 hover:shadow-[0_0_20px_rgba(0,183,255,0.4)]">
                <h5 className="font-bold text-lg mb-1">{exp.year}</h5>
                <h4 className="mb-2 text-xl font-bold text-[#fcff33] transition duration-300 group-hover:drop-shadow-[0_0_8px_rgba(252,255,51,0.8)]">{exp.title}</h4>
                <p className="text-gray-300">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
