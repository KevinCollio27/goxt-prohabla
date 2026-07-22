"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";

const navItems = [
  { title: "Inicio", href: "/" },
  { title: "Empleos", href: "/empleos" },
  { title: "Contacto", href: "/confirmar" },
  { title: "Blog", href: "/blog" },
];

const LogoLockup = () => (
  <a href="/" className="flex items-center gap-3">
    <Image
      src="/Logo ExpoTalento.png"
      alt="ExpoTalento"
      width={40}
      height={40}
      className="rounded-full"
      priority
    />
    <span className="flex flex-col leading-tight">
      <span className="text-sm font-semibold text-navy">
        ExpoTalento UTN 2026
      </span>
      <span className="text-xs text-muted-foreground">
        Universidad Técnica Nacional
      </span>
    </span>
  </a>
);

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) setIsOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="inset-x-0 z-50 px-4 flex items-center justify-center sticky top-0 h-20"
    >
      <div
        className={cn(
          "w-full max-w-6xl flex items-center h-fit justify-between gap-3.5 lg:gap-6 transition-all duration-500",
          sticky
            ? "p-2.5 bg-white border border-border shadow-2xl shadow-primary/5 rounded-full"
            : "p-2.5 bg-white border border-border shadow-lg shadow-navy/5 rounded-full"
        )}
      >
        <LogoLockup />

        {/* Desktop Nav */}
        <NavigationMenu className="max-lg:hidden bg-muted p-0.5 rounded-full"
        >
          <NavigationMenuList className="flex gap-0">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium rounded-full text-muted-foreground hover:text-navy hover:bg-background outline outline-transparent hover:outline-border hover:shadow-xs transition tracking-normal"
                >
                  {item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
              <span className="rounded-full border border-border p-2 block">
                <Menu width={20} height={20} />
                <span className="sr-only">Menú</span>
              </span>
            </SheetTrigger>
            <SheetContent
              showCloseButton={false}
              side="right"
              className="w-full sm:w-96 p-0 border-l-0"
            >
              <div className="flex items-center justify-between p-6">
                <LogoLockup />
                <SheetClose>
                  <span className="rounded-full border border-border p-2.5 block">
                    <X width={16} height={16} />
                  </span>
                </SheetClose>
              </div>
              <div className="flex flex-col gap-12 px-6 pb-6 overflow-y-auto">
                <SheetTitle className="sr-only">Menú</SheetTitle>
                <NavigationMenu
                  orientation="vertical"
                  className="items-start flex-none"
                >
                  <NavigationMenuList className="flex flex-col items-start gap-3">
                    {navItems.map((item) => (
                      <NavigationMenuItem key={item.title}>
                        <NavigationMenuLink
                          href={item.href}
                          className="flex items-center text-2xl font-semibold tracking-tight transition-all p-0 hover:bg-transparent focus:bg-transparent text-navy hover:translate-x-2"
                        >
                          {item.title}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
