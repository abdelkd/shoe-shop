import Image from "next/image";
import Hero from "../public/images/Hero.jpeg";
import { Button } from "@/components/ui/button";
import Featured from "@/components/featured";
import Section from "@/components/home-section";
import NewArrivals from "@/components/new-arrivals";

export default function Home() {
  const shoes = [{}, {}, {}, {}];

  return (
    <main className="flex flex-col justify-center max-w-7xl mx-auto">
      <section className="border border-red-300 pt-44 text-center relative h-dvh flex flex-col items-center w-full">
        {/* <Image 
            src={Hero} 
            alt="Flying white shoe with white background" 
            className="absolute w-full h-full top-0 left-0 object-fit"
            layout="fill"
            objectFit="cover"
            objectPosition="center" /> */}
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Welcome to ShoeShop
        </h1>
        <p className="max-w-lg mx-auto font-medium leading-7 [&:not(:first-child)]:mt-6 text-gray-500">
          Discover our latest collection of shoes
        </p>
        <div className="m-10" />
        <Button className="text-slate-50 bg-black">Shop Now</Button>
      </section>
      <Section label="Featured Shoes" data={shoes} />
      <Section label="New Arrivals" data={shoes} className="bg-gray-300" />
      <Section label="Best Sellers" data={shoes} />
    </main>
  );
}
