import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { PropsWithChildren } from "react";

interface FooterLinkProps extends PropsWithChildren {
  href: string;
}

const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <li>
      <Link href={href} className={buttonVariants({ variant: "link" })}>
        {children}
      </Link>
    </li>
  );
};

export default function Footer() {
  return (
    <footer className="px-5 py-3 max-w-7xl mx-auto flex justify-end border-border border-t">
      <ul className="flex font-medium">
        <FooterLink href="/about-us">About us</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
        <FooterLink href="/policies">Policies</FooterLink>
      </ul>
    </footer>
  );
}
