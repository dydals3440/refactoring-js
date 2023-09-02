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
    return 'high' === o.priority || 'rush' === o.priority;
  }
}

const orders = [
  new Order({ priority: 'normal' }),
  new Order({ priority: 'high' }),
  new Order({ priority: 'rush' }),
];

const highPriorityCount = orders.filter(
  (o) => 'high' === o.priority || 'rush' === o.priority
).length;
