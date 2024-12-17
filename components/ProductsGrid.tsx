"use client"; // Đảm bảo mã này chạy phía client trong ứng dụng Next.js

import { useState } from "react"; // Import useState để quản lý trạng thái trang
import { Product } from "@/sanity.types"; // Import kiểu dữ liệu Product
import { AnimatePresence, motion } from "framer-motion"; // Import framer-motion cho hiệu ứng chuyển động
import ProductThumb from "./ProductThumb"; // Import component hiển thị từng sản phẩm
import Pagination from "./Pagination"; // Import component phân trang

function ProductsGrid({ products }: { products: Product[] }) {
  const productsPerPage = 16; // Số sản phẩm mỗi trang
  const [currentPage, setCurrentPage] = useState(1); // Trạng thái trang hiện tại

  // Tính toán các sản phẩm cần hiển thị cho trang hiện tại
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Tổng số trang
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Hàm chuyển trang
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Hiển thị sản phẩm */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {currentProducts.map((product) => (
          <AnimatePresence key={product._id}>
            {/* Hiệu ứng chuyển động */}
            <motion.div
              layout // Kích hoạt hiệu ứng chuyển động layout
              initial={{ opacity: 0.2 }} // Đặt độ mờ ban đầu của sản phẩm
              animate={{ opacity: 1 }} // Đặt độ mờ khi sản phẩm hiển thị
              exit={{ opacity: 0 }} // Đặt độ mờ khi sản phẩm bị xóa
              className="flex justify-center"
            >
              {/* Hiển thị thông tin sản phẩm với ProductThumb */}
              <ProductThumb key={product._id} product={product} />
            </motion.div>
          </AnimatePresence>
        ))}
      </div>

      {/* Hiển thị phân trang */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
      />
    </div>
  );
}

export default ProductsGrid;
