import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number, balance: number) {
    super(name, accountNumber, balance);
  }

  getLoan = (loan: any): void => {
    console.log("Voce pegou um empréstimo de R$" + loan);

    this.balance + loan;

    this.balance = loan + this.balance;
  };
}
