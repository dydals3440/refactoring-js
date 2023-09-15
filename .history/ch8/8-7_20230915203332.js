export function reportYoungestAgeAndTotalSalary(people) {
  let youngest = people[0] ? people[0].age : Infinity;
  let totalSalary = 0;
  for (const p of people) {
    // 1. 나이가 어린사람 찾고
    if (p.age < youngest) youngest = p.age;
    // 2. 샐러리 계산
    // totalSalary += p.salary;
  }

  for (const p of people) {
    totalSalary += p.salary;
  }

  return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
}

for (const p of people) {
  totalSalary += p.salary;
}

// 반복문은 빙글 도니까, 배열의 개수만큼 계쏙돔, 그러니까 한번돌떄 이왕이면 필요한 것들을 다 for문 안에서 처리하는데 이것은 좋지 않다.
// 이해어렵, 재사용성 별로, 리팩토링 어렵
