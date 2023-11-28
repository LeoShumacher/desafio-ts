export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number, balance: number) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  getName = (): string => {
    return this.name;
  };

  deposit = (balance: number): void => {
    if (this.validateStatus()) {
      this.balance = balance;
      console.log("Voce depositou R$" + balance);
    }
  };

  withdraw = (current: number): void => {
    if (this.balance > current) {
      this.balance - current;

      console.log("Voce sacou R$" + current);

      this.balance = this.balance - current;
    } else {
      console.log("Saldo insuficiente");
    }
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
