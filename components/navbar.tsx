"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function Navbar() {

  return (
    <nav className="sticky top-0 z-50 bg-background/0 backdrop-blur border-b">
        <div className="flex items-center justify-between px-6 h-14">
            <NavigationMenu>
                <NavigationMenuList className="flex-wrap gap-1">
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} px-2 py-1.5 bg-transparent hover:bg-white/10 focus:bg-white/10`}>
                            <Link href="/releases">Releases</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} px-2 py-1.5 bg-transparent hover:bg-white/10 focus:bg-white/10`}>
                            <Link href="/Shows">Shows</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} px-2.5 py-1.5 bg-transparent hover:bg-white/10 focus:bg-white/10`}>
                            <Link href="/Media">Media</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} px-2.5 py-1.5 bg-transparent hover:bg-white/10 focus:bg-white/10`}>
                            <Link href="/about">About</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} px-2.5 py-1.5 bg-transparent hover:bg-white/10 focus:bg-white/10`}>
                            <Link href="/booking">Booking</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-4">
                <Link href="https://open.spotify.com/artist/2gNS3sdwojkIY1BKmXUM7B" target="_blank">
                    <Image
                        src="/icons/spotify.svg"
                        alt="Spotify"
                        width={35}
                        height={35}
                        className="brightness-0 invert opacity-80 hover:opacity-100 transition"
                    />
                </Link>
                <Link href="https://music.apple.com/us/artist/midnight-drive/1815364020" target="_blank">
                    <Image
                        src="/icons/apple-music.svg"
                        alt="Apple Music"
                        width={32}
                        height={32}
                        className="brightness-0 invert opacity-80 hover:opacity-100 transition"
                    />
                </Link>
                <Link href="https://www.youtube.com/@midnightdrivenj" target="_blank">
                    <Image
                        src="/icons/youtube.svg"
                        alt="Youtube"
                        width={35}
                        height={35}
                        className="brightness-0 invert opacity-80 hover:opacity-100 transition"
                    />
                </Link>
                <Link href="https://www.instagram.com/midnightdrive_nj/" target="_blank">
                    <Image
                        src="/icons/instagram.svg"
                        alt="Instagram"
                        width={35}
                        height={35}
                        className="brightness-0 invert opacity-80 hover:opacity-100 transition"
                    />
                </Link>
                <Link href="https://www.tiktok.com/@midnightdrive_nj" target="_blank">
                    <Image
                        src="/icons/tiktok.svg"
                        alt="Tiktok"
                        width={32}
                        height={32}
                        className="brightness-0 invert opacity-80 hover:opacity-100 transition"
                    />
                </Link>
            </div>
        </div>
    </nav>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
