import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { AdminAccount } from './class/AdminAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Leo', 10,1000)
peopleAccount.deposit(3000)
peopleAccount.withdraw(3)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20,200)
companyAccount.deposit(1000)
companyAccount.getLoan(200)
console.log(companyAccount)

const adminAccount: AdminAccount = new AdminAccount('Leo', 20, 10)
adminAccount.deposit(10)
adminAccount.withdraw(5)
console.log(adminAccount)