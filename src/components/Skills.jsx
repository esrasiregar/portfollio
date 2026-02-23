import { BsDatabase, BsGithub } from "react-icons/bs";
import { FaJava } from "react-icons/fa6";
import {
  SiBootstrap,
  SiCanva,
  SiCss3,
  SiExpress,
  SiFigma,
  SiGit,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiNotion,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiVuedotjs,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillRows = [
  {
    category: "Language",
    items: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
      { name: "Java", icon: FaJava },
    ],
  },
  {
    category: "Framework",
    items: [
      { name: "React", icon: SiReact },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Laravel", icon: SiLaravel },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Node.js", icon: SiNodedotjs },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Supabase", icon: SiSupabase },
      { name: "SQL Server", icon: BsDatabase },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: BsGithub },
      { name: "GitLab", icon: SiGitlab },
      { name: "VS Code", icon: VscVscode },
      { name: "Figma", icon: SiFigma },
      { name: "Postman", icon: SiPostman },
      { name: "Canva", icon: SiCanva },
      { name: "Notion", icon: SiNotion },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 text-white">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl md:text-5xl font-black text-center mb-12" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.7)' }}>
          Skills & Tools
        </h3>
        <div className="max-w-5xl mx-auto flex flex-col gap-5">
          {skillRows.map((row) => (
            <div
              key={row.category}
              className="bg-gray-900/50 p-5 md:p-6 rounded-xl backdrop-blur-sm shadow-[0_0_15px_rgba(0,183,255,0.2)]"
            >
              <h4
                className="text-xl md:text-2xl font-bold text-[#fcff33] mb-4 text-center"
                style={{ textShadow: "0 0 8px #fcff33" }}
              >
                {row.category}
              </h4>
              <div className="flex flex-wrap gap-3 justify-center">
                {row.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <span
                      key={item.name}
                      title={item.name}
                      aria-label={item.name}
                      className="group w-12 h-12 rounded-full bg-black/40 border border-cyan-400/50 text-white hover:text-[#fcff33] flex items-center justify-center text-2xl shadow-[0_0_10px_rgba(34,211,238,0.45)] hover:shadow-[0_0_18px_rgba(34,211,238,0.9)] hover:border-cyan-300 transition-all duration-300"
                    >
                      <Icon className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(252,255,51,0.95)]" />
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
