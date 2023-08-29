import fs from 'fs';

// 1. run 함수를 만들어서 노드의 process 디펜던시를 제거함
run(process.argv);

// 2. 사용자에게 입력을 받아오는 단계 => 유효성 검사
// 필요한 로직을 처리
// process.argv에 바로 접근하는 것이아닌, args를 받아옴
function run(args) {
  const command = parseCommand(args);

  const rawData = fs.readFileSync(fileName);
  const orders = JSON.parse(rawData);
  if (process.argv.includes('-r')) {
    console.log(orders.filter((order) => order.status === 'ready').length);
  } else {
    console.log(orders.length);
  }
}

function parseCommand(args) {
  if (!args[2]) {
    throw new Error('파일 이름을 입력하세요');
  }

  const fileName = `./${process.argv[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error('파일이 존재하지 않습니다');
  }
}
