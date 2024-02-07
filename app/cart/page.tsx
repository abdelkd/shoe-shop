"use client";

import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks/store-hooks";
import { remove } from "@/services/state/slices/cart";
import { Trash } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";

type ProductProps = {
  id: string;
  name: string;
  imageUrl: string;
};

const Product = ({ id, name, imageUrl }: ProductProps) => {
  const dispatch = useAppDispatch();

  const removeProduct = () => {
    dispatch(remove({ id }));
  };

  return (
    <div className="flex gap-3 px-5 my-4">
      <Image
        src={imageUrl}
        alt={name}
        height={256}
        width={256}
        className="h-24 w-24 bg-gray-500 rounded-md object-cover"
      />
      <div className="pt-3">
        <h4 className="text-xl font-medium">{name}</h4>
      </div>
      <div className="ml-auto flex flex-col items-center gap-2">
        <p className="mt-2 text-gray-600 text-lg">$123</p>
        <Button variant="destructive" onClick={removeProduct}>
          <Trash />
        </Button>
      </div>
    </div>
  );
};

export default function Cart() {
  const products = useAppSelector((state) => state.cart.products);

  return (
    <main className="w-screen max-w-md mx-auto lg:max-w-xl py-7 px-8">
      <h3 className="border-b pb-2 mb-3 text-4xl font-semibold">Cart:</h3>
      <div className="w-full bg-slate-50 px-2 py-4 rounded-lg flex flex-col justify-center gap-4">
        <Suspense fallback={<p>loading...</p>}>
          {products.length > 0 ? (
            products.map((product, i) => (
              <Product key={product.id.concat(" ", String(i))} {...product} />
            ))
          ) : (
            <p className="mx-auto text-2xl">Your Cart is Empty</p>
          )}
        </Suspense>
      </div>
    </main>
  );
}
