import Link from "next/link";
import { prisma } from "@/lib/db";
import ProductCard from "@/components/product-card";
import { Suspense } from "react";

type PageProps = {
  params: {};
  searchParams: {
    [key: string]: string | string | undefined;
  };
};

async function SearchList({ params, searchParams }: PageProps) {
  let gender = searchParams?.gender;
  let query = searchParams?.query ?? "";

  if (gender !== "male" && gender !== "female") {
    gender = "male";
  }

  const products = await prisma?.product.findMany({
    where: {
      // @ts-expect-error Unmatch string and Enum
      audience: gender.toUpperCase(),
      name: {
        contains: query,
      },
    },
  });

  return (
    <main className="max-w-7xl mx-auto py-10 grid grid-cols-fluid-products gap-4 gap-y-6">
      {products !== undefined
        ? products?.map((product) => (
            <Link key={product.id} href={"/product/" + product.id}>
              <ProductCard {...product} />
            </Link>
          ))
        : null}
    </main>
  );
}

export default function ListPage({ params, searchParams }: PageProps) {
  return (
    <Suspense>
      <SearchList params={params} searchParams={searchParams} />
    </Suspense>
  );
}
