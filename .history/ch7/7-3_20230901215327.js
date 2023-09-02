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
    return 'high' === this.priority || 'rush' === this.priority;
  }
}

class Priority {
  constructor(value) {
    this.#value = value;
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
