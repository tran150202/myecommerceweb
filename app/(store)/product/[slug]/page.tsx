import AddToBasketButton from "@/components/AddToBasketButton";
import { imageUrl } from "@/lib/imageUrl";
import { getProductBySlug } from "@/sanity/lib/products/getProductBySlug";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return notFound();
  }

  const isOutOfStock = product.stock != null && product.stock <= 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className={`relative aspect-square overflow-hidden rounded-lg shadow-lg ${
            isOutOfStock ? "opacity-50" : ""
          }`}
        >
          {product.image && (
            <Image
              src={imageUrl(product.image).url()}
              alt={product.name ?? "Product image"}
              fill
              className="object-contain transition-transform duration-300 hover:scale-105"
            />
          )}
          {isOutOfStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <span className="text-white font-bold text-lg">Hết hàng</span>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="text-xl font-semibold mb-4">
              {product.price?.toLocaleString("vi-VN")} VND
            </div>
            <div className="prose max-w-none mb-6">
              {Array.isArray(product.description) ? (
                <PortableText value={product.description} />
              ) : (
                <p>{product.description || "No description available"}</p>
              )}
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <AddToBasketButton product={product} disabled={isOutOfStock} />
            <div className="flex gap-4">
              <Link
                href="/basket"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 text-center"
              >
                Vào giỏ hàng
              </Link>
              <Link
                href="/"
                className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 text-center"
              >
                Trở về
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
