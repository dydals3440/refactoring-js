class Account {
  // AccountType Class에 interestRate이 있는게 더 맞다고 생각함
  constructor(number, type) {
    this._number = number;
    this._type = type;
  }

  get interestRate() {
    // 위임을 통해, get을 해줌, get interestRate은 타입안에 있는, InterestRate을 전달하면서 외부에서는 accountType이 있는지 없는지 모르게 사용할 수 있도록 해주면 됨!
    return this._type.interestRate;
  }
}

class AccountType {
  constructor(nameString, interestRate) {
    this._name = nameString;
    this._interestRate = interestRate;
  }
  get interestRate() {
    return this._interestRate;
  }
}
