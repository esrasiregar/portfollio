import { experiences } from "../utils/data";

const Experience = () => {
  return (
    <section id="pengalaman" className="py-20 text-white">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl md:text-5xl font-black text-center mb-12" style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.7)" }}>Pengalaman Organisasi</h3>
        <div className="max-w-4xl mx-auto relative border-l-4 border-cyan-400 ml-4 md:ml-auto md:mr-auto" style={{ filter: "drop-shadow(0 0 8px #00b7ff)" }}>
          {experiences.map((exp) => (
            <div key={`${exp.year}-${exp.title}`} className="relative pl-8 mb-10">
              <div className="absolute -left-3.5 top-1 w-6 h-6 bg-gray-900 border-4 border-[#fcff33] rounded-full" style={{ boxShadow: "0 0 12px #fcff33" }}></div>
              <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/60 transition duration-300 shadow-[0_0_15px_rgba(0,183,255,0.2)] hover:shadow-[0_0_20px_rgba(0,183,255,0.4)]">
                <h5 className="font-bold text-lg mb-1">{exp.year}</h5>
                <h4 className="text-xl font-bold text-[#fcff33] mb-2" style={{ textShadow: "0 0 8px #fcff33" }}>{exp.title}</h4>
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
