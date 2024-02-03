import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Search, ShoppingBag, ShoppingCart } from "lucide-react";

export default function MainNav() {
  return (
    <header className="w-full border-b border-border">
      <nav className="max-w-7xl px-4 py-1 h-14 flex items-center justify-between mx-auto">
        <div>
          <p className="text-xl font-bold">ShoeShop</p>
        </div>

        <ul className="flex items-center gap-6 font-semibold">
          <li>
            <Link className={buttonVariants({ variant: "link" })} href={"/"}>
              Men
            </Link>
          </li>
          <li>
            <Link className={buttonVariants({ variant: "link" })} href={"/"}>
              Women
            </Link>
          </li>
          <li>
            <Link className={buttonVariants({ variant: "link" })} href={"/"}>
              New Arrivals
            </Link>
          </li>
          <li>
            <Link className={buttonVariants({ variant: "link" })} href={"/"}>
              Best Sellers
            </Link>
          </li>
        </ul>

        <div className="flex gap-3">
          <Button variant={"ghost"}>
            <Search />
          </Button>
          <Button variant={"ghost"}>
            <ShoppingBag />
            <span className="ml-2 text-md font-semibold">{"( 0 )"}</span>
          </Button>
        </div>
      </nav>
    </header>
  );
}
