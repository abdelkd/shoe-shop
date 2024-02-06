"use client";

import { FormEvent, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { XIcon, Search as SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const toggleState = () => setIsSearching((prev) => !prev);

  if (!isSearching) {
    return (
      <Button
        variant={"ghost"}
        className="hover:bg-orange-200/70"
        onClick={() => {
          inputRef.current?.focus();
          toggleState();
        }}
      >
        <SearchIcon />
      </Button>
    );
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query === "") {
      return;
    }

    const path = "/list?query=" + query;
    router.push(path);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative z-10">
        <Input
          ref={inputRef}
          className="pr-8"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <XIcon
          className="absolute h-5 w-5 right-2 top-1/2 -translate-y-1/2"
          onClick={toggleState}
        />
      </div>
    </form>
  );
};

export default Search;
