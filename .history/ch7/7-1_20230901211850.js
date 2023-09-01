// // 객체 리터럴을 이용한 record!
// const organization = { name: 'Acme Gooseberries', country: 'GB' };

// 캡슐화를 통해, 어떤것이 읽기 / 수정 가능한지 구분해주는게 좋음!
class Organization {
  // 클래스를 만들어서, data 객체를 받아와서, 이름과 country를 private 필드로 지정 기본적으로 내부에서 name/country 못읽게 만듬 getter / setter를 통해 읽고쓰도록 만듬!
  #name;
  #country;
  constructor(name, country) {
    this.#data = data;
    this.#name = name;
    this.#country = country;
  }
  // 읽기만 가능한것은 get 으로
  get name() {
    return this.#name;
  }

  // 수정가능한것은 set으로
  set name(value) {
    this.#name = value;
  }

  set country(value) {
    // 특정한 장소에 안되면, 주어진 value가 무엇임에 따라서 감시할 수 있는 통로를 만들어 줄 수 있음.
    if (value === 'spain') {
    }
    this.#country = value;
  }
  // organization과 관련된 함수를 아래에 적어주면됨!

  // 혹시라도 get/set 한 데이터를 외부에 전달해야하는 경우라면,
  get rawData() {
    // 위에다 this.#name, this.#country이렇게해서 각각리턴해줘도되지만, 그냥 this.#data로 정의하고
    return;
  }
}

const organization1 = new Organization('Acme Gooseberries', 'GB');

// 실제로 객체 형식보다는, 그냥 데이터로 전달하는게 좋음!
// const organization = new Organization({
//     name: 'Acme Gooseberries',
//     country 'GB',
// })
organization.name = 'Dream Coding';
console.log(organization.name);
console.log(organization.country);
