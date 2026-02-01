import { SpotlightBackground } from "./components/ui/spotlight.tsx";
import { BackgroundBeams } from "./components/ui/background-beams.tsx";
import { createRoot } from "react-dom/client";
import { AppTheme, ThemeProvider } from "./lib/AppTheme.tsx";
import "./index.css";
import App from "./App.tsx";
import { useContext } from "react";

function RootContent() {
  const { isDarkMode } = useContext(AppTheme);

  return (
    <>
      <BackgroundBeams className={`${ isDarkMode ? "opacity-30" : "opacity-0"} fixed -z-10`} />
      <SpotlightBackground
        blur={100}
        colors={["rgba(126,87,194,0.3)"]}
        className={`${ isDarkMode ? "opacity-100" : "opacity-0"} -z-10`}
      />v
      <App />
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <RootContent />
  </ThemeProvider>,
);
