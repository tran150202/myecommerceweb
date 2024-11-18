import ProductsGrid from "@/components/ProductsGrid";
import { searchProductsByName } from "@/sanity/lib/products/searchProductsByName";

async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{
    query: string;
  }>;
}) {
  const { query } = await searchParams;
  const products = await searchProductsByName(query);

  if (!products.length) {
    return (
      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-1oo p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
          <h1 className="text-3xl font-bold md-6 text-center">
            Không có sản phẩm: {query}
          </h1>
          <p className="text-gray-600 text-center">Hãy tìm kiếm từ khác</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-0 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-3xl font-bold md-6 text-center">
          Kết quả tìm kiếm: {query}
        </h1>
        <ProductsGrid products={products} />
      </div>
    </div>
  );
}

export default SearchPage;
