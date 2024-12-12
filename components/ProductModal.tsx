// components/ProductModal.tsx
"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import AddToBasketButton from "@/components/AddToBasketButton";
import { imageUrl } from "@/lib/imageUrl";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/sanity.types";

interface ProductModalProps {
  isOpen: boolean;
  closeModal: () => void;
  product: Product;
}

const ProductModal = ({ isOpen, closeModal, product }: ProductModalProps) => {
  const isOutOfStock = product.stock != null && product.stock <= 0;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        {/* Background overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-400"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-6">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0 scale-90"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-400"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-90"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-3xl bg-white p-8 shadow-2xl transition-all">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Product Image */}
                  <div
                    className={`relative aspect-square overflow-hidden rounded-2xl shadow-lg ${
                      isOutOfStock ? "opacity-50" : ""
                    }`}
                  >
                    {product.image && (
                      <Image
                        src={imageUrl(product.image).url()}
                        alt={product.name ?? "Product image"}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    )}
                    {isOutOfStock && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
                        <span className="text-white font-bold text-2xl">
                          Hết hàng
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h1 className="text-4xl font-bold mb-6 text-gray-800">
                        {product.name}
                      </h1>
                      <div className="text-2xl font-semibold mb-6 text-gray-700">
                        {product.price?.toLocaleString("vi-VN")} VND
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      <AddToBasketButton
                        product={product}
                        disabled={isOutOfStock}
                      />
                      <div className="flex gap-4">
                        <Link
                          href="/basket"
                          className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 ease-out transform hover:scale-105 text-center text-lg font-medium shadow-md hover:shadow-lg"
                        >
                          Vào giỏ hàng
                        </Link>
                        <button
                          onClick={closeModal}
                          className="w-full bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300 ease-out transform hover:scale-105 text-center text-lg font-medium shadow-md hover:shadow-lg"
                        >
                          Đóng
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProductModal;
