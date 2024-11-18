import { defineQuery } from "next-sanity";
import { CouponCode } from "./CouponCodes";
import { sanityFetch } from "../live";

export const getActiveSaleByCouponCode = async (couponCode: CouponCode) => {
  const ACTIVE_SALE_BY_COUPON_QUERY = defineQuery(`
        *[
            _type == "sale" // Fixed to '==' for equality check
            && isActive == true
            && couponCode == $couponCode
        ] | order(validFrom desc){
            _id,
            title,
            description,
            discountAmount, // Fixed typo
            couponCode,
            validFrom,
            validUntil,
            isActive
        }[0]
    `);

  try {
    const activeSale = await sanityFetch({
      query: ACTIVE_SALE_BY_COUPON_QUERY,
      params: { couponCode },
    });

    return activeSale ? activeSale.data : null; // Adjust if 'data' needs another key (e.g., 'result')
  } catch (error) {
    console.error("Error fetching active sale by coupon code", error);
    return null;
  }
};
