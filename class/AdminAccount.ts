import { DioAccount } from "./DioAccount";

export class AdminAccount extends DioAccount {
    constructor(name: string, accountNumber: number, balance: number) {
      super(name, accountNumber, balance);
    }
    deposit = (value: number): number => {
        if (this.getStatus()) {
          this.setNewBalance(this.getBalance() + value)
          console.log("O admin depositou R$" + value + " e ganhou mais R$" + 10);
    
          return this.getBalance() + 10
        }throw new Error
      };
}