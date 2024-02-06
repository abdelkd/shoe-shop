import Link from "next/link";
import { PropsWithChildren } from "react";
import { ShoppingBag } from "lucide-react";

import { buttonVariants } from "./ui/button";
import Search from "@/components/search";
import { cn } from "@/lib/utils";
import MobileNav from "./mobile-nav";
import { navLinks } from "@/lib/nav-links";
import ShoppingCart from "./shopping-cart";

interface NavLinkProps extends PropsWithChildren {
  href: string;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          buttonVariants({ variant: "link" }),
          "hover:text-orange-300",
        )}
      >
        {children}
      </Link>
    </li>
  );
};

export default function MainNav() {
  return (
    <>
      <header className="w-full border-b border-border hidden lg:block">
        <nav className="max-w-7xl px-4 py-1 h-14 flex items-center justify-between mx-auto">
          <div>
            <Link href="/">
              <p className="text-xl font-bold">ShoeShop</p>
            </Link>
          </div>

          <ul className="flex items-center gap-6 font-semibold">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </ul>

          <div className="px-10 ml-32"></div>
          <div className="flex gap-3 absolute right-4">
            <Search />
            <ShoppingCart />
          </div>
        </nav>
      </header>
      <MobileNav />
    </>
  );
}
