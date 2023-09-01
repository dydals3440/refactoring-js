// 객체 리터럴을 이용한 record!
const organization = { name: 'Acme Gooseberries', country: 'GB' };

// 불변성을 유지해야한다.
organization.name = 'Dream Coding';
console.log(organization.name);
console.log(organization.country);
