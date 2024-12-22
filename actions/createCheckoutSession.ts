"use server";

import { imageUrl } from "@/lib/imageUrl";
import stripe from "@/lib/stripe";
import { BasketItem } from "@/store/store";

export type Metadata = {
  orderNumber: string; // Mã đơn hàng
  customerNumber: string; // Mã khách hàng
  customerEmail: string; // Email khách hàng
  clerkUserId: string; // ID nhân viên
};

export type GroupedBasketItem = {
  product: BasketItem["product"]; // Sản phẩm
  quantity: number; // Số lượng
};

export async function createCheckoutSession(
  items: GroupedBasketItem[], // Các mặt hàng trong giỏ
  metadata: Metadata // Dữ liệu metadata đơn hàng
) {
  try {
    // Kiểm tra sản phẩm không có giá
    const itemsWithoutPrice = items.filter((item) => !item.product.price);
    if (itemsWithoutPrice.length > 0) {
      throw new Error("Some items do not have a price");
    }

    // Tìm kiếm khách hàng từ email
    const customers = await stripe.customers.list({
      email: metadata.customerEmail,
      limit: 1,
    });

    let customerId: string | undefined;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    }

    // Cố định baseUrl với domain chính trong môi trường production
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? `https://${process.env.VERCEL_URL}` // Domain chính trong môi trường production
        : `${process.env.NEXT_PUBLIC_BASE_URL}`; // Domain cục bộ trong môi trường khác

    const successUrl = `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}&orderNumber=${metadata.orderNumber}`;
    const cancelUrl = `${baseUrl}/basket`;

    console.log("SUCCESS URL <<<<<", successUrl);
    console.log("CANCEL URL <<<<<<", cancelUrl);

    // Tạo session thanh toán với Stripe
    const session = await stripe.checkout.sessions.create({
      customer: customerId, // ID khách hàng
      customer_creation: customerId ? undefined : "always", // Tạo khách hàng nếu không có
      customer_email: !customerId ? metadata.customerEmail : undefined, // Đặt email khách hàng nếu chưa có
      metadata, // Dữ liệu đơn hàng
      mode: "payment", // Chế độ thanh toán
      allow_promotion_codes: true, // Cho phép mã khuyến mãi
      success_url: successUrl, // URL thành công
      cancel_url: cancelUrl, // URL hủy
      line_items: items.map((item) => ({
        price_data: {
          currency: "gbp", // Tiền tệ
          unit_amount: Math.round(item.product.price!), // Chuyển giá thành cents
          product_data: {
            name: item.product.name || "Unamed product", // Tên sản phẩm
            description: `Product ID ${item.product._id}`, // Mô tả sản phẩm
            metadata: {
              id: item.product._id, // ID sản phẩm
            },
            images: item.product.image
              ? [imageUrl(item.product.image).url()] // Ảnh sản phẩm
              : undefined,
          },
        },
        quantity: item.quantity, // Số lượng sản phẩm
      })),
    });
    return session.url; // Trả về URL của session thanh toán
  } catch (error) {
    console.error("Error creating checkout session", error);
    throw error; // Ném lỗi nếu có
  }
}
