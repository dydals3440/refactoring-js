// 인라인 코드를 -> 함수 호출로 변경
let appliesToMass = false;
for (const s of states) {
  if (s === 'MA') appliesToMass = true;
}

// 배열 API를 쓰는게 더 좋음
let appliesToMassGood = states.includes('MA');
