import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number, balance: number) {
    super(name, accountNumber, balance);
  }

  getLoan = (loan: any): void => {
    if(this.validateStatus()){

      console.log("Voce pegou um empréstimo de R$" + loan);
      
      this.balance + loan;
      
      this.balance = loan + this.balance;
    
    }else{
      console.log("CONTA DESATIVADA")
    }
  };
}
