class Order {
  #quantity;
  #item;
  constructor(quantity, item) {
    this.#quantity = quantity;
    this.#item = item;
  }

  // basePrice, discountFactor가 궁금하다면 따로 빼야함
  // 클래스안에서 getter를 이용했기에 외부에서 접근하기에 용이
  get basePrice() {
    return this.#quantity * this.#item.price;
  }

  get discountFactor() {
    return basePrice > 1000 ? 0.95 : 0.98;
  }

  get price() {
    return this.basePrice * this.discountFactor;
  }
}
