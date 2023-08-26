// 클래스 내부에서 추출시 private field ._, 요즘은 #data;를 위에 선언한 후 this.#data;라고 표현함
export class BadOrder {
  #data;
  constructor(aRecord) {
    this.#data = aRecord;
  }

  get quantity() {
    return this.#data.quantity;
  }
  get itemPrice() {
    return this.#data.itemPrice;
  }

  get price() {
    return (
      this.quantity * this.itemPrice -
      Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 +
      Math.min(this.quantity * this.itemPrice * 0.1, 100)
    );
  }
}

// 클래스 내부에서 추출시 private field ._, 요즘은 #data;를 위에 선언한 후 this.#data;라고 표현함
export class GoodOrder {
  #data;
  constructor(aRecord) {
    this.#data = aRecord;
  }

  get quantity() {
    return this.#data.quantity;
  }
  get itemPrice() {
    return this.#data.itemPrice;
  }

  get price() {
    return this.basePrice - this.discount + this.shipping;
  }
  get basePrice() {
    return this.quantity * this.itemPrice;
  }
  get discount() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }
  get shipping() {
    return Math.min(this.quantity * this.itemPrice * 0.1, 100);
  }
}
