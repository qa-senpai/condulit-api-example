class BankAccount {
  private balance: number;
  accountHolder: string;
  accountId: string;
  currency: string;
  accountType: string;
  pin: string;

  constructor(
    balance: number,
    accountHolder: string,
    accountId: string,
    currency: string,
    accountType: string
  ) {
    this.balance = balance;
    this.accountHolder = accountHolder;
    this.accountId = accountId;
    this.currency = currency;
    this.accountType = accountType;
    this.pin = this.generatePin().toString();
  }

  private generatePin() {
    return Math.round((Math.random() + 1) * 4000);
  }

  getBalance(pin: string) {
    if (pin === this.pin) {
      return this.balance;
    } else {
      return new Error("Pls provide correct pin");
    }
  }

  addMoney(moneyAmount: number) {
    this.balance = this.balance + moneyAmount;
  }
}

const account = new BankAccount(
  1124141151,
  "Safonov",
  "a11asffa-afs",
  "USD",
  "Platinum"
);

console.log(account.getBalance(account.pin));
console.log(account.getBalance(account.pin));
