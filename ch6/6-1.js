export function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

function printBanner() {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}

function calculateOutstanding(invoice) {
  // ouststanding 보다는 반환하는 것은 result라고 명명
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  // outstanding을 반환해주어야 다른곳에서 undefined가 아닌 이 리턴을 사용가능
  return result;
}

function recordDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

function printDetails(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};
printOwing(invoice);

// 문제점
// 1. 함수가 너무 길어 가독성이 떨어진다.
// 2. 한눈에 이 함수가 어떤일을 하는지 파악하기 너무 어려움 많은 일을함

// 함수를 읽으면서 단계적으로 추출해야함
