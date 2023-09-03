function foundPerson(people) {
  // 깔끔하게 코드 작성하기
  // 1. 찾고자 하는 아이들을 정의!
  const candidates = ['Don', 'John', 'Kent'];
  // 2. 파이프라인 find를 이용! 메서드 적극활용하기! 포함되어있는지 아닌지를, 처음에 찾은걸 바로 리턴하는 find method
  return people.find((p) => candidates.includes(p)) || '';
  // if / return 너무 남발, 좋지 않은 알고리즘 같음!
  // for (let i = 0; i < people.length; i++) {
  //   if (people[i] === 'Don') {
  //     return 'Don';
  //   }
  //   if (people[i] === 'John') {
  //     return 'John';
  //   }
  //   if (people[i] === 'Kent') {
  //     return 'Kent';
  //   }
  // }
  // return '';
}

console.log(foundPerson(['John']));
console.log(foundPerson(['Don', 'John']));
console.log(foundPerson(['Kent', 'Don', 'John']));
console.log(foundPerson(['Lisa', 'Don', 'Tom']));
