// 함수 옮기기 / 필드 옮기기 => 응집도 높이기 위해(최대한 기능이 근접한 곳으로)
export class Customer {
  #name;
  #discountRate;
  // 계약안에 얼마나 할인받을 수 있는지에 대한 정보가 담김!
  // discountRate은 Customer 클래스 보다, Customer Contract Class에 있는게 더 어울림
  #contract;
  constructor(name, discountRate) {
    this.#name = name;
    this.#contract = new CustomerContract(this.dateToday());
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
  #discountRate;
  constructor(startDate, discoutRate) {
    this.#startDate = startDate;
    this.#discountRate = discountRate;
  }

  get discountRate() {
    return this.#discountRate;
  }
}
