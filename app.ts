import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10,0,0)
peopleAccount.deposit(100)
peopleAccount.withdraw(100, 200)
console.log(peopleAccount)

// const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
// companyAccount.deposit(2)
// console.log(companyAccount)