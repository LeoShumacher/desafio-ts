import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Leo', 10,0,0)
peopleAccount.deposit(1000)
peopleAccount.withdraw(5200)
console.log(peopleAccount)

// const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
// companyAccount.deposit(2)
// console.log(companyAccount)