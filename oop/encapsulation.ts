/* 
  Enkapsulasi adalah konsep membungkus data dan metode yang terkait 
  dalam satu unit (kelas) serta membatasi akses ke data 
  melalui modifier seperti private atau protected
*/
export class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    }
  }

  getBalance(): number {
    return this.balance;
  }
}
