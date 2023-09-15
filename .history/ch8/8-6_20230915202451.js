// 예제 1
const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit;
const order = retreiveOrder();
let charge;
// const chargePerUnit = pricingPlan.unit;

// 예제 2
function someFunc() {
  // 삼항 연산자로 변경
  let result =
    availableResources.length === 0
      ? createResource()
      : availableResources.pop();

  allocatedResources.push(result);
  return result;
}
