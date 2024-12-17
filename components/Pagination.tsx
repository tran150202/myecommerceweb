import { FC } from "react";

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
  return (
    <div className="mt-6 flex justify-center items-center space-x-4">
      {/* Nút trang trước */}
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-6 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50 transition duration-300 transform hover:bg-gray-700 hover:scale-105"
      >
        Trang trước
      </button>

      {/* Hiển thị trang hiện tại và tổng số trang */}
      <span className="font-medium text-gray-800 text-lg">
        Trang {currentPage} / {totalPages}
      </span>

      {/* Nút trang tiếp theo */}
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-6 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50 transition duration-300 transform hover:bg-gray-700 hover:scale-105"
      >
        Trang tiếp theo
      </button>
    </div>
  );
};

export default Pagination;
