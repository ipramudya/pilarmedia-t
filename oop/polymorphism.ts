/* 
  Polymorphism memungkinkan metode yang sama memiliki 
  implementasi yang berbeda tergantung pada kelas yang menggunakannya.
*/
class Account {
  constructor(public accountNumber: string) {}

  getDetails(): string {
    return `Account Number: ${this.accountNumber}`;
  }
}

class CheckingAccount extends Account {
  getDetails(): string {
    return `Checking ${super.getDetails()}`;
  }
}

class BusinessAccount extends Account {
  getDetails(): string {
    return `Business ${super.getDetails()}`;
  }
}

function printAccountDetails(account: Account): void {
  console.log(account.getDetails());
}

const checking = new CheckingAccount("123-456");
const business = new BusinessAccount("789-012");

printAccountDetails(checking); // Checking Account Number: 123-456
printAccountDetails(business); // Business Account Number: 789-012
