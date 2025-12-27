"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-background/20 backdrop-blur border-b">
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
                            <Link href="/shows">Shows</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} px-2.5 py-1.5 bg-transparent hover:bg-white/10 focus:bg-white/10`}>
                            <Link href="/gallery">Gallery</Link>
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

            <div className="absolute left-1/2 -translate-x-1/2">
              {pathname !== "/" && (
                <Link href="/">
                    <Image
                        src="/logo_horizontal.svg"
                        alt="Spotify"
                        width={180}
                        height={100}
                        className="brightness-0 invert opacity-80 hover:opacity-100 transition"
                    />
                </Link>
              )}

            </div>
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
