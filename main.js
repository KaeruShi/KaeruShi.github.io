// Handle nav scroll
const nav = document.getElementById("navbar");

let lastScrollY = window.scrollY;
let ticking = false;

function onScroll() {
  const y = window.scrollY;

  // kalau dekat atas, selalu tampil
  if (y < 10) {
    nav.classList.remove("-translate-y-full");
  } else if (y > lastScrollY) {
    // scroll down -> hide
    nav.classList.add("-translate-y-full");
  } else {
    // scroll up -> show
    nav.classList.remove("-translate-y-full");
  }

  lastScrollY = y;
  ticking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  },
  { passive: true },
);

// Active nav link functionality
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const sections = document.querySelectorAll("section[id]");

// Function to update active nav link
function updateActiveNavLink() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

// Set active link on scroll
window.addEventListener("scroll", updateActiveNavLink);

// Set active link on page load
updateActiveNavLink();

// Handle click events on nav links – use scrollIntoView so scroll-mt is consistent from any direction
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href === "#" || !href) return;
    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", href);

    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Intersection Observer for more accurate active state
const observerOptions = {
  root: null,
  rootMargin: "-20% 0px -70% 0px",
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}, observerOptions);

sections.forEach((section) => observer.observe(section));

// Navbar toggle (mobile)
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navMenuWrapper = document.getElementById("nav-menu-wrapper");
let isVisible = false;

hamburger.addEventListener("click", () => {
  if (isVisible) {
    // Hide menu
    navMenuWrapper.style.maxHeight = "0px";
    navMenu.classList.add("opacity-0");
    navMenu.classList.remove("opacity-100");
    hamburger.classList.remove("active");
    nav.classList.remove("bg-[#00000089]");
  } else {
    // Show menu - set max-height to content height
    navMenuWrapper.style.maxHeight = navMenu.scrollHeight + "px";
    navMenu.classList.remove("opacity-0");
    navMenu.classList.add("opacity-100");
    hamburger.classList.add("active");
    nav.classList.add("bg-[#00000089]");
  }
  isVisible = !isVisible;
});

const interests = [
  { label: "Anime", icon: "assets/img/anime.svg" },
  { label: "Gaming", icon: "assets/img/game.svg" },
  { label: "Coding", icon: "assets/img/coding.svg" },
  { label: "Design", icon: "assets/img/design.svg" },
];

const pLanguages = [
  { label: "Kotlin", icon: "assets/img/kotlin.svg" },
  { label: "Java", icon: "assets/img/java.svg" },
  { label: "XML", icon: "assets/img/xml.svg" },
  { label: "HTML", icon: "assets/img/html.svg" },
  { label: "CSS", icon: "assets/img/css.svg" },
  { label: "JavaScript", icon: "assets/img/js.svg" },
];

const designs = [
  { label: "Figma", icon: "assets/img/figma.svg" },
  { label: "Photoshop", icon: "assets/img/ps.svg" },
  { label: "Canva", icon: "assets/img/canva.svg" },
];

const others = [
  { label: "Excel", icon: "assets/img/excel.svg" },
  { label: "Storage", icon: "assets/img/box.svg" },
  { label: "Troubleshoot", icon: "assets/img/tools.svg" },
];

const edu = [
  { school: "MI AL FALAH", grade: "Elementary School", year: "2015" },
  { school: "MTsN 2 BREBES", grade: "Junior High School", year: "2018" },
  { school: "SMK N 1 BREBES", grade: "Teknik Komputer Jaringan", year: "2021" },
];

const language = [
  { lang: "Indonesia", percent: "95%", icon: "assets/img/indo.svg" },
  { lang: "English", percent: "55%", icon: "assets/img/us.svg" },
  { lang: "Japan", percent: "30%", icon: "assets/img/japan.svg" },
  { lang: "Korean", percent: "10%", icon: "assets/img/korea.svg" },
];

const projects = [
  {
    name: "Weeabooify",
    description: "A beautiful and aesthetic theme engine for AOSP",
    icon: "assets/img/weeabooify.svg",
    technologies: [
      { name: "Kotlin", icon: "assets/img/kotlin.svg", class: "w-9" },
      { name: "Java", icon: "assets/img/java.svg", class: "w-8" },
      { name: "XML", icon: "assets/img/xml.svg", class: "w-12" },
      { name: "Terminal", icon: "assets/img/terminal.svg", class: "" },
      { name: "Android", icon: "assets/img/android.svg", class: "w-11" },
    ],
  },
  {
    name: "Uwuify",
    description: "A theme engine for Android Q which can customize your boring stock UI",
    icon: "assets/img/weeabooify.svg",
    technologies: [
      { name: "Kotlin", icon: "assets/img/kotlin.svg", class: "w-9" },
      { name: "Java", icon: "assets/img/java.svg", class: "w-8" },
      { name: "XML", icon: "assets/img/xml.svg", class: "w-12" },
      { name: "Terminal", icon: "assets/img/terminal.svg", class: "" },
      { name: "Android", icon: "assets/img/android.svg", class: "w-11" },
    ],
  },
  {
    name: "Monetify",
    description: "A theme engine which can customize app colors",
    icon: "assets/img/weeabooify.svg",
    technologies: [
      { name: "Kotlin", icon: "assets/img/kotlin.svg", class: "w-9" },
      { name: "Java", icon: "assets/img/java.svg", class: "w-8" },
      { name: "XML", icon: "assets/img/xml.svg", class: "w-12" },
      { name: "Terminal", icon: "assets/img/terminal.svg", class: "" },
      { name: "Android", icon: "assets/img/android.svg", class: "w-11" },
    ],
  },
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

const list = document.getElementById("interestList");
const pList = document.getElementById("pLangList");
const dList = document.getElementById("designList");
const oList = document.getElementById("otherList");
const eduList = document.getElementById("eduList");
const langList = document.getElementById("langList");
const projectsList = document.getElementById("projectsList");
const workExperienceContainer = document.getElementById("workExperience");

list.innerHTML = interests
  .map(
    (item) => `
    <li>
      <img class="h-5 w-5" src="${item.icon}" alt="${item.label} icon" />
      <span>${item.label}</span>
    </li>
  `,
  )
  .join("");

pList.innerHTML = pLanguages
  .map(
    (item) => `
  <li>
      <img class="md:h-14 md:w-14 w-11 h-11 p-2 object-cover" src="${item.icon}" alt="${item.label} icon" />
    </li>
  `,
  )
  .join("");

dList.innerHTML = designs
  .map(
    (item) => `
  <li>
      <img class="md:h-14 md:w-14 w-11 h-11 p-2 object-cover" src="${item.icon}" alt="${item.label} icon" />
    </li>
  `,
  )
  .join("");

oList.innerHTML = others
  .map(
    (item) => `
  <li>
      <img class="md:h-14 md:w-14 w-11 h-11 p-2 object-cover" src="${item.icon}" alt="${item.label} icon" />
    </li>
  `,
  )
  .join("");

eduList.innerHTML = edu
  .map(
    (item) => `
  <li class="flex items-center justify-between">
                    <div>
                      <p class="md:text-2xl text-xl font-black">${item.school}</p>
                      <p class="md:text-xl text-gray-400">${item.grade}</p>
                    </div>
                    <p class="
                      font-semibold border-con_outline rounded-2xl md:rounded-container md:px-5
                      md:py-4 px-4 py-3 md:text-2xl border bg-[#121212]
                    ">${item.year}</p>
                  </li>
  `,
  )
  .join("");

langList.innerHTML = language
  .map(
    (item) =>
      `
  <li class="gap-6 flex items-center">
                    <img src=${item.icon} alt=${item.lang} class="w-10" />
                    <div class="h-4 w-full rounded-full bg-[#4eff7d3a]">
                      <div class="bg-accent h-full rounded-full" style="width: ${item.percent}"></div>
                    </div>
                  </li>
`,
  )
  .join("");

// Render projects dynamically
projectsList.innerHTML = projects
  .map(
    (project) => `
    <div class="
      bg-container border-con_outline p-6 rounded-container flex flex-1 flex-col
      border
    ">
      <img src="${project.icon}" alt="${project.name} icon" class="w-20" />
      <p class="
        text-3xl
        md:text-4xl
        mt-8
        md:mt-10
        font-bold
      ">${project.name}</p>
      <p class="text-xl flex-1">${project.description}</p>
      <div class="mt-6 gap-4 flex items-center">
        ${project.technologies
          .map(
            (tech) => `<img src="${tech.icon}" alt="${tech.name}" class="
              ${tech.class}
            " />`,
          )
          .join("")}
      </div>
    </div>
  `,
  )
  .join("");

// Checkmark SVG icon helper
const checkmarkIcon = `<svg class="me-1.5 h-6 w-6 text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`;

// Render work experience dynamically
workExperienceContainer.innerHTML = `
  <div class="flex flex-col md:flex-row items-center justify-between">
    <div>
      <p class="md:text-3xl text-2xl font-bold">${workExperience.company}</p>
      <p class="md:text-xl text-lg text-gray-300">${workExperience.subtitle}</p>
    </div>
    <p class="
      border-con_outline rounded-2xl md:rounded-container md:px-5 md:py-4 px-4 py-3 md:text-2xl font-semibold
      border bg-[#121212] mt-4 md:mt-0
    ">${workExperience.period}</p>
  </div>
  <div class="bg-con_outline my-5.5 h-px w-full"></div>
  ${workExperience.roles
    .map(
      (role, index) => `
    <p class="${index > 0 ? "mt-8 " : ""}mb-2 text-2xl font-semibold">${role.title}</p>
    <ul class="*:md:gap-3 *:gap-5 gap-4 flex flex-col *:text-lg *:md:text-xl *:flex *:items-center">
      ${role.responsibilities
        .map(
          (responsibility) => `
        <li>
          ${checkmarkIcon}
          ${responsibility}
        </li>
      `,
        )
        .join("")}
    </ul>
  `,
    )
    .join("")}
`;
