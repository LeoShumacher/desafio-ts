import { DioAccount } from "./DioAccount";

export class AdminAccount extends DioAccount {
    constructor(name: string, accountNumber: number, balance: number) {
      super(name, accountNumber, balance);
    }
    deposit = (value: number): void => {
        if (this.getStatus()) {
          this.setNewBalance(this.getBalance() + value)
          console.log("O admin depositou R$" + value + " e ganhou mais R$" + 10);
    
           this.setNewBalance(this.getBalance() + 10)
        }
      };
}