type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: "/list?gender=male", label: "Men" },
  { href: "/list?gender=female", label: "Women" },
  { href: "f/", label: "New Arrivals" },
  { href: "/", label: "Best Sellers" },
];
