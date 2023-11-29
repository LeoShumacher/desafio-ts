import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number, balance: number) {
    super(name, accountNumber, balance);
  }

  getLoan = (loan: number): number => {
    if(this.getStatus()){
      this.setNewBalance(this.getBalance() + loan)
      
      console.log("Voce pegou um empréstimo de R$" + loan);
      
      return this.setNewBalance(this.getBalance() + loan)
      
    } throw new Error('Conta desativada');
    
  };
}
