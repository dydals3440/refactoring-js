export default class Book {
  #reservations;
  constructor() {
    this.#reservations = [];
  }
  // 추가적인 기능이 필요할때 isPriority (boolean을 매개변수로 전달하는 것은 좋지않음, 굳이 해야한다면 true/false로 구분 두개로 나눔!)
  addReservation(customer, isPriority = true) {
    this.#reservations.push(customer);
  }

  addReservation(customer, isPriority = false) {
    this.#reservations.push(customer);
  }

  hasReservation(customer) {
    return this.#reservations.some(
      (reservedCustomer) => reservedCustomer.id === customer.id
    );
  }
}
