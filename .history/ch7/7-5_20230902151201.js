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
  get areaCode() {
    return this.#areaCode;
  }
  set areaCode(arg) {
    this.#areaCode = arg;
  }
  get number() {
    return this.#number;
  }
  set number(arg) {
    this.#number = arg;
  }
  get toString() {
    return `(${this.#areaCode}) ${this.#number}`;
  }
}

// 전화번호를 담고있는 클래스 하나와, 그것을 사용하는 Person Class 이렇게 두개를 만들었다.

// 사용할떄는, 전화번호 클래스가 있는지 없는지 신경안쓰고, 필요한 로직을 분리했다.
const person = new Person('엘리', '010', '12345678');
//  별도로
const telephoneNumber = new TelephoneNumber('010', '12345678');
telephoneNumber.toString();
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
