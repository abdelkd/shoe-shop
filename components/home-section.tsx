import { cn } from "@/lib/utils";
import Link from "next/link";
import { HTMLAttributes } from "react";
import ProductCard, { ProductCardProps } from "./product-card";

type SectionProps = {
  label: string;
  data: ProductCardProps[];
} & HTMLAttributes<HTMLElement>;

export default function Section({
  label,
  data,
  className,
  ...props
}: SectionProps) {
  return (
    <section className={cn("max-w-7xl px-4 py-8", className)} {...props}>
      <h2 className="scroll-m-20 py-6 pb-2 text-5xl font-semibold tracking-tight first:mt-0">
        {label}
      </h2>
      <div className="gap-10 mt-4 grid grid-cols-fluid-products">
        {data.length > 0
          ? data.map((product) => (
              <Link key={product.id} href={"/product/" + product.id}>
                <ProductCard {...product} />
              </Link>
            ))
          : null}
      </div>
    </section>
  );
}
