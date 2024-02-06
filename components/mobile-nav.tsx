"use client";

import { LucideMenu, XIcon } from "lucide-react";
import ShoppingCart from "./shopping-cart";
import Link from "next/link";
import { navLinks } from "@/lib/nav-links";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { usePathname, useSearchParams } from "next/navigation";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          buttonVariants({ variant: "link" }),
          "hover:text-orange-300 text-2xl",
        )}
      >
        {children}
      </Link>
    </li>
  );
};

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const containerStyles = clsx(
    "w-full h-dvh bg-gray-50/40 absolute top-0 left-0 transition-500 opacity-0 hidden",
    {
      "block opacity-100": isOpen,
    },
  );

  const menuStyles = clsx(
    "w-2/3 h-dvh bg-white absolute top-0 left-0 px-4 py-4 flex flex-col -translate-x-full",
    {
      "translate-x-0": isOpen,
    },
  );

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname, searchParams]);

  return (
    <>
      <header className="w-screen border-b border-border lg:hidden">
        <nav className="py-1 h-14 flex items-center justify-between">
          <Button variant="ghost" onClick={() => setIsOpen(true)}>
            <LucideMenu />
          </Button>

          <div className={cn(containerStyles)}>
            <div className={menuStyles}>
              <Button
                variant="ghost"
                className="mb-8 pl-2 flex justify-start"
                onClick={() => setIsOpen(false)}
              >
                <XIcon className="h-8 w-8" />
              </Button>
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <NavLink key={link.href} href={link.href}>
                    {link.label}
                  </NavLink>
                ))}
              </ul>
            </div>
            <Button
              asChild
              className="bg-transparent"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-full h-full"></div>
            </Button>
          </div>

          <ShoppingCart />
        </nav>
      </header>
    </>
  );
}
