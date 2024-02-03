import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type SectionCardProps = {
  imageUrl?: string;
  name?: string;
  price?: string;
};

const SectionCard = ({ imageUrl, name, price }: SectionCardProps) => {
  return (
    <div className="w-64 rounded-lg border overflow-hidden shadow-sm">
      <div className="w-full h-56 bg-gray-400"></div>
      <div className="px-4 py-2 bg-background">
        <p className="text-2xl font-semibold">Shoe 1</p>
        <p className="text-lg text-gray-500">$120</p>
      </div>
    </div>
  );
};

type SectionProps = {
  label: string;
  data: SectionCardProps[];
} & HTMLAttributes<HTMLElement>;

export default function Section({ label, className, ...props }: SectionProps) {
  return (
    <section className={cn("max-w-7xl px-4 py-8", className)} {...props}>
      <h2 className="scroll-m-20 py-6 pb-2 text-5xl font-semibold tracking-tight first:mt-0">
        {label}
      </h2>
      <div className="flex gap-10 mt-4">
        <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard />
      </div>
    </section>
  );
}
