import Image from "next/image";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import ProductInfo from "@/components/product-info";
import loadApiImage from "@/lib/loadApiImage";

type ProductPageParams = {
  params: {
    productId: string;
  };
};

export default async function ProductPage({ params }: ProductPageParams) {
  const product = await prisma.product.findFirst({
    where: {
      id: params.productId,
    },
  });

  if (!product) {
    return redirect("/");
  }

  return (
    <main className="max-w-md grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 md:max-w-7xl mx-auto pt-7">
      <Image
        loader={loadApiImage}
        src={product.imageId}
        alt={product.name}
        height={500}
        width={500}
        className="h-[30rem] w-full object-cover"
      />
      <div className="pt-6 px-10 h-full flex flex-col justify-between py-8">
        <ProductInfo {...product} />
      </div>
    </main>
  );
}
