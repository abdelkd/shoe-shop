import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Search, ShoppingBag } from "lucide-react";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

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
    <header className="w-full border-b border-border">
      <nav className="max-w-7xl px-4 py-1 h-14 flex items-center justify-between mx-auto">
        <div>
          <p className="text-xl font-bold">ShoeShop</p>
        </div>

        <ul className="flex items-center gap-6 font-semibold">
          <NavLink href="/">Men</NavLink>
          <NavLink href="/">Women</NavLink>
          <NavLink href="/">New Arrivals</NavLink>
          <NavLink href="/">Best Sellers</NavLink>
        </ul>

        <div className="flex gap-3">
          <Button variant={"ghost"} className="hover:bg-orange-200/70">
            <Search />
          </Button>
          <Link
            href="/cart"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "hover:bg-orange-200/70",
            )}
          >
            <ShoppingBag />
            <span className="ml-2 text-md font-semibold">{"( 0 )"}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
