"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { useAppDispatch } from "@/hooks/store-hooks";
import { add } from "@/services/state/slices/cart";
import { FormEvent, useState } from "react";

type ProductInfoProps = {
  id: string;
  name: string;
  availableSizes: string[];
  availableColors: string[];
  description: string;
  price: number;
  imageId: string;
};

export default function ProductInfo({
  id,
  name,
  imageId,
  availableSizes,
  availableColors,
  description,
  price,
}: ProductInfoProps) {
  const dispatch = useAppDispatch();
  const [size, setSize] = useState<string>(availableSizes[0]);
  const [color, setColor] = useState<string>(availableColors[0]);

  const addToCart = (e: FormEvent) => {
    e.preventDefault();

    dispatch(add({ id, name, imageId, price, quantity: 1, size, color }));
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
          {name}
        </h3>
        <h4 className="text-lg text-gray-600">${price}</h4>

        <div className="my-4">
          <Select onValueChange={(v) => setSize(v)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a size" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sizes</SelectLabel>
                {availableSizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="my-4">
          <Select onValueChange={(v) => setColor(v)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a color" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Colors</SelectLabel>
                {availableColors.map((color) => (
                  <SelectItem value={color} key={color}>
                    {color}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <p className="leading-7">{description}</p>
      </div>

      <Button
        type="submit"
        className="py-6 px-24 text-lg bg-black"
        onClick={addToCart}
      >
        Add to Cart
      </Button>
    </div>
  );
}
