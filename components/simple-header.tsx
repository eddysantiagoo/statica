"use client";

import React, { useState } from "react";
import { Grid2x2PlusIcon } from "lucide-react";
import { Sheet, SheetContent, SheetFooter } from "@/components/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { MenuToggle } from "@/components/menu-toggle";
import { ModeToggle } from "./ui/mode-toggle";
import Image from "next/image";
import Link from "next/link";

export function SimpleHeader() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      label: "Características",
      href: "#",
    },
    {
      label: "Precios",
      href: "#",
    },
    {
      label: "Acerca de",
      href: "#",
    },
  ];

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-lg">
      <nav className="mx-auto flex h-20 w-full max-w-4xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link
            className="flex flex-col place-items-end items-center relative"
            href={`/`}
          >
            <div className="flex items-center">
              <Image
                src="/logo.webp"
                alt="Parts"
                width={100}
                height={100}
                className="hidden md:block"
                priority
              />
              <span>-</span>
              <Image
                src="/caterpillar.svg"
                alt="Parts"
                className="flex rounded-md ml-2"
                width={50}
                height={50}
                priority
              />
            </div>
          </Link>
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          {links.map((link) => (
            <a
              className={buttonVariants({ variant: "ghost" })}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <ModeToggle />
          <Button variant="outline">Iniciar Sesión</Button>
          <Button>Comenzar</Button>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <Button size="icon" variant="outline" className="lg:hidden">
            <MenuToggle
              strokeWidth={2.5}
              open={open}
              onOpenChange={setOpen}
              className="size-6"
            />
          </Button>
          <SheetContent
            className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
            showClose={false}
            side="left"
          >
            <div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
              {links.map((link) => (
                <a
                  className={buttonVariants({
                    variant: "ghost",
                    className: "justify-start",
                  })}
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <SheetFooter>
              <Button variant="outline">Iniciar Sesión</Button>
              <Button>Comenzar</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
