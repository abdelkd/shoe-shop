"use client";

export default function loadApiImage({ src, width, quality }: any) {
  return `/api/image/${src}?w=${width}&q=${quality || 75}`;
}
