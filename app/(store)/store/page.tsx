import ProductsView from "@/components/ProductsView";
import SaleBanner from "@/components/SaleBanner";
import { GetAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export const dynamic = "force-static";
export const revalidate = 60;
export default async function ProductViewPage() {
  const products = await getAllProducts();
  const categories = await GetAllCategories();

  console.log(
    crypto.randomUUID().slice(0, 5) +
      `>>> Rerendered the product page cache with ${products.length} products and ${categories.length} categories`
  );

  return (
    <div>
      <SaleBanner />
      <main className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
        <ProductsView products={products} categories={categories} />
      </main>
    </div>
  );
}
