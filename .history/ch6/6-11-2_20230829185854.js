import fs from 'fs';

// 1. run 함수를 만들어서 노드의 process 디펜던시를 제거함
run(process.argv);

// 2. 사용자에게 입력을 받아오는 단계 => 유효성 검사
// 필요한 로직을 처리
// process.argv에 바로 접근하는 것이아닌, args를 받아옴

// 3. 필요한 로직 처리 (의미있는 이름 부여)
function run(args) {
  // 스크립트는 커맨드를 받아와서
  const command = parseCommand(args);
  // 주문의 개수를 세는 역할을 한다고 한눈에 이해 가능!
  countOrders(command);
  // 한줄로 깔끔하게 작성해도됨
  // countOrders(parseCommand(args));
}

// parseCommand 라는 함수를 만들어줌
// 전달한 args 배열을 받아와서, 배열에 파일이름이 있는지 없는지 확인, 파일의 존재 유무 확인, 파일 이름과 인자안의 -r이 있는지 없는지 판단해서 불리언을 담고있게 변환 후 반환해줌.
function parseCommand(args) {
  if (!args[2]) {
    throw new Error('파일 이름을 입력하세요');
  }

  const fileName = `./${args[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error('파일이 존재하지 않습니다');
  }

  const countReadyOnly = args.includes('-r');

  return {
    fileName,
    countReadyOnly,
  };
}

function countOrders(command) {
  const rawData = fs.readFileSync(command.fileName);
  const orders = JSON.parse(rawData);
  if (command.countReadyOnly) {
    console.log(orders.filter((order) => order.status === 'ready').length);
  } else {
    console.log(orders.length);
  }
}
