export function isDeliveryFreeBad(anOrder) {
  let basePrice = anOrder.basePrice;
  return basePrice > 1000;
}
// 심플한 경우 inline으로 작성하자 (굳이 변수로 추출할 필요 없다)
export function isDeliveryFreeGood(anOrder) {
  return anOrder.basePrice > 1000;
}
