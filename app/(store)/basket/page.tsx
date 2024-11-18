"use client";
import {
  createCheckoutSession,
  Metadata,
} from "@/actions/createCheckoutSession";
import AddToBasketButton from "@/components/AddToBasketButton";
import Loader from "@/components/Loader";
import { imageUrl } from "@/lib/imageUrl";
import useBasketStore from "@/store/store";
import { SignInButton, useAuth, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

function BasketPage() {
  const groupedItems = useBasketStore((state) => state.getGroupedItems());
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Loader />;
  }

  if (groupedItems.length === 0) {
    return (
      <div className="container mx-auto p-6 flex flex-col items-center justify-center min-h-[50vh] bg-gray-100 rounded-md shadow-md">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800">
          Giỏ hàng của tôi
        </h1>
        <p className="text-lg text-gray-600">Giỏ hàng của bạn đang trống.</p>
      </div>
    );
  }

  const handleCheckout = async () => {
    if (!isSignedIn) return;
    setIsLoading(true);

    try {
      const metadata: Metadata = {
        orderNumber: crypto.randomUUID(),
        customerNumber: user?.fullName ?? "Unknown",
        customerEmail: user?.emailAddresses[0].emailAddress ?? "Unknown",
        clerkUserId: user!.id,
      };
      const checkoutUrl = await createCheckoutSession(groupedItems, metadata);
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Giỏ hàng của tôi
      </h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow">
          {groupedItems.map((item) => (
            <div
              key={item.product._id}
              className="mb-6 p-4 bg-white rounded-md border border-gray-200 shadow-lg flex items-center justify-between"
            >
              <div
                className="flex items-center cursor-pointer min-w-0"
                onClick={() =>
                  router.push(`/product/${item.product.slug?.current}`)
                }
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 mr-4">
                  {item.product.image && (
                    <Image
                      src={imageUrl(item.product.image).url()}
                      alt={item.product.name ?? "Product image"}
                      className="w-full h-full object-cover rounded"
                      width={96}
                      height={96}
                    />
                  )}
                </div>
                <div className="min-w-0">
                  <h2 className="text-lg sm:text-xl font-semibold truncate text-gray-900">
                    {item.product.name}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-700 mt-1">
                    Giá:{" "}
                    <span className="font-semibold text-gray-900">
                      {(
                        (item.product.price ?? 0) * item.quantity
                      ).toLocaleString("vi-VN")}{" "}
                      VND
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center ml-4 flex-shrink-0">
                <AddToBasketButton product={item.product} />
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-80 lg:sticky lg:top-4 h-fit bg-white p-6 border rounded-lg shadow-lg lg:order-last">
          <h3 className="text-xl font-semibold text-gray-800">Tổng số tiền</h3>
          <div className="mt-4 space-y-2">
            <p className="flex justify-between text-gray-700">
              <span>Số hàng đã mua</span>
              <span>
                {groupedItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </p>
            <p className="flex justify-between text-2xl font-bold border-t pt-2 text-gray-900">
              <span>Tổng: </span>
              <span>
                {useBasketStore
                  .getState()
                  .getTotalPrice()
                  .toLocaleString("vi-VN")}{" "}
                VND
              </span>
            </p>
          </div>
          {isSignedIn ? (
            <button
              onClick={handleCheckout}
              disabled={isLoading}
              className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-all duration-200 disabled:bg-gray-400"
            >
              {isLoading ? "Đang xử lý..." : "Thanh toán"}
            </button>
          ) : (
            <SignInButton mode="modal">
              <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-all duration-200">
                Đăng nhập để thanh toán
              </button>
            </SignInButton>
          )}
        </div>
      </div>
    </div>
  );
}

export default BasketPage;
