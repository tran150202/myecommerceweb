import ProductPage from "@/app/(store)/product/[slug]/pages"; // Import component hiển thị trang chi tiết sản phẩm
import { imageUrl } from "@/lib/imageUrl"; // Import hàm tạo URL cho hình ảnh
import { Product } from "@/sanity.types"; // Import kiểu dữ liệu Product
import Image from "next/image"; // Import component Image từ Next.js
import { useState } from "react"; // Import hook useState để quản lý state
import FadeInContent from "./FadeInContent"; // Component bao bọc có hiệu ứng fade-in
import Pagination from "./Pagination";

function ProductThumb({ product }: { product: Product }) {
  // Kiểm tra sản phẩm hết hàng
  const isOutOfStock = product.stock != null && product.stock <= 0;

  // State quản lý modal
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Hàm mở modal khi click
  const openModal = (e: React.MouseEvent) => {
    e.preventDefault(); // Ngăn chặn hành động mặc định
    setIsOpen(true); // Mở modal
  };

  // Hàm đóng modal
  const closeModal = () => setIsOpen(false); // Đóng modal

  return (
    <>
      <FadeInContent className="p-4 bg-white rounded-lg shadow-lg">
        {/* Container sản phẩm, có hiệu ứng hover */}
        <div
          onClick={openModal} // Mở modal khi click vào sản phẩm
          className={`group cursor-pointer flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden ${isOutOfStock ? "opacity-50" : ""}`}
        >
          {/* Hiển thị hình ảnh sản phẩm */}
          <div className="relative aspect-square w-full h-full overflow-hidden">
            {product.image && (
              <Image
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                src={imageUrl(product.image).url()} // Lấy URL hình ảnh
                alt={product.name || "Product image"} // Mô tả hình ảnh sản phẩm
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}

            {/* Hiển thị thông báo hết hàng */}
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
            </h2>{" "}
            {/* Tên sản phẩm */}
            <p className="mt-2 text-sm text-gray-600 line-clamp-2">
              {/* Mô tả sản phẩm */}
              {Array.isArray(product.description)
                ? product.description
                    .map((block) =>
                      block._type === "block"
                        ? block.children
                            ?.map((child) => child.text || "")
                            .join("") // Xử lý mảng mô tả
                        : ""
                    )
                    .join("") || "No description available" // Nếu không có mô tả, hiển thị "No description available"
                : product.description || "No description available"}
            </p>
            {/* Hiển thị giá sản phẩm */}
            <p className="mt-2 text-lg font-bold text-gray-900">
              {product.price != null
                ? `${product.price.toLocaleString("vi-VN")} VND` // Định dạng giá theo VND
                : "N/A"}{" "}
              {/* Nếu không có giá, hiển thị "N/A" */}
            </p>
          </div>
        </div>

        {/* Hiển thị modal chi tiết sản phẩm */}
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
