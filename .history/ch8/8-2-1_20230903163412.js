// 함수 옮기기 / 필드 옮기기 => 응집도 높이기 위해(최대한 기능이 근접한 곳으로)
export class Customer {
  #name;
  #discountRate;
  #contract;
  constructor(name, discountRate) {
    this.#name = name;
    this.#discountRate = discountRate;
    this.#contract = new CustomerContract(this.dateToday());
  }

  get discountRate() {
    return this.#discountRate;
  }

  becomePreferred() {
    this.#discountRate += 0.03;
    // 다른 코드들이 있음...
  }

  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.#discountRate));
  }

  dateToday() {
    return new Date();
  }
}

class CustomerContract {
  #startDate;
  constructor(startDate) {
    this.#startDate = startDate;
  }
}
