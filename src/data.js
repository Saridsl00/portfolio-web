// ====== SEMUA DATA DIEDIT DI SINI (diambil dari portofolio lama) ======
export const profile = {
  name: "Sari Dosma Santa Lusi Manullang",
  role: "Information Systems Student",
  skillsLine: "Laravel | MySQL | Figma | Flutter",
  email: "saridslmanullang@gmail.com", // GANTI dengan emailmu
  city: "Indonesia",
    bio: "Mahasiswa Sistem Informasi semester 7 yang suka banget dengan dunia IT dan inovasi digital. Sudah terbiasa membuat aplikasi web dan mobile, mendesain tampilan di Figma, dan mengelola database lewat berbagai proyek kuliah. Tertarik di bidang System Analyst, software development, quality assurance, dan teknologi yang berfokus pada pengguna. Terus belajar hal baru dan berusaha mengasah kemampuan teknis serta problem solving supaya bisa membuat solusi digital yang bermanfaat.",
  socials: [
    { alt: "Instagram", icon: "/social/instagram.png", web: "https://www.instagram.com/saridsl.m/", app: "instagram://user?username=saridsl.m" },
    { alt: "TikTok", icon: "/social/tiktok.png", web: "https://www.tiktok.com/@usernameimu", app: "snssdk1128://user/profile/usernameimu" },
    { alt: "GitHub", icon: "/social/github.jpg", web: "https://github.com/Saridsl00", app: "github://user?username=Saridsl00" },
    { alt: "YouTube", icon: "/social/youtube.png", web: "https://youtube.com/@saridosmasantalusi", app: "vnd.youtube://channel/saridosmasantalusi" },
  ],
};

// Kunci EmailJS (public key memang boleh ada di frontend)
export const emailjs = { service: "service_d35x4t4", template: "template_t23954b", key: "rJuMt6il-zgTx68_m" };

export const navLinks = [
  ["Tentang", "#tentang"], ["Pengalaman", "#pengalaman"], ["Proyek", "#proyek"],
  ["Skill", "#skill"], ["Sertifikat", "#sertifikat"], ["Kontak", "#kontak"],
];


export const stats = [
  { to: 7, label: "Semester Sistem Informasi", suffix: "" },
  { to: 5, label: "Proyek", suffix: "" },
  { to: 3, label: "Sertifikat", suffix: "" },
  { to: 9, label: "Skill & tools", suffix: "" },
];

export const services = [
  { t: "Web Development", d: "Sistem informasi berbasis Laravel dan MySQL yang responsif.", p: "M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" },
  { t: "Mobile Development", d: "Aplikasi mobile menggunakan Flutter.", p: "M7 2h10a1 1 0 011 1v18a1 1 0 01-1 1H7a1 1 0 01-1-1V3a1 1 0 011-1zM11 18h2" },
  { t: "UI/UX Design", d: "Wireframe, alur pengguna, dan prototipe interaktif di Figma.", p: "M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12v9M12 12L4 7.5" },
  { t: "Database", d: "Perancangan ERD, relasi tabel, hak akses, dan backup MySQL.", p: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" },
  { t: "System Analyst", d: "Menganalisis kebutuhan, memodelkan alur proses (ERD, use case), dan merancang solusi sistem.", p: "M3 3h7v6H3zM14 15h7v6h-7zM6.5 9v3.5a2 2 0 002 2H14" },
  { t: "Quality Assurance", d: "Menguji aplikasi, menemukan bug, dan memastikan kualitas sebelum dirilis.", p: "M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6zM8.5 12l2.5 2.5 4.5-5" },
];

export const projects = [
  { name: "Dious Donuts", image: "/projects/dious-donuts.png", tags: ["Laravel", "PHP", "MySQL", "HTML", "CSS"],
    desc: "Sistem informasi penjualan toko donat berbasis Laravel yang dilengkapi fitur manajemen produk, transaksi, dan laporan, serta tampilan frontend yang responsif dan user-friendly.",
    github: "https://github.com/Saridsl00/DiousDonuts.git", demo: "" },
  { name: "Melodi Event Organizer (Desktop)", image: "/projects/melodi-desktop.png", tags: ["Figma"],
    desc: "UI/UX untuk sistem pemesanan event organizer menggunakan Figma. Membuat wireframe, alur pengguna, prototipe interaktif, dan desain antarmuka untuk fitur pemesanan, manajemen paket, dan dasbor pengguna.",
    github: "", demo: "https://www.figma.com/proto/52JF40Yjz0itQ4R3pNLRaq/melodi-design?node-id=52-10&t=nwIQ194whbU8ukOh-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=483%3A503&show-proto-sidebar=1" },
  { name: "Database Administrator", image: "/projects/database.png", tags: ["MySQL"],
    desc: "Sistem basis data inventaris gudang dengan MySQL untuk sertifikasi kompetensi BNSP Database Administrator: ERD dan LRS, tabel relasional, CRUD, hak akses pengguna, laporan inventaris, dan backup dengan mysqldump.",
    github: "", demo: "https://drive.google.com/drive/folders/15Q2-gjvOSY4zvCOTXG6pmBjXo1Y1mmJN?usp=sharing" },
  { name: "Melodi Event Organizer (Mobile)", image: "/projects/melodi-mobile.png", tags: ["Figma"],
    desc: "Desain UI/UX versi mobile untuk sistem pemesanan Melodi Event Organizer menggunakan Figma.",
    github: "", demo: "https://www.figma.com/proto/PDkUMTKIpaOIMLozF2eWCq/Untitled?node-id=1-2&t=ygu5rJiqDibxNoY4-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1" },
    { name: "Duratec Power Indonesia", image: "/projects/dpoweri.png", tags: ["Website", "Company Profile"],
    desc: "Website company profile Duratec Power Indonesia yang menampilkan produk air compressor, air dryer, dan N2 generator, serta layanan service dan parts.",
    github: "", demo: "https://dpoweri.co.id/" },
  { name: "Petrodyn", image: "/projects/petrodyn.png", tags: ["Website", "Company Profile"],
    desc: "Website company profile PT Petrotec Rekayasa Dinamika, perusahaan penyedia paket kompresor engineering. Memuat produk, klien, layanan, serta berita dan event.",
    github: "", demo: "https://petrodyn.co.id/" },
  { name: "Office Product Calendar 2027", image: "/projects/kalender.png", tags: ["Figma", "Graphic Design"],
    desc: "Desain kalender produk kantor 2027 yang dibuat menggunakan Figma.",
    github: "", demo: "https://www.figma.com/design/sZG9YhFtV4s8cQSWGkHt9i/Office-Product-Calendar-2027?node-id=0-1&t=zppgaYjjPgNMmAYU-1" },
  { name: "Meal Goods", image: "/projects/meal-goods.png", tags: ["Figma"],
    desc: "Prototipe desain antarmuka Meal Goods menggunakan Figma.",
    github: "", demo: "https://www.figma.com/proto/YLfsQ9gEHXLiiCWhCNZhgB/Untitled?node-id=1-3&t=cIlgLfRnFH0ITzxl-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3" },
];

export const certificates = [
  { title: "Uji Kompetensi Basis Data", issuer: "PT Jidoka System Indonesia", file: "/certificates/JIDOKA.pdf", thumb: "/certificates/JIDOKA.jpg" },
  { title: "Seminar Kompetensi Database Administrator", issuer: "Badan Nasional Sertifikasi Profesi", file: "/certificates/SERKOM.pdf", thumb: "/certificates/SERKOM.jpg" },
  { title: "IT Bootcamp Software Development For Industry", issuer: "Bina Sarana Informatika University", file: "/certificates/BOOTCAMP.pdf", thumb: "/certificates/BOOTCAMP.jpg" },
];

export const skills = [
  { name: "Laravel", icon: "/skills/laravel.png", level: 95 },
  { name: "MySQL", icon: "/skills/mysql.png", level: 95 },
  { name: "Figma", icon: "/skills/figma.png", level: 90 },
  { name: "Flutter", icon: "/skills/flutter.png", level: 88 },
  { name: "HTML", icon: "/skills/html.png", level: 85 },
  { name: "CSS", icon: "/skills/css.png", level: 85 },
  { name: "JavaScript", icon: "/skills/js.png", level: 85 },
  { name: "Python", icon: "/skills/python.png", level: 85 },
  { name: "React", icon: "/skills/react.png", level: 40 },
];

export const steps = [
  ["Discover", "Memahami tujuan, audiens, dan kebutuhan."],
  ["Design", "Membuat wireframe dan visual yang komunikatif."],
  ["Develop", "Membangun solusi yang bersih dan responsif."],
  ["Deliver", "Menguji, mengoptimalkan, dan meluncurkan."],
];


export const experiences = [
  {
    role: "Fullstack Developer Intern",
    company: "Nama Perusahaan", // ✏️ GANTI dengan nama perusahaanmu
    type: "Magang",
    period: "Agustus 2026 – November 2026",
    points: [
      "Membuat website dari awal, mulai dari tampilan (frontend) sampai sisi backend.",
      "Memperbaiki dan merawat website yang sudah ada, seperti bug, tampilan, dan performa.",
      "Mendesain kalender 2027 menggunakan Figma.",
    ],
    tags: ["Fullstack", "Website", "Figma"],
  },
];