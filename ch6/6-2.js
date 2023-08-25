// 예제 1
// export function rating(driver) {
//   return moreThanFiveLateDeliveries(driver) ? 2 : 1;
// }

// // 함수 이름부터 5번 늦었는지에 따라 true/false로 판정됨
// // 이는 재사용하기 어려운 이름임 (isBestDriver 이런식이면 몰라도, 즉, 굳이 필요없는 함수)
// function moreThanFiveLateDeliveries(dvr) {
//   return dvr.numberOfLateDeliveries > 5;
// }

export function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 예제 2
// 지역변수를 만들어서, 전달해서 그것을 그대로 반환함 굳이 gather 함수가 있을 필요가 없어보임 불필요하게 세분화하는 것은 좋지 않은 코드임! 불필요한 간점호출 X
// function reportLines(customer) {
//   const lines = [];
//   gatherCustomerData(lines, customer);
//   return lines;
// }

// function gatherCustomerData(out, customer) {
//   out.push(['name', customer.name]);
//   out.push(['location', customer.location]);
// }

function reportLines(customer) {
  const lines = [];
  lines.push(['name', customer.name]);
  lines.push(['location', customer.location]);
  return result;
}
