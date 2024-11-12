import { BankAccount } from "./encapsulation";
import { SavingsAccount } from "./inheritance";
import {
  EmailService,
  NotificationContent,
  NotificationManager,
  PushNotificationService,
  SMSService,
  User,
  UserRepository,
} from "./solid-principles";

/**
 * contoh penerapan encapsulation
 */
const account = new BankAccount(100);
account.deposit(50);
account.withdraw(75);
console.log("Account balance:", account.getBalance());

/**
 * contoh penerapan inheritance
 */
const interestRate = 10 / 100; // 10%
const savingsAccount = new SavingsAccount(1000, interestRate);
savingsAccount.applyInterestRate();
console.log("Savings account balance:", savingsAccount.getBalance());

/**
 * polymorphism function
 */
function printAccountDetails(account: Account): void {
  console.log(account.getDetails());
}

const checking = new CheckingAccount("123-456");
const business = new BusinessAccount("789-012");

/**
 * contoh penerapan polymorphism function
 */
printAccountDetails(checking); // Checking Account Number: 123-456
printAccountDetails(business); // Business Account Number: 789-012

/**
 * contoh penerapan solid principles
 */
const user = new User(1, "John Doe", "john@example.com");
const userRepository = new UserRepository();
userRepository.save(user);

const content = new NotificationContent("Selamat datang di layanan kami!");

// Dengan prinsip Dependency Inversion, kita bisa menyuntikkan berbagai layanan notifikasi yang berbeda.
const emailService = new EmailService();
const smsService = new SMSService();
const pushService = new PushNotificationService();

const emailNotificationManager = new NotificationManager(emailService);
emailNotificationManager.send(content); // Mengirim notifikasi email

const smsNotificationManager = new NotificationManager(smsService);
smsNotificationManager.send(content); // Mengirim notifikasi SMS

const pushNotificationManager = new NotificationManager(pushService);
pushNotificationManager.send(content); // Mengirim notifikasi push
