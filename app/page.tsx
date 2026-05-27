"use client";

import Link from "next/link";
import { useState } from "react";

const menuItems = [
  {
    label: "Continue",
    helper: "Resume from the latest save",
    href: "/continue",
  },
  {
    label: "New Game",
    helper: "Start a fresh story",
    href: "/new-game",
  },
  {
    label: "Load Chapter",
    helper: "Choose an unlocked chapter",
  },
  {
    label: "Options",
    helper: "Audio and display settings",
  },
];

export default function Home() {
  const [active, setActive] = useState(menuItems[0]);

  return (
    <main className="relative min-h-svh overflow-hidden bg-black text-white">
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[68%_center] md:object-center"
        src="/mee.png"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.86)_0%,rgba(0,0,0,0.58)_36%,rgba(0,0,0,0.12)_72%),linear-gradient(0deg,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0)_45%,rgba(0,0,0,0.35)_100%)]" />

      <section className="relative z-10 flex min-h-svh items-end px-5 pb-9 pt-8 sm:px-10 md:items-center md:px-20 md:py-16">
        <div className="w-full max-w-[28rem] animate-menuEnter">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-orange-400">
            No Pain / No Gain
          </p>

          <h1 className="font-display text-[clamp(3.5rem,10vw,7.5rem)] uppercase leading-[0.82] tracking-0">
            Street
            <span className="block text-orange-400">Ball</span>
          </h1>

          <nav className="mt-9 space-y-2.5" aria-label="Game menu">
            {menuItems.map((item) => (
              <MenuItemButton
                key={item.label}
                active={active.label === item.label}
                href={item.href}
                label={item.label}
                onSelect={() => setActive(item)}
              />
            ))}
          </nav>

          <p className="mt-6 min-h-6 text-sm text-white/62">{active.helper}</p>
        </div>
      </section>
    </main>
  );
}

function MenuItemButton({
  active,
  href,
  label,
  onSelect,
}: {
  active: boolean;
  href?: string;
  label: string;
  onSelect: () => void;
}) {
  const className = `menu-item group w-full ${active ? "menu-item-active" : ""}`;

  if (href) {
    return (
      <Link
        className={className}
        href={href}
        onFocus={onSelect}
        onMouseEnter={onSelect}
      >
        <span>{label}</span>
        <span className="menu-arrow">Open</span>
      </Link>
    );
  }

  return (
    <button
      className={className}
      type="button"
      onClick={onSelect}
      onFocus={onSelect}
      onMouseEnter={onSelect}
    >
      <span>{label}</span>
      <span className="menu-arrow">Select</span>
    </button>
  );
}
