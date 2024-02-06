import Image from "next/image";

export type ProductCardProps = {
  id?: string;
  imageId?: string;
  name?: string;
  price?: number;
};

const ProductCard = ({ imageId, name, price }: ProductCardProps) => {
  const imageUrl = `/api/image/${imageId}`;

  return (
    <div className="w-64 rounded-lg border overflow-hidden shadow-sm mx-auto">
      <Image
        src={imageUrl}
        alt={name ?? ""}
        width={256}
        height={256}
        className="object-cover w-full h-56"
      />
      {/* <div className="w-full h-56 bg-gray-400"></div> */}
      <div className="px-4 py-2 bg-background">
        <p className="text-2xl font-semibold">{name}</p>
        <p className="text-lg text-gray-500 font-medium">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
