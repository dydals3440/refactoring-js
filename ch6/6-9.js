// 코드 중복, 재사용성 떨어짐, 유지보수성 개별로, 코드 쓰레기
// 필요한 데이터와 관련된 함수를 응집되게 묶어주는 하나의 책임을 갖은 클래스로 생성 (캡슐화 시키기)

// 1. 외부에서 사용할 수 있는 클래스인 reading 생성
export class Reading {
  // Reading이란 constructor를 통해 필요한 데이터를 받아옴
  // 외부에서 quantity customer (private)접근못하게 생성
  #customer;
  #quantity;
  #month;
  #year;
  constructor(data) {
    this.#customer = data.customer;
    this.#quantity = data.quantity;
    this.#month = data.month;
    this.#year = data.year;
  }
  // 한번 설정해두면 get만 가능 set은 불가
  get customer() {
    return this.#customer;
  }
  get quantity() {
    return this.#quantity;
  }
  get month() {
    return this.#month;
  }
  get year() {
    return this.#year;
  }

  // 밀접한 관련이 있으므로 baseRate은 이쪽에 넣는게 맞음

  get baseRate() {
    if (this.#year === 2017 && this.#month === 5) return 0.1;
    return 0.2;
  }

  get baseCharge() {
    // get을 이용해서 # 없이 받아올 수 있음
    return this.baseRate * this.quantity;
  }

  get taxThreshold() {
    return 0.1;
  }

  get taxableChage() {
    return Math.max(0, this.baseCharge - this.taxThreshold);
  }
}

// 일반 객체를 변수에 할당해서 반환하는 것이 아닌, 인스턴스를 간직하도록 만듬(클래스를 선언한 다음에 선언!)
const reading = new Reading({
  customer: 'ivan',
  quantity: 10,
  month: 5,
  year: 2017,
});

export function acquireReading() {
  return reading;
}
