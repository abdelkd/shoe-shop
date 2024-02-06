"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { useAppSelector } from "@/hooks/store-hooks";
import { useEffect } from "react";

export default function ShoppingCart() {
  const cartProducts = useAppSelector((state) => state.cart.products.length);

  return (
    <Link
      href="/cart"
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "hover:bg-orange-200/70",
      )}
    >
      <ShoppingBag />
      <span className="ml-2 text-md font-semibold">{`( ${cartProducts} )`}</span>
    </Link>
  );
}
