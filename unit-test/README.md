### Penerapan Unit Testing

Folder ini merupakan hasil kodingan untuk menjawab pertanyaan nomor 4

Unit testing di sini dilakukan menggunakan bahasa `javascript` dengan library testing populer `jest`

Di sini akan dilakukan pengetesan fungsi `sum` pada file `sum.js`. Kemudian, file testing `sum.test.js` dibuat dengan melakukan import fungsi `sum` ke dalamnya. Kita mendeskripsikan bentuk logic testing di dalamnya.

Untuk menjalankan proses unit testing, pertama-tama pastikan runtime `node.js` dan `node package manager (npm)` telah ter-install. Kemudian install depedency dengan menjalankan perintah `npm install`. Sehingga proses testing dapat dilakukan dengan menjalankan perintah `npm test`

Unit Testing adalah proses pengujian pada bagian terkecil dari sebuah perangkat lunak, seperti fungsi, metode, atau kelas, untuk memastikan bahwa bagian tersebut bekerja sesuai dengan yang diharapkan. Pentingnya unit testing dalam pengembangan perangkat lunak meliputi:

- Mendeteksi Bug Lebih Awal: Kesalahan dapat diidentifikasi di tahap awal, sebelum mereka menjadi masalah besar dalam pengembangan.
- Memudahkan Refaktorisasi: Adanya tes membuat perubahan pada kode lebih aman karena tes akan menunjukkan jika ada yang rusak.
- Meningkatkan Kualitas Kode: Membantu memastikan setiap bagian kode memiliki fungsi spesifik yang berjalan dengan baik.
- Dokumentasi: Tes yang baik dapat membantu pengembang memahami tujuan dari setiap unit kode.
