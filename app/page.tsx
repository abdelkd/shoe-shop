import Image from "next/image";
import Hero from "../public/images/Hero.webp";
import { Button } from "@/components/ui/button";
import Section from "@/components/home-section";

export default function Home() {
  const shoes = [{}, {}, {}, {}];

  return (
    <main className="flex flex-col justify-center max-w-7xl mx-auto">
      <section className="pt-44 text-center relative h-dvh flex flex-col items-center w-full">
        <Image
          src={Hero}
          alt="Flying white shoe with white background"
          className="absolute w-screen h-full top-0 left-0 object-fit z-0"
        />
        <h1 className="text-white z-10 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Welcome to ShoeShop
        </h1>
        <p className="z-10 max-w-lg mx-auto font-medium leading-7 [&:not(:first-child)]:mt-6 text-gray-100 font-semibold">
          Discover our latest collection of shoes
        </p>
        <div className="m-10" />
        <Button className="text-slate-50 bg-black">Shop Now</Button>
      </section>
      <Section label="Featured Shoes" data={shoes} />
      <Section label="New Arrivals" data={shoes} className="bg-orange-200/60" />
      <Section label="Best Sellers" data={shoes} />
    </main>
  );
}
