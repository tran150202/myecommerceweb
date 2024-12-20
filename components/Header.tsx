"use client";

import {
  ClerkLoaded,
  SignedIn,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import useBasketStore from "@/store/store";
import FlyoutMenus from "./FlyoutMenus";
import MobileMenu from "./MobileMenu";

function Header() {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const { user } = useUser();
  const itemCount = useBasketStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-10
        transition-all duration-300 ease-in-out
        ${
          isShrunk ? "bg-white/90 shadow-md backdrop-blur-sm" : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-black text-blue-600 
            transition-transform hover:scale-105 hover:text-blue-700"
          >
            TRAN
          </Link>

          {/* Navigation Menus on Large Screens */}
          <div className="hidden lg:flex items-center space-x-6">
            <FlyoutMenus />
          </div>

          {/* Search Section */}
          <div className="flex-grow mx-4 hidden md:block">
            <div className="relative">
              <form action="/search" className="w-full max-w-md mx-auto">
                <div className="relative">
                  <MagnifyingGlassIcon
                    className="absolute left-3 top-1/2 -translate-y-1/2 
                    w-5 h-5 text-gray-400"
                  />
                  <input
                    type="text"
                    name="query"
                    placeholder="Tìm sản phẩm"
                    className="w-full pl-10 pr-4 py-2 
                    bg-gray-100 rounded-full 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 
                    transition-all duration-300"
                  />
                </div>
              </form>
            </div>
          </div>

          {/* User & Cart Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setIsSearchVisible(!isSearchVisible)}
              className="md:hidden text-gray-600 hover:text-blue-600"
            >
              <MagnifyingGlassIcon className="w-6 h-6" />
            </button>

            {/* User Authentication */}
            <ClerkLoaded>
              {user ? (
                <div className="flex items-center space-x-2">
                  <UserButton />
                  <div className="hidden sm:block">
                    <p className="text-xs text-gray-400">Chào mừng</p>
                    <p className="text-sm font-semibold">{user.fullName}</p>
                  </div>
                </div>
              ) : (
                <div className="hidden lg:flex items-center space-x-4">
                  <SignInButton mode="modal" />
                  <SignUpButton mode="modal" />
                </div>
              )}
            </ClerkLoaded>

            {/* Shopping Cart */}
            <Link href="/basket" className="relative group flex items-center">
              <ShoppingBagIcon
                className="w-6 h-6 text-gray-500 
                group-hover:text-blue-600 transition-colors"
              />
              {itemCount > 0 && (
                <span
                  className="absolute -top-2 -right-2 
                  bg-red-500 text-white text-xs rounded-full 
                  w-5 h-5 flex items-center justify-center"
                >
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <MobileMenu />
          </div>
        </div>

        {/* Mobile Search Dropdown */}
        {isSearchVisible && (
          <div className="md:hidden px-4 pb-4 z-30">
            <form action="/search" className="w-full">
              <input
                type="text"
                name="query"
                placeholder="Tìm sản phẩm"
                className="w-full px-4 py-2 
                bg-gray-100 rounded-full 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </form>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
