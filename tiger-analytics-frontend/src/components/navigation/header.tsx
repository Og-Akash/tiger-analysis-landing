"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { ChevronDown, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { useQuery } from "@apollo/client/react";
import { GET_NAVIGATION } from "@/lib/query/getNavbarData";
import { NavigationResponse } from "@/types";
import { getImageUrl } from "@/lib/utils";
import AnnouncementBar from "../announcement-bar";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [announcementHeight, setAnnouncementHeight] = useState(0);
  const announcementsRef = useRef<HTMLDivElement>(null);

  const { data, loading } = useQuery<NavigationResponse>(GET_NAVIGATION);
  //   console.log("navigation:", data);

  useEffect(() => {
    if (announcementsRef.current) {
      console.log("offset height", announcementsRef.current.offsetHeight);
      setAnnouncementHeight(announcementsRef.current.offsetHeight);
    }
  }, [announcementsRef.current]);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // Show nothing while loading or if no data
  if (loading || !data?.navbars?.length) return null;

  const rightNavbar = data.navbars[0]; // Get the right navbar
  const leftNavbar = data.navbars[1]; // Get the left navbar

  const logoUrl = leftNavbar?.site_logo
    ? getImageUrl(leftNavbar?.site_logo?.url)
    : null;

  return (
    <div className="fixed top-0 z-50 w-full pointer-events-none">
      <div ref={announcementsRef}>
        <AnnouncementBar data={[]} />
      </div>
      <motion.header
        className="fixed top-0 z-40 w-full bg-transparent transition-transform duration-300 ease-in-out pointer-events-none"
        style={{
          top: announcementsRef?.current ? `${announcementHeight}px` : "40px",
        }}
        animate={{
          y: isVisible ? 0 : -(announcementHeight + 100),
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="mx-auto flex items-center justify-between gap-3 px-7 py-3 md:py-4 bg-transparent">
          <NavigationMenu className="hidden w-full flex-1 lg:flex justify-between items-center gap-3 max-w-none bg-transparent">
            <NavigationMenuList className="gap-10 px-4 h-16 bg-white rounded-md pointer-events-auto">
              <NavigationMenuItem className="pointer-events-auto">
                {logoUrl && (
                  <NavigationMenuLink asChild>
                    <Link href="/" className="flex items-center">
                      <Image
                        src={logoUrl}
                        alt={
                          leftNavbar.site_logo.alternativeText ??
                          "Tiger Analytics logo"
                        }
                        width={140}
                        height={44}
                        className="h-9 w-auto md:h-10"
                        priority
                      />
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>

              <NavItems items={leftNavbar.menu_links} />
            </NavigationMenuList>
            <NavigationMenuList className="gap-10 px-4 h-16 bg-white rounded-md pointer-events-auto">
              <NavItems items={rightNavbar.menu_links} />
            </NavigationMenuList>
          </NavigationMenu>

          <div className="lg:hidden">
            <MobileMenu navbar={leftNavbar} />
          </div>
        </div>
      </motion.header>
    </div>
  );
}

const NavItems = ({ items }: { items: any[] }) => {
  return (
    <>
      {items.map((item, index) => {
        if (item.sub_menu_links && item.sub_menu_links.length > 0) {
          // Dropdown menu item
          return (
            <NavigationMenuItem key={index} className="pointer-events-auto">
              <NavigationMenuTrigger className="font-bold text-lg gap-1 cursor-pointer [&>svg]:size-5 text-theme-primary">
                {item.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="pointer-events-auto">
                <ul className="grid w-[400px] gap-3 p-4">
                  {item.sub_menu_links.map((subItem: any, subIndex: number) => (
                    <li key={subIndex}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={subItem.link}
                          target={
                            subItem.target === "_blank" ? "_blank" : undefined
                          }
                          rel={
                            subItem.target === "_blank"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="block select-none space-y-1 rounded-md p-3 hover:bg-neutral-50"
                        >
                          <div className="text-sm font-semibold leading-none">
                            {subItem.label}
                          </div>
                          <p className="line-clamp-2 text-sm text-neutral-600">
                            {subItem.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        } else {
          // Simple link item
          return (
            <NavigationMenuItem key={index} className="pointer-events-auto">
              <NavigationMenuLink asChild>
                <Link
                  href={item.link}
                  target={item.target === "_blank" ? "_blank" : undefined}
                  rel={
                    item.target === "_blank" ? "noopener noreferrer" : undefined
                  }
                  className="font-bold text-lg"
                >
                  {item.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        }
      })}
    </>
  );
};

function MobileMenu({ navbar }: { navbar: any }) {
  const logoUrl = navbar?.site_logo
    ? getImageUrl(navbar?.site_logo?.url)
    : null;

  return (
    <Sheet>
      <SheetTrigger className="pointer-events-auto" asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-transparent"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-[320px] sm:w-[380px] pointer-events-auto px-4"
      >
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <div className="mt-6 space-y-6">
          {logoUrl && (
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={logoUrl}
                alt={navbar.site_logo.alternativeText || "Tiger Analytics logo"}
                width={140}
                height={44}
                className="h-8 w-auto"
                priority
              />
              <span className="sr-only">Tiger Analytics</span>
            </Link>
          )}

          <div className="grid gap-4">
            <ul className="grid gap-2 text-base font-semibold">
              <MobileNavItems items={navbar.menu_links} />
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function MobileNavItems({ items }: { items: any[] }) {
  return (
    <>
      {items.map((item, index) => {
        if (item.sub_menu_links && item.sub_menu_links.length > 0) {
          // Dropdown menu item for mobile
          return (
            <li key={index}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between py-2">
                  <span>{item.label}</span>
                  <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                </summary>
                <ul className="ml-3 grid gap-2 text-sm font-normal text-neutral-700">
                  {item.sub_menu_links.map((subItem: any, subIndex: number) => (
                    <li key={subIndex}>
                      <Link
                        href={subItem.link}
                        target={
                          subItem.target === "_blank" ? "_blank" : undefined
                        }
                        rel={
                          subItem.target === "_blank"
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          );
        } else {
          // Simple link item for mobile
          return (
            <li key={index} className="flex">
              <Link
                href={item.link}
                target={item.target === "_blank" ? "_blank" : undefined}
                rel={
                  item.target === "_blank" ? "noopener noreferrer" : undefined
                }
                className="py-2 w-full h-full"
              >
                {item.label}
              </Link>
            </li>
          );
        }
      })}
    </>
  );
}
