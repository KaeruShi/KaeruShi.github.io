import { SpotlightBackground } from "./components/ui/spotlight.tsx";
import { BackgroundBeams } from "./components/ui/background-beams.tsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <div className="flex flex-col">
    <BackgroundBeams className="fixed -z-10 lg:opacity-60" />
    <SpotlightBackground blur={100} colors={["rgba(126,87,194,0.3)"]} className="-z-10"/>
    <App />
  </div>
);
