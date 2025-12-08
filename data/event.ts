// data/event.ts

// --- 1. DEFINISI TIPE DATA ---
export interface EventData {
  id: number;
  title: string;
  subtitle: string;
  time: string;
  date: string;
  location: string;
  contact: string;
  description?: string; 
}

export interface EventSection {
  title: string;
  theme: string;
  text: string;
  items: EventData[];
}

// --- 2. DATA LENGKAP (6 ITEMS PER SECTION) ---
export const eventSections: EventSection[] = [
  {
    title: "What's new?",
    theme: "red", 
    text: "dark orange",
    items: [
      { 
        id: 1,
        title: "Teater Musical",
        subtitle: "Studi Spektra: The Musical by UI ArtX",
        time: "16:00 - 18:00 WIB",
        date: "25 & 27 Nov 2025",
        location: "Auditorium Pusgiwa",
        contact: "@chiaraprssty",
        description: "Join us for an unforgettable evening of music and drama as Studi Spektra presents their annual musical performance, showcasing the talents of UI ArtX students."
      },
      {
        id: 2,
        title: "Jazz Goes To Campus",
        subtitle: "The Oldest Jazz Festival",
        time: "13:00 - 23:00 WIB",
        date: "12 Des 2025",
        location: "FEB UI Park",
        contact: "@jgtcfestival",
        description: "Experience the soulful rhythms and vibrant performances at Jazz Goes To Campus, Indonesia's oldest jazz festival, featuring renowned artists and emerging talents."
      },
      {
        id: 3,
        title: "Gelar Karya 2025",
        subtitle: "Pameran Seni Tahunan anak anak Fasilkom UI",
        time: "10:00 - 20:00 WIB",
        date: "5-7 Des 2025",
        location: "Fasilkom UI",
        contact: "@gelarkarya_fasilkom",
        description: "Explore the creative works of Fasilkom UI students at Gelar Karya 2025, an annual art exhibition showcasing innovative projects and artistic expressions."
      },
      {
        id: 4,
        title: "Lorem Ipsum Festival",
        subtitle: "Festival Lorem Ipsum terbesar di Indonesia",
        time: "18:00 - 21:00 WIB",
        date: "15 Des 2025",
        location: "Lorem Ipsum Park",
        contact: "@LoremIpsumFest",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 10, 
        title: "Pekan Ristek Company Visit",
        subtitle: "Kunjungan Industri ke BCA",
        time: "12:00 - 15:00 WIB",
        date: "5 Desember 2025",
        location: "Menara BCA Thamrin",
        contact: "@pekanristek",
        description: "Kunjungan industri eksklusif untuk mahasiswa Fasilkom UI guna mempelajari infrastruktur IT perbankan modern."
      },
      {
        id: 11, 
        title: "UI Innovation Launch",
        subtitle: "Peluncuran Startup Mahasiswa",
        time: "09:00 - 12:00 WIB",
        date: "20 Desember 2025",
        location: "Balai Sidang UI",
        contact: "@ui_innovate",
        description: "Saksikan peluncuran 10 startup terpilih hasil inkubasi Dystopia UI yang siap bersaing di pasar global."
      }
    ]
  },
  {
    title: "Academic",
    theme: "orange",
    text: "dark red",
    items: [
      {
        id: 5,
        title: "Seminar Skripsi",
        subtitle: "Tips & Trik Lulus Tepat Waktu",
        time: "09:00 - 12:00 WIB",
        date: "10 Jan 2026",
        location: "Balairung UI",
        contact: "@bemui",
        description: "Join our Seminar Skripsi to gain valuable tips and tricks on how to successfully complete your thesis on time."
      },
      {
        id: 12,
        title: "Guest Lecture: AI Ethics",
        subtitle: "Masa Depan AI yang Bertanggung Jawab",
        time: "13:00 - 15:00 WIB",
        date: "12 Jan 2026",
        location: "Auditorium Fasilkom",
        contact: "@ristek_fasilkom",
        description: "Kuliah tamu spesial bersama pakar AI dari Google DeepMind membahas etika dalam pengembangan kecerdasan buatan."
      },
      {
        id: 13,
        title: "Workshop Python Data Science",
        subtitle: "Analisis Data untuk Pemula",
        time: "10:00 - 14:00 WIB",
        date: "15 Jan 2026",
        location: "Lab Komputer 1",
        contact: "@datascience_ui",
        description: "Pelajari dasar-dasar Python, Pandas, dan Matplotlib untuk memulai karirmu sebagai Data Scientist."
      },
      {
        id: 14,
        title: "UI Career Fair 2026",
        subtitle: "Job & Internship Expo",
        time: "09:00 - 17:00 WIB",
        date: "20-22 Jan 2026",
        location: "Balairung UI",
        contact: "@cdc_ui",
        description: "Temukan pekerjaan impianmu di UI Career Fair terbesar tahun ini. Dihadiri oleh lebih dari 50 perusahaan multinasional."
      },
      {
        id: 15,
        title: "Research Symposium",
        subtitle: "Publikasi Jurnal Internasional",
        time: "08:00 - 16:00 WIB",
        date: "25 Jan 2026",
        location: "Perpusat UI",
        contact: "@research_ui",
        description: "Simposium tahunan untuk membedah penelitian terbaru dari dosen dan mahasiswa pascasarjana UI."
      },
      {
        id: 16,
        title: "Public Speaking 101",
        subtitle: "Mastering Presentation Skills",
        time: "16:00 - 18:00 WIB",
        date: "28 Jan 2026",
        location: "Ruang 2101",
        contact: "@mapres_ui",
        description: "Tingkatkan kemampuan presentasi akademismu agar lebih percaya diri saat sidang skripsi."
      }
    ]
  },
  {
    title: "Scholarship",
    theme: "yellow",
    text: "dark green",
    items: [
      {
        id: 6,
        title: "IISMA Info Session",
        subtitle: "Study Abroad Opportunity",
        time: "09:00 - 11:00 WIB",
        date: "20 Feb 2026",
        location: "Zoom Meeting",
        contact: "@iisma_ri",
        description: "Discover exciting study abroad opportunities with the IISMA Info Session."
      },
      {
        id: 17,
        title: "LPDP Preparation Bootcamp",
        subtitle: "Siap Tembus Beasiswa LPDP",
        time: "08:00 - 12:00 WIB",
        date: "22 Feb 2026",
        location: "Aula Fakultas Hukum",
        contact: "@lpdp_awardee",
        description: "Bedah tuntas esai dan wawancara LPDP bersama para alumni awardee dari universitas top dunia."
      },
      {
        id: 18,
        title: "Beasiswa Bank Indonesia",
        subtitle: "Sosialisasi GenBI",
        time: "13:00 - 15:00 WIB",
        date: "25 Feb 2026",
        location: "Auditorium FEB",
        contact: "@genbi_ui",
        description: "Informasi pendaftaran beasiswa Bank Indonesia dan kesempatan bergabung dengan komunitas GenBI."
      },
      {
        id: 19,
        title: "Erasmus+ Roadshow",
        subtitle: "Kuliah Gratis di Eropa",
        time: "10:00 - 12:00 WIB",
        date: "1 Mar 2026",
        location: "Pusat Studi Eropa",
        contact: "@erasmus_eu",
        description: "Temukan peluang pertukaran pelajar dan S2 di berbagai negara Eropa dengan pendanaan penuh."
      },
      {
        id: 20,
        title: "Djarum Beasiswa Plus",
        subtitle: "Character Building Workshop",
        time: "09:00 - 16:00 WIB",
        date: "5 Mar 2026",
        location: "Hotel Bumi Wiyata",
        contact: "@beswan_djarum",
        description: "Bukan sekadar beasiswa, dapatkan pelatihan soft skills kepemimpinan dan kebangsaan."
      },
      {
        id: 21,
        title: "Global Korea Scholarship",
        subtitle: "Study in South Korea",
        time: "14:00 - 16:00 WIB",
        date: "10 Mar 2026",
        location: "Zoom Meeting",
        contact: "@korean_embassy",
        description: "Informasi lengkap mengenai GKS-U dan GKS-G untuk kamu yang bermimpi kuliah di Korea Selatan."
      }
    ]
  },
  {
    title: "Competition",
    theme: "green",
    text: "dark blue",
    items: [
      {
        id: 7,
        title: "Game Dev Competition",
        subtitle: "Create your own game and win prizes",
        time: "All Day",
        date: "1 Mar - 30 Apr 2026",
        location: "Online",
        contact: "@gamedevcomp",
        description: "Participate in the Game Dev Competition and showcase your game development skills."
      },
      {
        id: 22,
        title: "UI/UX Designathon",
        subtitle: "Redesigning Public Apps",
        time: "08:00 - 20:00 WIB",
        date: "15 Mar 2026",
        location: "Perpusat UI",
        contact: "@uxtoday",
        description: "Kompetisi desain UI/UX maraton selama 12 jam untuk memecahkan masalah aplikasi publik di Indonesia."
      },
      {
        id: 23,
        title: "Business Case Challenge",
        subtitle: "Solving Real World Problems",
        time: "09:00 - 17:00 WIB",
        date: "20 Mar 2026",
        location: "Auditorium FEB",
        contact: "@mss_febui",
        description: "Uji kemampuan analisis bisnis kamu dengan memecahkan kasus nyata dari perusahaan FMCG ternama."
      },
      {
        id: 24,
        title: "Capture The Flag (CTF)",
        subtitle: "Cyber Security Hacking Contest",
        time: "24 Hours",
        date: "25-26 Mar 2026",
        location: "Online Server",
        contact: "@comnet_ui",
        description: "Kompetisi keamanan siber tingkat nasional. Temukan celah keamanan dan kumpulkan bendera kemenangan."
      },
      {
        id: 25,
        title: "National Debate Championship",
        subtitle: "Lomba Debat Bahasa Inggris",
        time: "08:00 - 18:00 WIB",
        date: "1-3 Apr 2026",
        location: "Fakultas Hukum UI",
        contact: "@eds_ui",
        description: "Kompetisi debat parlementer Inggris bergengsi yang diikuti oleh universitas se-Indonesia."
      },
      {
        id: 26,
        title: "Short Movie Festival",
        subtitle: "Sinema Mahasiswa",
        time: "18:00 - 22:00 WIB",
        date: "10 Apr 2026",
        location: "Kineforum",
        contact: "@cinematography_ui",
        description: "Submit film pendek karyamu dan menangkan kesempatan screening eksklusif serta hadiah jutaan rupiah."
      }
    ]
  },
  {
    title: "Organizations",
    theme: "blue",
    text: "black",
    items: [
      {
        id: 8,
        title: "Open Recruitment RTC",
        subtitle: "Join the official student radio of UI",
        time: "10:00 - 16:00 WIB",
        date: "15-20 Mar 2026",
        location: "RTC UI Campus",
        contact: "@rtc_ui",
        description: "Become a part of RTC, the official student radio of UI. Join our open recruitment to explore opportunities."
      },
      {
        id: 27,
        title: "BEM UI Grand Launching",
        subtitle: "Kabinet Baru Semangat Baru",
        time: "16:00 - 19:00 WIB",
        date: "25 Mar 2026",
        location: "Balairung UI",
        contact: "@bemui_official",
        description: "Perkenalan fungsionaris dan program kerja BEM UI periode 2026. Mari bersinergi membangun UI."
      },
      {
        id: 28,
        title: "Mapala UI Open House",
        subtitle: "Pecinta Alam Berkumpul",
        time: "08:00 - 15:00 WIB",
        date: "28 Mar 2026",
        location: "Wall Climbing Mapala",
        contact: "@mapala_ui",
        description: "Coba wall climbing gratis dan saksikan pameran ekspedisi Mapala UI ke tujuh puncak dunia."
      },
      {
        id: 29,
        title: "Marching Band Madah Bahana",
        subtitle: "Open Recruitment Player",
        time: "16:00 - 18:00 WIB",
        date: "1 Apr 2026",
        location: "Rotunda UI",
        contact: "@mbui_official",
        description: "Bergabunglah dengan unit marching band kebanggaan UI. Tidak harus bisa alat musik, akan diajari dari nol!"
      },
      {
        id: 30,
        title: "AIESEC Info Session",
        subtitle: "Global Volunteer Program",
        time: "13:00 - 15:00 WIB",
        date: "5 Apr 2026",
        location: "Zoom Meeting",
        contact: "@aiesec_ui",
        description: "Dapatkan pengalaman kepemimpinan global melalui program exchange dan volunteer ke luar negeri."
      },
      {
        id: 31,
        title: "Robotics Team Demo Day",
        subtitle: "Pameran Robotika UI",
        time: "09:00 - 16:00 WIB",
        date: "10 Apr 2026",
        location: "Lobi Teknik",
        contact: "@tr_ui",
        description: "Saksikan demo robot sepak bola dan robot terbang karya tim robotika Universitas Indonesia."
      }
    ]
  },
  {
    title: "Events",
    theme: "pink",
    text: "dark red",
    items: [
      {
        id: 9,
        title: "Cultural Night",
        subtitle: "Experience diverse cultures through performances",
        time: "18:00 - 22:00 WIB",
        date: "25 Mar 2026",
        location: "Balairung UI",
        contact: "@culturalnight_ui"
      },
      {
        id: 32,
        title: "UI Fashion Week",
        subtitle: "Runway Show 2026",
        time: "19:00 - 22:00 WIB",
        date: "15 Apr 2026",
        location: "Mall Kuningan City",
        contact: "@uifashionweek",
        description: "Pekan mode terbesar yang diselenggarakan mahasiswa, menampilkan karya desainer muda berbakat."
      },
      {
        id: 33,
        title: "Charity Fun Run 5K",
        subtitle: "Lari Sambil Berbagi",
        time: "06:00 - 09:00 WIB",
        date: "20 Apr 2026",
        location: "Lingkar Kampus UI",
        contact: "@ui_runners",
        description: "Acara lari santai mengelilingi hutan UI yang asri. Seluruh keuntungan tiket didonasikan untuk beasiswa."
      },
      {
        id: 34,
        title: "Bedah Buku & Talkshow",
        subtitle: "Bersama Penulis Best Seller",
        time: "14:00 - 16:00 WIB",
        date: "25 Apr 2026",
        location: "Auditorium FIB",
        contact: "@klubliterasi",
        description: "Diskusi mendalam mengenai karya sastra terbaru bersama penulis ternama Indonesia."
      },
      {
        id: 35,
        title: "Standup Comedy Night",
        subtitle: "UI Lucu-Lucuan",
        time: "19:00 - 21:00 WIB",
        date: "1 Mei 2026",
        location: "Teater Kolam UI",
        contact: "@standup_ui",
        description: "Malam penuh tawa bersama komika-komika mahasiswa UI yang siap mengocok perutmu."
      },
      {
        id: 36,
        title: "Movie Screening: Interstellar",
        subtitle: "Layar Tancep Kampus",
        time: "19:30 - 22:30 WIB",
        date: "5 Mei 2026",
        location: "Lapangan Rotunda",
        contact: "@sinema_k kampus",
        description: "Nonton bareng film sci-fi legendaris di bawah bintang-bintang kampus UI. Bawa tikar sendiri!"
      }
    ]
  }
];