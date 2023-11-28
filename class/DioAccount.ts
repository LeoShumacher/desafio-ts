export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true



  constructor(name: string, accountNumber: number, balance: number){
    this.name = name
    this.accountNumber = accountNumber
    this.balance = balance
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (balance:number): void => {
    if(this.validateStatus()){
      this.balance = balance
      console.log('Voce depositou '+balance)
    }
  }

  withdraw = (current:number, subtraction:number): void => {
    if (this.balance > current){
      this.balance = current
      this.balance = subtraction    
      
      console.log('Voce sacou' +subtraction)
      console.log(current - subtraction)
      
    }else{
      console.log ('Saldo insuficiente')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
