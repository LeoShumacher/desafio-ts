export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number, balance: number) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  getName = (): string => {
    return this.name;
  };

  getBalance = (): number => {
    return this.balance
  }

  setNewBalance = (newbalance: number): number => {
    return (this.balance = newbalance)
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      value = this.balance + value
      console.log("Voce depositou R$" + value);

      this.balance = this.balance + value
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


   private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("CONTA BLOQUEADA");
  };

  getStatus = (): boolean => {
    return this.status
  }

}
