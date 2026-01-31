import { useEffect, useState } from "react";
import DarkIcon from "@/assets/icons/dark.svg?react";
import LightIcon from "@/assets/icons/light.svg?react";

export default function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Initialize theme from localStorage or default to dark mode
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      applyTheme(savedTheme === "dark");
    } else {
      // Default to dark mode
      applyTheme(true);
    }
  }, []);

  const applyTheme = (isDark: boolean) => {
    const htmlElement = document.documentElement;
    if (isDark) {
      htmlElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      htmlElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleTheme = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    applyTheme(newIsDarkMode);
  };

  return (
    <footer className="bg-container mt-16 md:px-7 px-4 py-5 md:py-6 flex justify-between">
      <div className="flex items-center">
        <svg
          onClick={() => window.open("https://github.com/KaeruShi", "_blank")}
          className="fill-primary me-4 w-7 cursor-pointer"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>GitHub</title>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
        <p className="md:text-lg">2026 KaeruShi Portofolio Page</p>
      </div>
      <div
        onClick={toggleTheme}
        className="bg-container-secondary border-con_outline w-12 h-12 relative flex cursor-pointer items-center justify-center rounded-full border"
      >
        <DarkIcon
          className={`w-full fill-primary absolute transition-all ${
            isDarkMode ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        />
        <LightIcon
          className={`w-full fill-primary absolute transition-all ${
            isDarkMode ? "scale-0 opacity-0" : "scale-100 opacity-100"
          }`}
        />
      </div>
      
    </footer>
  );
}
