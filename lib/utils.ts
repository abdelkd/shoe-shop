import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// conver from color to tailwind class
export function colorToTw(color: string) {
  if (color === "white" || color === "black") {
    return `bg-${color}`;
  }

  return `bg-${color}-500`;
}
