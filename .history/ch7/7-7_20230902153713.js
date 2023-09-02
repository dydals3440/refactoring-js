class Person {
  #name;
  #manager;
  #chargeCode;
  constructor(name, manager, chargeCode) {
    this.#name = name;
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get name() {
    return this.#name;
  }

  get manager() {
    return this.#department.manager;
  }

  get chargeCode() {
    return this.#department.chargeCode;
  }

  get department() {
    return this.#department;
  }

  set department(arg) {
    this.#department = arg;
  }
}

// export class Department {
//   #manager;
//   #chargeCode;
//   constructor(manager, chargeCode) {
//     this.#manager = manager;
//     this.#chargeCode = chargeCode;
//   }

//   get chargeCode() {
//     return this.#chargeCode;
//   }

//   set chargeCode(arg) {
//     this.#chargeCode = arg;
//   }

//   get manager() {
//     return this.#manager;
//   }

//   set manager(arg) {
//     this.#manager = arg;
//   }
// }
// person은 이름을 전달하고, 어떤 부서에 일하는지 부서에 관한 정보도 전달!
const person = new Person('Tom', new Department('aManager', '999'));
console.log(person.chargeCode);
// person에 접근할때, 이사람의 매니저에 대한 정보를 얻어올때, department 인스턴스의 manager에 접근, 사용하는 관점에서 person안에 department가 있다는 것을 노출, 각각 어떻게 접근해야하는지도 외부에 공개됨(외부에 지나치게 노출하면 좋지 않음) 숨기는게 좋다! 외부에서 어떻게 분리되는지 모르게 person.manager이런식으로....
console.log(person.department.manager);
console.log(person.department.chargeCode);
