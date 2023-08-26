export function inNewEngland(aCustomer) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
}

// 함수에서 필요한것은 state 전체 손님의 객체를 받을 필요없음, 왜냐하면 state라는 정보만 있을때는 재사용이 어렵기때문에 정말 필요한 데이터만 받아오는 것이 중요!
// 호출하는 곳에서 aCustomer.address를 전달!
// 외부 객체에 대한 의존도를 낮춤!
export function inNewEngland(state) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(state);
}
