// Prinsip Single Responsibility (SRP)
// Setiap kelas hanya memiliki satu alasan untuk berubah, yaitu memiliki satu tanggung jawab spesifik.

/**
 * Kelas User yang merepresentasikan data pengguna.
 */
export class User {
  constructor(public id: number, public name: string, public email: string) {}
}

/**
 * Kelas UserRepository bertanggung jawab untuk mengelola penyimpanan data pengguna.
 */
export class UserRepository {
  save(user: User): void {
    console.log(`User dengan ID ${user.id} telah disimpan.`);
  }
}

/**
 * Kelas NotificationContent bertanggung jawab mengelola konten notifikasi.
 */
export class NotificationContent {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  getContent(): string {
    return this.content;
  }
}

// Prinsip Open/Closed (OCP)
// Kode yang sudah ada bisa diperluas tanpa harus dimodifikasi.

/**
 * Interface NotificationService untuk mengirim notifikasi.
 * Kelas-kelas yang mengimplementasi interface ini dapat memiliki metode pengiriman notifikasi yang berbeda.
 */
interface NotificationService {
  sendNotification(content: string): void;
}

/**
 * Kelas EmailService untuk mengirim notifikasi melalui email.
 */
export class EmailService implements NotificationService {
  sendNotification(content: string): void {
    console.log(`Mengirim email dengan konten: ${content}`);
  }
}

/**
 * Kelas SMSService untuk mengirim notifikasi melalui SMS.
 */
export class SMSService implements NotificationService {
  sendNotification(content: string): void {
    console.log(`Mengirim SMS dengan konten: ${content}`);
  }
}

// Prinsip Liskov Substitution (LSP)
// Subkelas harus bisa menggantikan kelas dasar tanpa mengubah fungsionalitas.

/**
 * Kelas PushNotificationService untuk mengirim notifikasi push.
 */
export class PushNotificationService implements NotificationService {
  sendNotification(content: string): void {
    console.log(`Mengirim notifikasi push dengan konten: ${content}`);
  }
}

// Prinsip Interface Segregation (ISP)
// Kelas tidak boleh dipaksa untuk bergantung pada interface yang tidak digunakan.

/**
 * Interface MessengerService hanya berfokus pada pengiriman pesan.
 */
interface MessengerService {
  sendMessage(content: string): void;
}

/**
 * Interface EmailSender khusus untuk pengiriman email.
 */
interface EmailSender {
  sendEmail(content: string): void;
}

/**
 * Kelas DetailedEmailService mengimplementasikan MessengerService dan EmailSender,
 * dengan begitu kelas ini hanya mengimplementasikan fungsi yang dibutuhkan.
 */
export class DetailedEmailService implements MessengerService, EmailSender {
  sendMessage(content: string): void {
    console.log(`Mengirim pesan dengan konten: ${content}`);
  }

  sendEmail(content: string): void {
    console.log(`Mengirim email dengan detail tambahan: ${content}`);
  }
}

// Prinsip Dependency Inversion (DIP)
// Modul tingkat tinggi tidak boleh bergantung pada modul tingkat rendah, tetapi pada abstraksi.

/**
 * Kelas NotificationManager mengelola pengiriman notifikasi dengan bergantung pada interface NotificationService.
 */
export class NotificationManager {
  private service: NotificationService;

  constructor(service: NotificationService) {
    this.service = service;
  }

  send(content: NotificationContent): void {
    this.service.sendNotification(content.getContent());
  }
}
