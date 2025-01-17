import { COUPON_CODES } from "@/sanity/lib/sale/CouponCodes";
import { getActiveSaleByCouponCode } from "@/sanity/lib/sale/getActiveSaleByCouponCode";

async function SaleBanner() {
  const sale = await getActiveSaleByCouponCode(COUPON_CODES.GIAMGIA);

  if (!sale?.isActive) {
    return null;
  }

  return (
    <div className="sale-banner bg-gradient-to-r from-blue-500 to-black text-white px-6 py-10 mx-4 mt-2 rounded-lg shadow-lg">
      <div className="container mx-auto flex item-center justify-between">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-left mb-4">
            {sale?.title}
          </h2>
          <p className="text-left text-xl sm:text-3xl font-semibold mb-6">
            {sale?.description}
          </p>

          <div className="flex">
            <div className="bg-white text-black py-2 px-4 sm:py-4 sm:px-6 rounded-full shadow-md transform hover:scale-105 transition duration-300">
              <span className="font-bold text-base sm:text-xl">
                Nhập: <span className="text-blue-700">{sale?.couponCode}</span>
              </span>
              <span className="ml-2 font-bold text-base sm:text-xl">
                để được giảm {sale?.discountAmount}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaleBanner;
