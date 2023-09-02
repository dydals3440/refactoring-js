// 클래스에서는 한가지 일만하는게 좋음, 한가지를 담당해서
class Person {
  #name;
  #telephoneNumber;
  // #officeAreaCode;
  // #officeNumber;
  constructor(name, areaCode, number) {
    this.#name = name;
    // 생성자에서, 전달받은 areaCode, number를 이용해서 새로운 인스턴스를 만듬.
    this.#telephoneNumber = new TelephoneNumber(areaCode, number);
    // this.#officeAreaCode = areaCode;
    // this.#officeNumber = number;
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }

  get telephoneNumber() {
    return this.#telephoneNumber.toString();
    // return `(${this.officeAreaCode}) ${this.officeNumber}`;
  }

  get officeAreaCode() {
    return this.#telephoneNumber.areaCode;
    // return this.#officeAreaCode;
  }

  set officeAreaCode(arg) {
    this.#officeAreaCode = arg;
  }

  get officeNumber() {
    return this.#officeNumber;
  }

  set officeNumber(arg) {
    this.#officeNumber = arg;
  }
}

class TelephoneNumber {
  #areaCode;
  #number;
  constructor(area, number) {
    this.#areaCode = area;
    this.#number = number;
  }
}

const person = new Person('엘리', '010', '12345678');
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
