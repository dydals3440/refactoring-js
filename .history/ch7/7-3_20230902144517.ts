class Priority {
  static Low = new Priority('low', 0);
  static NORMAL = new Priority('normal', 1);
  static HIGH = new Priority('high', 2);
  static RUSH = new Priority('rush', 3);
  private constructor(private name: string, private index: number) {}
}

toString(): string {
    return this.name;
}

equals(other: Priority) {
    return this.index === other.index;
}
