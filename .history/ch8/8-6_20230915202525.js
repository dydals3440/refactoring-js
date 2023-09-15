// 예제 1
const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit;
const order = retreiveOrder();
let charge;
// const chargePerUnit = pricingPlan.unit;

// 예제 2
function someFunc() {
  // 삼항 연산자로 변경 (result는 한번 할당되면 변경될 일이 없고, 절대 변경되면 안되므로 const)
  const result =
    availableResources.length === 0
      ? createResource()
      : availableResources.pop();
  // if (availableResources.length === 0) {
  //   result = createResource();
  //   // allocatedResources.push(result);
  // } else {
  //   result = availableResources.pop();
  //   // allocatedResources.push(result);
  // }
  allocatedResources.push(result);
  return result;
}
