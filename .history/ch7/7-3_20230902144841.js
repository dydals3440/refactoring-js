class Telephone {
  constructor(number, countryCode) {
    this.number = number;
    this.countryCode = countryCode;
  }
}

const telephone = '010-8888-6666';
const gTelephone = '+82' + '10-8888-2323';

export class Order {
  constructor(data) {
    this.priority = data.priority;
  }
  isHighPriority() {
    // return 'high' === this.priority || 'rush' === this.priority;
    return this.priority.higherThan('normal');
  }
}

// TS에서 Enum으로 쉽게해줌 조금더 심오하게 활용성 높인 코드임.
// 우선순위라는 클래스를 두면서, 관련된것을 여기에 묶어놓음!
class Priority {
  #value; // inner private value
  constructor(value) {
    if (Priority.legalValues().includes(value)) {
      this.#value = value;
    } else {
      // 생성자안에서 에러를 던지는 것은 좋은 방법이 아님(보안에 취약)
      throw new Error(`${value} is invalid for Priority`);
    }
  }

  // 다른 Priority에 있는 인덱스로 비교할 수 있도록 #이아닌 public으로
  get index() {
    return Priority.legalValues().indexOf(this.#value);
  }

  equals(other) {
    return this.#index === other.#index;
  }

  higherThan(other) {
    return this.#index > other.index;
  }

  // 정해진 문자열 자체를 가지고 있도록
  static legalValues() {
    return ['low', 'normal', 'high', 'rush'];
  }
}

const orders = [
  new Order({ priority: 'normal' }),
  new Order({ priority: 'high' }),
  new Order({ priority: 'rush' }),
];

// const highPriorityCount = orders.filter(
//   (o) => 'high' === o.priority || 'rush' === o.priority
// ).length;
// 클래스에 함수 정의! (유지보수성 높아짐, 다른 코드에서 함수만 이용하면 쉽게 접근가능! 중복성 줄여주고 재사용성 높아짐)
const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;
