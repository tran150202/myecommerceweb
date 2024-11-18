"use client";

import {
  ClerkLoaded,
  SignedIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
import useBasketStore from "@/store/store";

function Header() {
  const { user } = useUser();
  const itemCount = useBasketStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  const createClerkPasskey = async () => {
    try {
      const response = await user?.createPasskey();
      console.log(response);
    } catch (error) {
      console.error("Error:", JSON.stringify(error, null, 2));
    }
  };
  return (
    <header className="flex flex-wrap justify-center px-4 py-2">
      {/* TOP ROW  */}
      <div className="flex w-full flex-wrap justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-500 hover:opacity-50 cursor-pointer mx-auto sm:mx-0"
        >
          TRAN
        </Link>
        <Form
          action="/search"
          className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
        >
          <input
            type="text"
            name="query"
            placeholder="Tìm sản phẩm"
            className="bg-gray-100 px-4 py-2 rounded focus: outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border w-full max-w-4xl"
          />
        </Form>

        <div className="flex items-center space-x-4 mt-4 sm:mt-0 flex-1 ms:flex-none">
          <Link
            href="/basket"
            className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            <TrolleyIcon className="w-6 h-6" />
            {/* SPAN ITEM COUNT ONCE GLOBAL STATE IS IMPLEMENTED  */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {itemCount}
            </span>
            <span>Giỏ hàng</span>
          </Link>
          {/* USER */}
          <ClerkLoaded>
            <SignedIn>
              <Link
                href="/orders"
                className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                <PackageIcon className="w-6 h-6" />
                <span>Hóa đơn</span>
              </Link>
            </SignedIn>
            {/* <SignedIn>
              <Link
                href="/studio"
                target="_blank"
                className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                <PackageIcon className="w-6 h-6" />
                <span>Quản lý</span>
              </Link>
            </SignedIn> */}
            {user ? (
              <div className="flex items-center space-x-2">
                <UserButton />
                <div className="hidden sm:block text-xs">
                  <p className="text-gray-400">Chào mừng trở lại</p>
                  <p className="font-bold">{user.fullName}!</p>
                </div>
              </div>
            ) : (
              <div className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                <SignInButton mode="modal">Đăng nhập</SignInButton>
              </div>
            )}
            {/* {user?.passkeys.length === 0 && (
              <button
                onClick={createClerkPasskey}
                className="bg-white hover:bg-blue-700 hover:text-blue animate-pulse text-blue-500 font-bold py-2 px-4 rounded border-blue-300 border"
              >
                Tạo passkey
              </button>
            )} */}
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
}

export default Header;
