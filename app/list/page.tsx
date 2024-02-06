import Link from "next/link";
import { prisma } from "@/lib/db";
import ProductCard from "@/components/product-card";

type PageProps = {
  params: {};
  searchParams: {
    [key: string]: string | string | undefined;
  };
};

function Product() {
  return (
    <div className="w-60 h-72 shadow-md rounded-md overflow-hidden">
      <div className="w-full h-48 bg-gray-500" />
      <div className="mx-6 my-2">
        <h3>Product</h3>
        <p>$123</p>
      </div>
    </div>
  );
}

export default async function ListPage({ params, searchParams }: PageProps) {
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
