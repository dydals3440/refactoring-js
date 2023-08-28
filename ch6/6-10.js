import _ from 'lodash';
const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

export function acquireReading() {
  return reading;
}

export function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}

// 여러함수를 변환함수로 묶기 (필요한 데이터를 집어넣는 변환해주는 함수로 변경!)
export function enrichReading(original) {
  // const result = { ...original }; // Object.assign: 얉은 복사만 이루어짐 (중첩된 객체가 있다면 그 객체들까지는 새롭게 만들지 않고, 참조값만 갖고있음 깊은 복사를 해야함)
  // 깊은 복사 lodash 함수
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(
    0,
    result.baseCharge - taxThreshold(result.year)
  );
  return result;
}

function calculateBaseCharge(reading) {
  return baseRate(reading.month, reading.year) * reading.quantity;
}
