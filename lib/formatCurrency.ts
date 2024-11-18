export function formatCurrency(
  amount: number,
  currencyCode: string = "VND"
): string {
  try {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: currencyCode.toUpperCase(),
    }).format(amount);
  } catch (error) {
    console.error("Invalid currency code:", currencyCode, error);
    return `${currencyCode.toUpperCase()} ${amount.toFixed(0)}`;
  }
}
