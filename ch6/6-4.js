export function isDeliveryFreeBad(anOrder) {
  let basePrice = anOrder.basePrice;
  return basePrice > 1000;
}
// 심플한 경우 inline으로 작성하자
export function isDeliveryFreeGood(anOrder) {
  return anOrder.basePrice > 1000;
}
