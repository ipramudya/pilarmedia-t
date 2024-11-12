import { BankAccount } from "./encapsulation";

/* 
  SavingsAccount mewarisi BankAccount dan menambahkan 
  properti serta metode baru (interestRate dan addInterest). 
*/
export class SavingsAccount extends BankAccount {
  private interestRate: number;

  constructor(initialBalance: number, interestRate: number) {
    super(initialBalance);
    this.interestRate = interestRate;
  }

  /* 
    Metode applyInterestRate menghitung dan menerapkan 
    bunga pada saldo akun.
   */
  applyInterestRate(): void {
    const interest = this.getBalance() * this.interestRate;
    this.deposit(interest);
  }
}
