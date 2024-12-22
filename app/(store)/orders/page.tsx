import { formatCurrency } from "@/lib/formatCurrency";
import { imageUrl } from "@/lib/imageUrl";
import { getMyOrders } from "@/sanity/lib/orders/getMyOrders";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

async function Orders() {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  const orders = await getMyOrders(userId);

  console.log("orders:", orders);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-4 sm:p-8 rounded-xl shadow-lg w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-8">
          Đơn hàng của tôi
        </h1>
        {orders.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>Chưa có đơn hàng</p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.orderNumber}
                className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-transform hover:scale-105"
              >
                <div className="p-4 sm:p-6 border-b border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-4">
                    <div>
                      <p className="text-xs text-gray-600 mb-1 font-bold">
                        Số đơn hàng
                      </p>
                      <p className="font-mono text-sm text-green-600 break-all">
                        {order.orderNumber}
                      </p>
                    </div>
                    <div className="sm:text-right">
                      <p className="text-xs text-gray-600 mb-1">Ngày</p>
                      <p className="font-medium">
                        {order.orderDate
                          ? new Date(order.orderDate).toLocaleDateString(
                              "vi-VN"
                            )
                          : "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center p-4">
                  <div className="flex items-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === "paid"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-xs text-gray-600 mb-1">Tổng số tiền</p>
                    <p className="font-bold text-lg">
                      {formatCurrency(order.totalPrice ?? 0)}
                    </p>
                  </div>

                  {order.amountDiscount ? (
                    <div className="mt-4 p-3 sm:p-4 bg-red-50 rounded-lg">
                      <p className="text-red-600 font-medium mb-1 text-xs sm:text-sm">
                        Áp dụng giảm giá: {formatCurrency(order.amountDiscount)}
                      </p>
                      <p className="text-xs text-gray-600">
                        Tổng giá ban đầu:{" "}
                        <span className="font-bold">
                          {formatCurrency(
                            ((order.totalPrice ?? 0) + order.amountDiscount) *
                              1000
                          )}
                        </span>
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className="px-4 py-3 sm:px-6 sm:py-4">
                  <p className="text-sm font-semibold text-gray-600 mb-3 sm:mb-4">
                    Các mặt hàng
                  </p>

                  <div className="space-y-4">
                    {order.products?.map((product) => (
                      <div
                        key={product.product?._id}
                        className="flex items-center gap-4 py-3 border-b last:border-b-0"
                      >
                        {product.product?.image && (
                          <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden border border-gray-200">
                            <Image
                              src={imageUrl(product.product.image).url()}
                              alt={product.product.name ?? ""}
                              className="object-cover"
                              fill
                            />
                          </div>
                        )}
                        <div className="flex flex-col">
                          <p className="font-medium text-sm">
                            {product.product?.name}
                          </p>
                          <p className="text-xs text-gray-600">
                            Số lượng: {product.quantity ?? "N/A"}
                          </p>
                        </div>
                        <p className="ml-auto ">
                          {product.product?.price && product.quantity
                            ? formatCurrency(
                                product.product.price * product.quantity
                              )
                            : "N/A"}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
