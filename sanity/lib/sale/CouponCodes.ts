export const COUPON_CODES = {
  GIAMGIA: "GIAMGIA",
  QWERTYU: "QWERTYU",
  NY2022: "NY2022",
} as const;
export type CouponCode = keyof typeof COUPON_CODES;
