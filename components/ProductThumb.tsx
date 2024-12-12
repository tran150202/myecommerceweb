import ProductPage from "@/app/(store)/product/[slug]/pages";
import { imageUrl } from "@/lib/imageUrl";
import { Product } from "@/sanity.types";
import Image from "next/image";
import { useState } from "react";

function ProductThumb({ product }: { product: Product }) {
  const isOutOfStock = product.stock != null && product.stock <= 0;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div
        onClick={openModal}
        className={`group cursor-pointer flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden ${
          isOutOfStock ? "opacity-50" : ""
        }`}
      >
        <div className="relative aspect-square w-full h-full overflow-hidden">
          {product.image && (
            <Image
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              src={imageUrl(product.image).url()}
              alt={product.name || "Product image"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          {isOutOfStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <span className="text-white font-bold text-lg">Hết hàng</span>
            </div>
          )}
        </div>

        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 truncate">
            {product.name}
          </h2>
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
            {Array.isArray(product.description)
              ? product.description
                  .map((block) =>
                    block._type === "block"
                      ? block.children
                          ?.map((child) => child.text || "")
                          .join("")
                      : ""
                  )
                  .join("") || "No description available"
              : product.description || "No description available"}
          </p>

          <p className="mt-2 text-lg font-bold text-gray-900">
            {product.price != null
              ? `${product.price.toLocaleString("vi-VN")} VND`
              : "N/A"}
          </p>
        </div>
      </div>

      {/* Hiển thị modal khi click */}
      <ProductPage isOpen={isOpen} closeModal={closeModal} product={product} />
    </>
  );
}

export default ProductThumb;
