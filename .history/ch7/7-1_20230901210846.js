// 객체 리터럴을 이용한 record!
const organization = { name: 'Acme Gooseberries', country: 'GB' };

// 캡슐화를 통해, 어떤것이 읽기 / 수정 가능한지 구분해주는게 좋음!
class Organization {
  // 클래스를 만들어서, data 객체를 받아와서, 이름과 country를 private 필드로 지정 기본적으로 내부에서 naem/country 못읽게 만듬 getter /setter를 통해 읽고쓰도록 만듬!
  #name;
  #country;
  constructor(data) {
    this.#name = data.name;
    this.#country = data.country;
  }
  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }
}

organization.name = 'Dream Coding';
console.log(organization.name);
console.log(organization.country);
