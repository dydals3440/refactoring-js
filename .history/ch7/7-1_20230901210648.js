// 객체 리터럴을 이용한 record!
const organization = { name: 'Acme Gooseberries', country: 'GB' };

// 캡슐화를 통해, 어떤것이 읽기 / 수정 가능한지 구분해주는게 좋음!
class Organization {
    constructor()
}

organization.name = 'Dream Coding';
console.log(organization.name);
console.log(organization.country);
