import animeIcon from "../assets/icons/anime.svg";
import gamingIcon from "../assets/icons/game.svg";
import codingIcon from "../assets/icons/coding.svg";
import designIcon from "../assets/icons/design.svg";
import kotlinIcon from "../assets/icons/kotlin.svg";
import javaIcon from "../assets/icons/java.svg";
import xmlIcon from "../assets/icons/xml.svg";
import htmlIcon from "../assets/icons/html.svg";
import cssIcon from "../assets/icons/css.svg";
import jsIcon from "../assets/icons/js.svg";
import figmaIcon from "../assets/icons/figma.svg";
import photoshopIcon from "../assets/icons/ps.svg";
import canvaIcon from "../assets/icons/canva.svg";
import boxIcon from "../assets/icons/box.svg";
import excelIcon from "../assets/icons/excel.svg";
import troubleshootingIcon from "../assets/icons/tools.svg";
import indoIcon from "../assets/icons/indo.svg";
import engIcon from "../assets/icons/us.svg";
import japanIcon from "../assets/icons/japan.svg";
import koreanIcon from "../assets/icons/korea.svg";

const checkmarkIcon = `<svg class="me-1.5 h-6 w-6 text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`;

const interest = [
  { name: "Anime", icon: animeIcon },
  { name: "Gaming", icon: gamingIcon },
  { name: "Coding", icon: codingIcon },
  { name: "Design", icon: designIcon },
];

const skills = {
  programmingLanguages: [
    {
      icons: [kotlinIcon, javaIcon, xmlIcon, htmlIcon, cssIcon, jsIcon],
      description:
        "Menguasai pengembangan aplikasi Android menggunakan Kotlin, Java, dan XML, serta dasar web dengan HTML, CSS, dan JavaScript. Fokus pada clean code, UI rapi, dan pengalaman pengguna yang nyaman.",
    },
  ],
  designs: [
    {
      icons: [figmaIcon, photoshopIcon, canvaIcon],
      description:
        "Terbiasa menggunakan Figma, Photoshop, dan Canva untuk desain UI, prototyping, dan kebutuhan visual dengan pendekatan fungsional dan estetis.",
    },
  ],
  others: [
    {
      icons: [excelIcon, boxIcon, troubleshootingIcon],
      description:
        "Berpengalaman dalam administrasi gudang meliputi pencatatan stok, barang masuk–keluar, dan pembuatan laporan menggunakan Microsoft Excel, serta terbiasa melakukan troubleshooting komputer dan perangkat operasional.",
    },
  ],
};

const languages = [
  { name: "Indonesian", icon: indoIcon, level: "95%" },
  { name: "English", icon: engIcon, level: "75%" },
  { name: "Japanese", icon: japanIcon, level: "40%" },
  { name: "Korean", icon: koreanIcon, level: "20%" },
];

const edu = [
  { school: "MI AL FALAH", grade: "Elementary School", year: "2015" },
  { school: "MTsN 2 BREBES", grade: "Junior High School", year: "2018" },
  { school: "SMK N 1 BREBES", grade: "Teknik Komputer Jaringan", year: "2021" },
];

const workExperience = {
  company: "PT Danendra Paksi Ababil",
  subtitle: "Nyongkon Accessories",
  period: "2023 - 2026",
  roles: [
    {
      title: "Crew Store",
      responsibilities: [
        "Memberikan pelayanan pelanggan secara ramah, cepat, dan solutif untuk meningkatkan kepuasan pelanggan.",
        "Menata dan menjaga kerapihan display produk sesuai standar visual merchandising, serta memastikan area kerja selalu bersih dan nyaman.",
        "Melakukan pencatatan dan pengecekan stok barang secara berkala, termasuk handling barang reject/rusak sesuai prosedur.",
        "Mengoperasikan mesin kasir (POS), memproses transaksi pembayaran, dan memastikan akurasi data penjualan harian.",
      ],
    },
    {
      title: "Staff IT",
      responsibilities: [
        "Menyusun dan memantau laporan penjualan serta rekap stok barang secara berkala untuk mendukung pengambilan keputusan operasional.",
        "Melakukan input, pembaruan, dan validasi data barang pada sistem agar data selalu akurat dan up to date.",
        "Mencatat dan mengontrol barang masuk–keluar (penerimaan, pengeluaran, retur) serta memastikan kesesuaian data dengan stok fisik.",
        "Mengelola stok gudang, termasuk pengecekan rutin, penataan, dan koordinasi kebutuhan stok dengan tim terkait.",
        "Menangani troubleshooting perangkat komputer/jaringan/aplikasi dasar, termasuk instalasi, konfigurasi, dan dukungan teknis untuk karyawan.",
      ],
    },
  ],
};

export default function About() {
  return (
    <section
      id="about"
      className="mb-40 flex w-full scroll-mt-15 flex-col items-center justify-center lg:scroll-mt-30"
    >
      <h2 className="mb-8 self-center text-4xl font-black">About Me</h2>
      <div className="flex w-full md:w-min lg:w-min px-4 lg:px-0 flex-col gap-6">
        <div id="box-a" className="flex lg:flex-row items-center flex-col h-fit lg:w-min gap-6">
          {/* <!-- avatar --> */}
          <div className="h-auto lg:w-[320px] w-[256px] shrink-0">
            <img
              className="rounded-container size-full object-cover"
              src="src/assets/img/avatar.png"
              alt="Avatar"
            />
          </div>

          {/* <!-- right --> */}
          <div className="flex flex-col gap-6">
            {/* <!-- bio --> */}
            <p
              className="bg-container rounded-container border-con_outline flex flex-1 items-center
                  justify-center border p-5 lg:p-6 text-xl lg:text-2xl"
            >
              I am an individual with a passion for technology and design. I have experience in
              administration and IT support, accustomed to working with data, systems, and visuals.
              I am highly motivated to learn, responsible, and able to work both independently and
              in a team.
            </p>

            {/* <!-- interest --> */}
            <div
              className="bg-container rounded-container border-con_outline hidden md:flex lg:flex
                  w-fit items-center border py-4 pr-4"
            >
              <p className="pl-6 text-2xl">Interest</p>
              <div className="bg-con_outline mx-6 h-10 w-0.5"></div>
              <ul
                className="*:border-con_outline flex gap-4 *:flex *:items-center *:gap-2 *:rounded-2xl
                    *:border *:bg-[#1A1A1A] *:px-4 *:py-3 *:pr-10 *:transition *:duration-300
                    *:hover:scale-105 *:hover:cursor-pointer *:hover:bg-[#4000]"
              >
                {interest.map((item) => (
                  <li key={item.name} className="flex items-center gap-2">
                    <img src={item.icon} alt={item.name} className="h-6 w-6" />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div id="box-b" className="flex flex-col lg:flex-row gap-6">
          <div className="bg-container border-con_outline rounded-container h-fit flex-1 border p-6">
            <p className="lg:text-3xl text-[1.7rem] font-bold">Skills</p>
            <div className="bg-con_outline mt-5.5 h-px w-full"></div>
            {
              Object.entries(skills).map(([category, skillSet]) => (
                <div key={category} className="mt-5">
                  <ul>
                    {skillSet.map((skill, index) => (
                      <li key={index} className="flex flex-col gap-4">
                        <div className="flex md:gap-5 gap-3 flex-wrap mt-3">
                          {skill.icons.map((icon, idx) => (
                            <img key={idx} src={icon} alt={`Skill Icon ${idx + 1}`} className={`${icon === xmlIcon ? 'hidden md:flex' : '' } md:h-15 md:w-15 h-13 w-13 bg-[#121212] rounded-full p-2.5`} />
                          ))}
                        </div>
                        <p className="text-[1rem] lg:text-[1.125rem]">{skill.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            }
          </div>

          {/* <!-- right column --> */}
          <div className="flex lg:w-[42%] flex-col gap-6">
            <div
              className="bg-container border-con_outline rounded-container flex h-full flex-col border
                  p-6"
            >
              <p className="text-[1.7rem] lg:text-3xl font-bold">Language</p>
              <div className="bg-con_outline lg:mt-5.5 mt-5 mb-6 h-px w-full"></div>
              <ul className="flex gap-5 lg:gap-0 lg:flex-1 flex-col justify-between lg:p-1">
                {languages.map((lang) => (
                  <li key={lang.name} className="flex items-center gap-5">
                    <img src={lang.icon} alt={lang.name} className="w-10" />
                    <div className="h-4 w-full rounded-full bg-[#4eff7d3a]">
                      <div
                        className="bg-accent h-full rounded-full"
                        style={{ width: lang.level }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-container border-con_outline rounded-container border p-6">
              <ul className="flex flex-col gap-6">
                {edu.map((item) => (
                  <li key={item.school} className="flex items-center justify-between">
                    <div>
                      <p className="md:text-2xl text-xl font-black">{item.school}</p>
                      <p className="md:text-xl text-gray-400">{item.grade}</p>
                    </div>
                    <p
                      className="
                      font-semibold border-con_outline rounded-2xl md:rounded-container md:px-5
                      md:py-4 px-3 py-2.5 md:text-2xl border bg-[#121212]
                    "
                    >
                      {item.year}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div id="box-c">
          <div className="bg-container border-con_outline rounded-container flex flex-col border p-6">
            <div className="flex flex-col md:flex-row lg:flex-row justify-between">
              <div>
                <p className="md:text-3xl text-xl font-bold">{workExperience.company}</p>
                <p className="md:text-xl text-gray-400">{workExperience.subtitle}</p>
              </div>
              <p
                className="
                  font-semibold border-con_outline rounded-2xl lg:rounded-container lg:px-5
                  md:py-4 px-3 py-3 md:text-2xl border w-fit self-center mt-4 md:mt-0 lg:mt-0 bg-[#121212]
                "
              >
                {workExperience.period}
              </p>
            </div>
            <div className="bg-con_outline mt-5.5 mb-6 h-px w-full"></div>
            <div className="flex flex-col gap-6">
              {workExperience.roles.map((role) => (
                <div key={role.title}>
                  <p className="md:text-2xl text-xl font-bold mb-3">{role.title}</p>
                  <ul className="flex flex-col gap-3">
                    {role.responsibilities.map((resp, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-[1rem] lg:text-[1.125rem]"
                        dangerouslySetInnerHTML={{ __html: checkmarkIcon + resp }}
                      ></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
