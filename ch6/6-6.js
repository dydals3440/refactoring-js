class Person {
  #lastName;
  #firstName;
  constructor(data) {
    this.#lastName = data.lastName;
    this.#firstName = data.firstName;
  }
  get lastName() {
    return this.#lastName;
  }
  get firstName() {
    return this.#firstName;
  }
}

// 객체를 담고 있는 변수는 메모리 주소를 담고있음!
let defaultOwner = new Person({ firstName: '마틴', lastName: '파울러' });

export function getDefaultOwner() {
  // 참조값을 반환하고있음.
  // return defaultOwner;
  // 해결법 { ...defaultOwner } 얕은복사라, 한단계더 중첩된 객체가 있으면 그떄는 문제생김
  // return { ...defaultOwner };
  return defaultOwner;
}

// defaultOwner는 함수만을 이용해서, 변수가 가지고 있는 객체를 반환받을 수 있도록 만듬!

// 객체의 주소를 반환하는 대신에, 새로운 객체를 복사해서 반환 (Object.assign or ...defaultOwner)
