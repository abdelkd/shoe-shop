import CartList from "@/components/cart-list";

export default async function Cart() {
  return (
    <main className="w-screen max-w-md mx-auto lg:max-w-xl py-7 px-8">
      <h3 className="border-b pb-2 mb-3 text-4xl font-semibold">Cart:</h3>
      <div className="w-full bg-slate-50 px-2 py-4 rounded-lg flex flex-col justify-center gap-4">
        <CartList />
      </div>
    </main>
  );
}
