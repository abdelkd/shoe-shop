import Image from "next/image";
import { Suspense } from "react";

import { prisma } from "@/lib/db";
import Hero from "../public/images/Hero.webp";
import { Button } from "@/components/ui/button";
import Section from "@/components/home-section";

const FeaturedShoes = async () => {
  const shoes =
    (await prisma?.product.findMany({
      take: 4,
      orderBy: {
        visits: "desc",
      },
    })) ?? [];

  return <Section label="Featured Shoes" data={shoes} />;
};

const NewArrivals = async () => {
  const newArrivals =
    (await prisma?.product.findMany({
      take: 4,
      orderBy: {
        addedOn: "desc",
      },
    })) ?? [];

  return (
    <Section
      label="New Arrivals"
      data={newArrivals}
      className="bg-orange-200/60"
    />
  );
};

const BestSellers = async () => {
  const bestSellers =
    (await prisma?.product.findMany({
      take: 4,
      orderBy: {
        visits: "desc",
      },
    })) ?? [];

  return <Section label="Best Sellers" data={bestSellers} />;
};

export default function Home() {
  return (
    <main className="flex flex-col justify-center max-w-7xl mx-auto">
      <section className="pt-44 text-center relative h-dvh flex flex-col items-center w-full">
        <Image
          src={Hero}
          alt="Flying white shoe with white background"
          className="absolute w-screen h-full top-0 left-0 object-cover z-0"
        />
        <h1 className="text-white z-10 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Welcome to ShoeShop
        </h1>
        <p className="z-10 max-w-lg mx-auto leading-7 [&:not(:first-child)]:mt-6 text-gray-100 font-semibold">
          Discover our latest collection of shoes
        </p>
        <div className="m-10" />
      </section>
      <Suspense fallback={<p>loading...</p>}>
        <FeaturedShoes />
      </Suspense>
      <Suspense fallback={<p>loading...</p>}>
        <NewArrivals />
      </Suspense>
      <Suspense fallback={<p>loading...</p>}>
        <BestSellers />
      </Suspense>
    </main>
  );
}
