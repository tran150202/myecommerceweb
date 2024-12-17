import ProductPage from "@/app/(store)/product/[slug]/pages"; // Import component hiển thị trang chi tiết sản phẩm
import { imageUrl } from "@/lib/imageUrl"; // Import hàm tạo URL cho hình ảnh
import { Product } from "@/sanity.types"; // Import kiểu dữ liệu Product
import Image from "next/image"; // Import component Image từ Next.js
import { useState } from "react"; // Import hook useState để quản lý state
import FadeInContent from "./FadeInContent";

function ProductThumb({ product }: { product: Product }) {
  // Kiểm tra sản phẩm hết hàng
  const isOutOfStock = product.stock != null && product.stock <= 0;
  const [isOpen, setIsOpen] = useState<boolean>(false); // State để quản lý việc mở/ đóng modal

  // Hàm mở modal khi click
  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(true);
  };

  // Hàm đóng modal
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <FadeInContent className="p-4 bg-white rounded-lg shadow-lg">
        <div
          onClick={openModal}
          className={`group cursor-pointer flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden ${
            isOutOfStock ? "opacity-50" : ""
          }`}
        >
          {/* Container hình ảnh */}
          <div className="relative aspect-square w-full h-full overflow-hidden">
            {/* Hiển thị hình ảnh sản phẩm */}
            {product.image && (
              <Image
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                src={imageUrl(product.image).url()}
                alt={product.name || "Product image"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
            {/* Hiển thị lớp che và thông báo khi hết hàng */}
            {isOutOfStock && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <span className="text-white font-bold text-lg">
                  Đã hết hàng
                </span>
              </div>
            )}
          </div>

          {/* Thông tin sản phẩm */}
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 truncate">
              {product.name}
            </h2>
            {/* Hiển thị mô tả sản phẩm */}
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

            {/* Hiển thị giá sản phẩm */}
            <p className="mt-2 text-lg font-bold text-gray-900">
              {product.price != null
                ? `${product.price.toLocaleString("vi-VN")} VND`
                : "N/A"}
            </p>
          </div>
        </div>

        {/* Hiển thị modal khi click */}
        <ProductPage
          isOpen={isOpen}
          closeModal={closeModal}
          product={product}
        />
      </FadeInContent>
    </>
  );
}

export default ProductThumb; // Xuất component ProductThumb
