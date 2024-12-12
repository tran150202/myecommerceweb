"use client";

import { ChevronsUpDown, Check } from "lucide-react"; // Các icon dùng cho button và checkbox
import { cn } from "@/lib/utils"; // Hàm hỗ trợ nối class
import { Button } from "@/components/ui/button"; // Button tùy chỉnh
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandInput,
} from "@/components/ui/command"; // Các component Command cho tìm kiếm
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"; // Popover để tạo dropdown
import { Category } from "@/sanity.types"; // Type Category
import { useRouter } from "next/navigation"; // Dùng hook để điều hướng
import { useState } from "react"; // Dùng hook useState để quản lý trạng thái

interface CategorySelectorProps {
  categories: Category[]; // Dữ liệu danh mục được truyền vào từ props
}

export function CategorySelectorComponent({
  categories,
}: CategorySelectorProps) {
  const [open, setOpen] = useState(false); // Quản lý trạng thái mở/đóng Popover
  const [value, setValue] = useState<string>(""); // Lưu giá trị danh mục đã chọn
  const router = useRouter(); // Dùng router để điều hướng trang

  return (
    <Popover open={open} onOpenChange={setOpen}>
      {" "}
      {/* Hiển thị Popover khi mở */}
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open ? "true" : "false"}
          className="w-full max-w-full relative flex justify-center sm:justify-start sm:flex-none items-center space-x-3 bg-blue-500 hover:bg-blue-700 hover:text-white text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
        >
          <span>
            {value
              ? categories.find((category) => category._id === value)?.title
              : "Filter by Category"}{" "}
            {/* Hiển thị tên danh mục đã chọn */}
          </span>
          <ChevronsUpDown className="ml-2 h-5 w-5 shrink-0" />{" "}
          {/* Icon cho dropdown */}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        {" "}
        {/* Nội dung Popover */}
        <Command>
          <CommandInput
            placeholder="Tìm kiếm loại ..."
            className="h-9"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                // Tìm kiếm khi nhấn Enter
                const selectedCategory = categories.find(
                  (c) =>
                    c.title
                      ?.toLowerCase()
                      .includes(e.currentTarget.value.toLowerCase()) // Tìm kiếm theo tên danh mục
                );
                if (selectedCategory?.slug?.current) {
                  setValue(selectedCategory._id); // Lưu ID danh mục đã chọn
                  router.push(`/categories/${selectedCategory.slug.current}`); // Điều hướng đến trang danh mục
                  setOpen(false); // Đóng Popover
                }
              }
            }}
          />
          <CommandList>
            <CommandEmpty>Không tìm thấy</CommandEmpty>{" "}
            {/* Hiển thị khi không tìm thấy kết quả */}
            <CommandGroup>
              {categories.map(
                (
                  category // Hiển thị danh sách các danh mục
                ) => (
                  <CommandItem
                    key={category._id}
                    value={category.title}
                    onSelect={() => {
                      setValue(value === category._id ? "" : category._id); // Chọn hoặc bỏ chọn danh mục
                      router.push(`/categories/${category.slug?.current}`); // Điều hướng tới trang danh mục
                      setOpen(false); // Đóng Popover
                    }}
                  >
                    {category.title}
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === category._id ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                )
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
