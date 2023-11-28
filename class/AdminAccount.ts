import { DioAccount } from "./DioAccount";

export class AdminAccount extends DioAccount {
    constructor(name: string, accountNumber: number, balance: number) {
      super(name, accountNumber, balance);
    }
    deposit = (value: number): void => {
        if (this.validateStatus()) {
          value = this.balance + value
          console.log("O admin depositou R$" + value + " e ganhou mais R$" + 10);
    
          this.balance = this.balance + value + 10
        }
      };
}