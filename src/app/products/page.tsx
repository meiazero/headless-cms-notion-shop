import { getProducts } from "@/actions/get-products";
import { CardProduct } from "@/components/CardProduct";
import { Metadata } from "next";

/**
 * Force the page to be static and only change with a new build.
 *
 * read more about the Route Segment Config here:
 * https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
 */
export const dynamic = "force-static";

/**
 * Generate the metadata with dynamic information.
 *
 * Read more about the Dynamic Metadata here:
 * https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export function generateMetadata(): Metadata {
  return {
    title: "Products",
  };
}

export default async function ProductsPage() {
  const productsTest = await getProducts()

  return (
    <main className="min-h-screen">
      <header className="border-b border-zinc-400 py-5">
        <div className="container flex flex-row items-center justify-between">
          <h1 className="text-xl font-extrabold">Products</h1>
        </div>
      </header>
      <div className="container py-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {productsTest.map(product => (
          <CardProduct key={product.title}
            title={product.title}
            description={product.description}
            price={product.price!}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </main>
  );
}
