import { BsCodeSlash, BsDatabase, BsInstagram, BsGithub, BsLinkedin, BsDiscord } from "react-icons/bs";
import SertifikatMakrab from "../assets/Certificate/Sertifikat-Makrab.jpg";
import SertifikatInsevent from "../assets/Certificate/Sertifikat-INSEVENT-2024.jpg";
import SertifikatMubes from "../assets/Certificate/Sertifikat-Mubes-6.jpg";
import SertifikatUpgrading1 from "../assets/Certificate/Sertifikat-Upgrading-1-Inforsa.jpg";
import SertifikatUpgrading2 from "../assets/Certificate/Sertifikat-Upgrading-2-Inforsa.jpg";
import SertifikatUpgrading3 from "../assets/Certificate/Sertifikat-Upgrading-3-Inforsa.jpg";

export const navLinks = [
  { id: "tentang-saya", title: "Tentang Saya" },
  { id: "pengalaman", title: "Pengalaman" },
  { id: "sertifikat", title: "Sertifikat" },
  { id: "skills", title: "Keterampilan" },
  { id: "kontak", title: "Kontak" },
];

export const experiences = [
  {
    year: "2025 - Sekarang",
    title: "Lead of Cadre Formation Division at INFORSA",
    desc: "Menjadi Kepala Divisi Cadre Formation di dalam Departemen Human Resources Development di INFORSA Kabinet Cakrawira.",
  },
  {
    year: "2025",
    title: "Ketua Panitia UPGRADING BEM KM UNMUL",
    desc: "Menjadi Ketua Panitia UPGRADING BEM KM UNMUL Kabinet Adhikarsa.",
  },
  {
    year: "2024",
    title: "Ketua Panitia Musyawarah Besar 6 INFORSA",
    desc: "Menjadi Ketua Panitia Pelaksana Musyawarah Besar 6 INFORSA.",
  },
  {
    year: "2024 - Sekarang",
    title: "Staff KPOSDM BEM KM UNMUL",
    desc: "Menjadi Staff Kementerian Kaderisasi, Pengembangan Organisasi & Sumber Daya Mahasiswa BEM KM UNMUL Kabinet Adhikarsa.",
  },
  {
    year: "2024",
    title: "Staff KPSDM INFORSA",
    desc: "Menjadi Staff Departemen Kaderisasi dan Pengembangan Sumber Daya Mahasiswa INFORSA Kabinet Akasaraya.",
  },
  {
    year: "2023",
    title: "Ketua Panitia Malam Keakraban",
    desc: "Menjadi Ketua Panitia Malam Keakraban Mahasiswa Sistem Informasi Tahun 2023.",
  },
  {
    year: "2018 - 2019",
    title: "Staff Organisasi Intra Sekolah",
    desc: "Menjadi Staff OSIS bagian Hubungan Masyarakat.",
  }
];

export const certificates = [
  { img: SertifikatMakrab, title: "Sertifikat Malam Keakraban", year: "2023" },
  { img: SertifikatInsevent, title: "Sertifikat INSEVENT", year: "2024" },
  { img: SertifikatMubes, title: "Sertifikat Musyawarah Besar", year: "2025" },
  { img: SertifikatUpgrading1, title: "Sertifikat Upgrading I INFORSA", year: "2024" },
  { img: SertifikatUpgrading2, title: "Sertifikat Upgrading II INFORSA", year: "2024" },
  { img: SertifikatUpgrading3, title: "Sertifikat Upgrading III INFORSA", year: "2024" },
];

export const skills = [
  { icon: <BsCodeSlash className="text-5xl text-[#fcff33] mb-4 mx-auto" />, title: "Web Development", desc: "HTML, CSS, JavaScript, React, Tailwind" },
  { icon: <BsDatabase className="text-5xl text-[#fcff33] mb-4 mx-auto" />, title: "Database Management", desc: "MySQL, PostgreSQL" },
  { icon: <BsGithub className="text-5xl text-[#fcff33] mb-4 mx-auto" />, title: "Version Control", desc: "Git, GitHub" },
];

export const socials = [
  { id: "instagram", icon: <BsInstagram />, label: "Instagram", url: "https://instagram.com/esrasiregar" },
  { id: "github", icon: <BsGithub />, label: "GitHub", url: "https://github.com/esrasiregar" },
  { id: "linkedin", icon: <BsLinkedin />, label: "LinkedIn", url: "https://www.linkedin.com/in/esra-fernanda-siregar-15271229a/" },
  { id: "discord", icon: <BsDiscord />, label: "Discord", url: "https://discordapp.com/users/esrasiregar" },
];