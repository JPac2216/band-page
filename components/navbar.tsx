"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navLinks = [
  { href: "/releases", label: "Releases" },
  { href: "/shows", label: "Shows" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/booking", label: "Booking" },
];

const socialLinks = [
  {
    href: "https://open.spotify.com/artist/2gNS3sdwojkIY1BKmXUM7B",
    icon: "/icons/spotify.svg",
    alt: "Spotify",
    w: 35,
    h: 35,
  },
  {
    href: "https://music.apple.com/us/artist/midnight-drive/1815364020",
    icon: "/icons/apple-music.svg",
    alt: "Apple Music",
    w: 32,
    h: 32,
  },
  {
    href: "https://www.youtube.com/@midnightdrivenj",
    icon: "/icons/youtube.svg",
    alt: "YouTube",
    w: 35,
    h: 35,
  },
  {
    href: "https://www.instagram.com/midnightdrive_nj/",
    icon: "/icons/instagram.svg",
    alt: "Instagram",
    w: 35,
    h: 35,
  },
  {
    href: "https://www.tiktok.com/@midnightdrive_nj",
    icon: "/icons/tiktok.svg",
    alt: "TikTok",
    w: 32,
    h: 32,
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 bg-background/20 backdrop-blur border-b">
      <div className="relative flex items-center justify-between px-6 h-14">
        {/* LEFT: Desktop nav */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex-wrap gap-1">
              {navLinks.map((l) => (
                <NavigationMenuItem key={l.href}>
                  <NavigationMenuLink
                    asChild
                    className={`${navigationMenuTriggerStyle()} px-2.5 py-1.5 bg-transparent hover:bg-white/10 focus:bg-white/10`}
                  >
                    <Link href={l.href}>{l.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* LEFT: Mobile burger (only on mobile) */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/90 hover:text-white hover:border-white/20"
        >
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-0.5 w-5 bg-current transition ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>

        {/* CENTER LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2">
          {pathname !== "/" && (
            <Link href="/">
              <Image
                src="/logo_horizontal.svg"
                alt="Midnight Drive"
                width={180}
                height={100}
                className="brightness-0 invert opacity-80 hover:opacity-100 transition"
              />
            </Link>
          )}
        </div>

        {/* RIGHT: socials desktop */}
        <div className="hidden md:flex items-center gap-4">
          {socialLinks.map((s) => (
            <Link key={s.href} href={s.href} target="_blank">
              <Image
                src={s.icon}
                alt={s.alt}
                width={s.w}
                height={s.h}
                className="brightness-0 invert opacity-80 hover:opacity-100 transition"
              />
            </Link>
          ))}
        </div>

        {/* RIGHT: optional mobile placeholder to balance layout */}
        <div className="md:hidden w-10" />
      </div>

      {/* MOBILE MENU PANEL */}
      <div
        className={`md:hidden overflow-hidden border-t border-white/10 bg-background/30 backdrop-blur transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col items-center justify-center gap-2">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-xl px-3 py-2 text-lg text-white/85 hover:text-white hover:bg-white/10 transition"
            >
              {l.label}
            </Link>
          ))}

          <div className="mt-3 flex items-center justify-center gap-4">
            {socialLinks.map((s) => (
              <Link key={s.href} href={s.href} target="_blank">
                <Image
                  src={s.icon}
                  alt={s.alt}
                  width={s.w}
                  height={s.h}
                  className="brightness-0 invert opacity-80 hover:opacity-100 transition"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
