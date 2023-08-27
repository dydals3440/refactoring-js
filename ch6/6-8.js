// min과 max로 전달하는 것이아닌, 전달하려는 매개변수를 줄이고 객체로 전달하는것이 좋음
// export function readingsOutsideRange(station, min, max) {
//   return station.readings.filter((r) => r.temp < min || r.temp > max);
// }

// export function readingsOutsideRange(station, range) {
//   return station.readings.filter(
//     (r) => r.temp < range.temperatureFloor || r.temp > range.temperatureCeiling
//   );
// }

export function readingsOutsideRange(station, range) {
  // range에 포함되지 않는것을 판단함
  return station.readings.filter((r) => !range.contains(r.temp));
}

// 확인 해주는 클래스를 만들어줌
export class NumberRange {
  #min;
  #max;
  constructor(min, max) {
    this.#min = min;
    this.#max = max;
  }
  // 외부에서 min/max읽게 getter사용
  get min() {
    return this.#min;
  }
  get max() {
    return this.#max;
  }
  // contains 함수추가
  contains(number) {
    return number >= this.#min && number <= this.#max;
  }
}

const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ],
};
// min과 max로 나누는 것이 아닌 range로
// const operationPlan = {
//   temperatureFloor: 51,
//   temperatureCeiling: 53,
// };

const operationPlan = new NumberRange(51, 53);

const result = readingsOutsideRange(
  station,
  operationPlan
  // operationPlan.temperatureFloor,
  // operationPlan.temperatureCeiling
);

console.log(result);
