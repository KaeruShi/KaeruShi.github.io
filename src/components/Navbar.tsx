import { useEffect, useMemo, useRef, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  // 👇 ini buat hide/show navbar
  const [navHidden, setNavHidden] = useState(false);
  const lastY = useRef(0);

  const items = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      {
        id: "projects",
        label: "Projects",
      },
      {
        id: "contact",
        label: "Contact",
      },
    ],
    [],
  );

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      // biar gak jitter pas scroll dikit2
      const threshold = 8;

      // kalau menu mobile lagi open, paksa navbar tampil
      if (open) {
        setNavHidden(false);
        lastY.current = y;
        return;
      }

      // di atas (deket top) selalu tampil
      if (y < 20) {
        setNavHidden(false);
        lastY.current = y;
        return;
      }

      if (Math.abs(delta) > threshold) {
        if (delta > 0) {
          // scroll down
          setNavHidden(true);
        } else {
          // scroll up
          setNavHidden(false);
        }
        lastY.current = y;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  const close = () => setOpen(false);

  // update active nav link based on scroll position or URL hash
  useEffect(() => {
    const updateActive = () => {
      const offset = 120; // how far from top to consider a section active
      let current = items[0]?.id ?? "home";
      for (const it of items) {
        const el = document.getElementById(it.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset) current = it.id;
      }
      setActiveId(current);
    };

    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) setActiveId(hash);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [items]);

  return (
    <nav
      className={`fixed top-0 z-50 w-full flex-col justify-between
        md:items-center flex pl-5 pr-2 py-1.5 backdrop-blur-xl
        transition-transform duration-300 will-change-transform md:flex-row
        md:px-10 md:py-5 ${navHidden ? "-translate-y-full" : "translate-y-0"}`}>
      {/* Logo */}
      <div className="flex text-2xl justify-between font-bold items-center">
        <div className="flex justify-between items-center w-full">
          KaeruShi
          <button
            className="w-fit rounded-full
              bg-[linear-gradient(to_right,#D86983,#7E57C2)] px-3 py-2
              leading-none text-lg text-white font-bold transition duration-300
              hover:scale-110 active:scale-95 md:hidden">
            CV
          </button>
        </div>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden pr-5 group relative h-15.5 w-16 cursor-pointer
            transition-all duration-300 ease-out active:scale-95 *:bg-primary
            ${open ? "active" : ""}`}>
          <span
            className="absolute left-3.75 top-4.5 h-0.75 w-7.5 rounded-[3px]
              transition-all duration-300
              ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
              group-[.active]:top-[28.5px] group-[.active]:rotate-45"
          />
          <span
            className="absolute left-3.75 top-[28.5px] h-0.75 w-7.5
              rounded-[3px] transition-all duration-300
              ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
              group-[.active]:translate-x-5 group-[.active]:opacity-0"
          />
          <span
            className="absolute left-3.75 top-9.75 h-0.75 w-7.5 rounded-[3px]
              transition-all duration-300
              ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
              group-[.active]:top-[28.5px] group-[.active]:-rotate-45"
          />
        </button>
      </div>

      {/* nav-menu-wrapper custom */}
      <div className="relative md:static">
        {/* Mobile dropdown panel */}
        <div
          className={`md:hidden absolute w-full mt-4 pe-3 transition-all
            duration-300 ease-out ${
              open
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
            } `}>
          <div
            className="rounded-2xl border border-con_outline bg-container
              backdrop-blur-xl p-4">
            <ul
              className="[&_a.active]:text-accent flex flex-col gap-4
                [&_a]:text-[1.2rem] [&_a]:text-primary [&_a]:transition-all
                [&_a]:duration-300
                [&_a.active]:filter-[drop-shadow(0_0_18px_var(--color-accent))]
                [&_a.active]:[-webkit-text-stroke:0.5px_currentColor]
                [&_a:hover]:opacity-60">
              {items.map((it) => (
                <li key={it.id}>
                  <a
                    href={`#${it.id}`}
                    onClick={close}
                    className={activeId === it.id ? "active" : ""}>
                    {it.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Desktop menu (normal flow) */}
        <div className="hidden md:block">
          <ul
            className="[&_a.active]:text-accent gap-4 flex-row self-center
              [&_a]:text-[1.3rem] [&_a]:text-primary [&_a]:transition-all
              [&_a]:duration-300
              [&_a.active]:filter-[drop-shadow(0_0_18px_var(--color-accent))]
              [&_a.active]:[-webkit-text-stroke:0.5px_currentColor]
              [&_a:hover]:bg-gray-600/40 [&_a.active:hover]:bg-transparent
              [&_a]:px-3 [&_a]:py-2 [&_a:hover]:rounded-lg flex">
            {items.map((it) => (
              <li key={it.id}>
                <a
                  href={`#${it.id}`}
                  className={activeId === it.id ? "active" : ""}>
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        className="w-fit rounded-full
          bg-[linear-gradient(to_right,#D86983,#7E57C2)] px-4 py-3 leading-none
          font-bold text-white transition duration-300 hover:scale-110
          active:scale-95 hidden md:block">
        Resume
      </button>
    </nav>
  );
}
