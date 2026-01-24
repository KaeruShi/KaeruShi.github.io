// Active nav link functionality
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const sections = document.querySelectorAll('section[id]');

// Function to update active nav link
function updateActiveNavLink() {
  let current = '';
  
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// Set active link on scroll
window.addEventListener('scroll', updateActiveNavLink);

// Set active link on page load
updateActiveNavLink();

// Handle click events on nav links
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    // Remove active from all links
    navLinks.forEach((l) => l.classList.remove('active'));
    // Add active to clicked link
    link.classList.add('active');
  });
});

// Intersection Observer for more accurate active state
const observerOptions = {
  root: null,
  rootMargin: '-20% 0px -70% 0px',
  threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, observerOptions);

sections.forEach((section) => observer.observe(section));

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
  { label: "JavaScript", icon: "assets/img/js.svg" }
];

const list = document.getElementById("interestList");
const pList = document.getElementById("pLangList");

list.innerHTML = interests.map(
    (item) => `
    <li>
      <img class="h-5 w-5" src="${item.icon}" alt="${item.label} icon" />
      <span>${item.label}</span>
    </li>
  `,
).join("");

pList.innerHTML = pLanguages.map(
  (item) => `
  <li>
      <img class="h-14 w-14 p-2 object-cover" src="${item.icon}" alt="${item.label} icon" />
    </li>
  `,
).join("");
