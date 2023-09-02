class Order {
  #quantity;
  #item;
  constructor(quantity, item) {
    this.#quantity = quantity;
    this.#item = item;
  }

  // basePrice, discountFactor가 궁금하다면 따로 빼야함
  get basePrice() {
    return this.#quantity * this.#item.price;
  }

  get discountFactor() {
    return basePrice > 1000 ? 0.95 : 0.98;
  }

  get price() {
    return this.basePrice * this.sdiscountFactor;
  }
}
