import { FC } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  paginate,
}) => {
  // Tạo mảng các số trang để hiển thị
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5; // Số lượng nút số trang hiển thị

    if (totalPages <= maxVisible) {
      // Nếu tổng số trang ít hơn maxVisible, hiển thị tất cả
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Luôn hiển thị trang đầu
      pages.push(1);

      // Tính toán range hiển thị xung quanh trang hiện tại
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      // Thêm dấu ... nếu cần
      if (start > 2) {
        pages.push("...");
      }

      // Thêm các trang ở giữa
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      // Thêm dấu ... nếu cần
      if (end < totalPages - 1) {
        pages.push("...");
      }

      // Luôn hiển thị trang cuối
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="mt-8 flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-2">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
          aria-label="Trang trước"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-1">
          {getPageNumbers().map((page, index) =>
            page === "..." ? (
              <span key={`ellipsis-${index}`} className="px-2">
                ...
              </span>
            ) : (
              <button
                key={`page-${page}`}
                onClick={() => typeof page === "number" && paginate(page)}
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium
                  transition-all duration-200
                  ${
                    currentPage === page
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "text-gray-600 hover:bg-gray-100"
                  }
                `}
              >
                {page}
              </button>
            )
          )}
        </div>

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
          aria-label="Trang tiếp theo"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="text-sm text-gray-500">
        Trang {currentPage} trên {totalPages}
      </div>
    </div>
  );
};

export default Pagination;
