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

  get price() {
    const basePrice = this.#quantity * this.#item.price;
    const discountFactor = 0.98;
    if (basePrice > 1000) discountFactor -= 0.03;
    return basePrice * discountFactor;
  }
}
