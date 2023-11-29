import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { AdminAccount } from './class/AdminAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Leo', 10,1000)
peopleAccount.deposit(3000)
peopleAccount.withdraw(3)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20,200)
companyAccount.getLoan(1000)
console.log(companyAccount)

const adminAccount: AdminAccount = new AdminAccount('Leo', 20, 1000)
adminAccount.deposit(500)
console.log(adminAccount)