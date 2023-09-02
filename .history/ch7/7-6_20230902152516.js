export class TrackingInformation {
  #shippingCompany;
  #trackingNumber;
  constructor(trackingNumber, shippingCompany) {
    this.#trackingNumber = trackingNumber;
    this.#shippingCompany = shippingCompany;
  }

  get shippingCompany() {
    return this.#shippingCompany;
  }

  set shippingCompany(arg) {
    this.#shippingCompany = arg;
  }

  get trackingNumber() {
    return this.#trackingNumber;
  }

  set trackingNumber(arg) {
    this.#trackingNumber = arg;
  }

  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

export class Shipment {
  #trackingInformation;
  constructor(trackingInformation) {
    this.#trackingInformation = trackingInformation;
  }

  get trackingInfo() {
    return this.#trackingInformation.display;
  }

  get trackingInformation() {
    return this.#trackingInformation;
  }

  set trackingInformation(trackingInformation) {
    this.#trackingInformation = trackingInformation;
  }
}

// 클래스 만들때, 밀접하게 관련된 데이터와 행동을 하나로 묶는게 좋음. 역할을 분리했을때 효율적이라면 별도의 클래스로 분리해주는 것이 효율적이다!

const shipment = new Shipment(new TrackingInformation(999, 'Maersk'));
console.log(shipment.trackingInfo.display);

shipment.trackingInformation.shippingCompany = 'COSCO';
console.log(shipment.trackingInfo);
