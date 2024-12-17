"use client"; // Đánh dấu đây là component client-side cho Next.js.

import {
  ClerkLoaded,
  SignedIn,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs"; // Tích hợp xác thực với Clerk.
import Link from "next/link"; // Điều hướng giữa các trang.
import Form from "next/form"; // Form tìm kiếm.
import useBasketStore from "@/store/store"; // Trạng thái giỏ hàng.
import FlyoutMenus from "./FlyoutMenus";
import { Bars3Icon, ShoppingBagIcon } from "@heroicons/react/16/solid";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";

function Header() {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { user } = useUser(); // Lấy thông tin người dùng đã đăng nhập.
  const itemCount = useBasketStore(
    (state) => state.items.reduce((total, item) => total + item.quantity, 0) // Tính tổng số sản phẩm trong giỏ hàng.
  );
  const [open, setOpen] = useState(false);
  const newLocal = "text";
  return (
    <div>
      <header className="">
        <nav aria-label="Top" className="max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="">
            {/* Dòng trên cùng */}
            <div className="flex h-16 items-center">
              {/* Logo và liên kết đến trang chủ */}
              <Link
                href="/"
                className="text-2xl font-bold text-blue-500 hover:opacity-50 cursor-pointer mx-auto sm:mx-0"
              >
                TRAN
              </Link>
              {/* Flyout menus */}
              <FlyoutMenus />{" "}
              {/* Hiển thị menu thả xuống khi trên màn hình lớn */}
              {/* Form tìm kiếm */}
              <Form
                action="/search"
                className="sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
              >
                <input
                  type={newLocal}
                  name="query"
                  placeholder="Tìm sản phẩm"
                  className="bg-gray-100 px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border w-full max-w-4xl"
                />
              </Form>
              {/* Phần giỏ hàng và user */}
              {/* Người dùng */}
              <ClerkLoaded>
                {/* Kiểm tra đăng nhập */}

                {/* Hiển thị tên người dùng nếu đã đăng nhập */}
                {user ? (
                  <div className="flex items-center space-x-2 ml-0 sm:ml-0">
                    <div> </div>
                    <UserButton /> {/* Nút profile người dùng */}
                    <div className="hidden sm:block text-xs">
                      <p className="text-gray-400">Chào mừng</p>
                      <p className="font-bold">{user.fullName}!</p>
                    </div>
                  </div>
                ) : (
                  // Nút đăng nhập nếu chưa đăng nhập
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 text-sm font-bold text-gray-700">
                    <SignInButton mode="modal" />
                    <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                    <SignUpButton mode="modal" />
                  </div>
                )}
              </ClerkLoaded>
              {/* Giỏ hàng */}
              <div className="ml-4 flow-root lg:ml-6">
                <a href="/basket" className="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon
                    aria-hidden="true"
                    className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    {itemCount}
                  </span>
                  <span className="sr-only">items in cart, view bag</span>
                </a>
              </div>
              <MobileMenu />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header; // Xuất component Header.
