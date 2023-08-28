import { acquireReading } from './6-9.js';

const reading = acquireReading();

console.log(reading.baseCharge);

// baseCharge 또한 reading에 관련된 것이고, 다른곳에서 사용하니 6-9의 클래스 내부에서 관리하는것이 좋음!
// const baseCharge = reading.baseRate * reading.quantity;
// console.log(baseCharge);
