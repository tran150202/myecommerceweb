import { Product } from "@/sanity.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface BasketItem {
  product: Product;
  quantity: number;
}
interface BasketState {
  items: BasketItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearBasket: () => void;
  getTotalPrice: () => number;
  getItemCount: (productId: string) => number;
  getGroupedItems: () => BasketItem[];
}

const useBasketStore = create<BasketState>()(
  persist(
    (set, get) => ({
      items: [],

      // Thêm sản phẩm vào giỏ
      addItem: (product) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.product._id === product._id
          );
          if (existingItem) {
            return {
              // Tăng số lượng nếu sản phẩm đã tồn tại
              items: state.items.map((item) =>
                item.product._id === product._id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            // Thêm sản phẩm mới
            return { items: [...state.items, { product, quantity: 1 }] };
          }
        }),

      // Xóa sản phẩm hoặc giảm số lượng
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.reduce((acc, item) => {
            if (item.product._id === productId) {
              if (item.quantity > 1) {
                acc.push({ ...item, quantity: item.quantity - 1 });
              }
            } else {
              acc.push(item);
            }
            return acc;
          }, [] as BasketItem[]),
        })),

      // Xóa tất cả sản phẩm trong giỏ
      clearBasket: () => set({ items: [] }),

      // Tính tổng giá tiền
      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + (item.product.price ?? 0) * item.quantity,
          0
        );
      },

      // Lấy số lượng của một sản phẩm theo `productId`
      getItemCount: (productId) => {
        const item = get().items.find((item) => item.product._id === productId);
        return item ? item.quantity : 0;
      },

      // Lấy danh sách sản phẩm trong giỏ
      getGroupedItems: () => get().items,
    }),
    {
      name: "basket-store",
    }
  )
);

export default useBasketStore;
