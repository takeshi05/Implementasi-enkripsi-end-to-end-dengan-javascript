// Mengimpor pustaka CryptoJS
const CryptoJS = require('crypto-js');

// Fungsi untuk mengenkripsi pesan
function encryptMessage(message, key) {
    // Mengenkripsi pesan menggunakan AES
    const encrypted = CryptoJS.AES.encrypt(message, key).toString();

    // Mengembalikan pesan terenkripsi
    return encrypted;
}

// Fungsi untuk mendekripsi pesan
function decryptMessage(encrypted, key) {
    // Mendekripsi pesan menggunakan AES
    const decrypted = CryptoJS.AES.decrypt(encrypted, key).toString(CryptoJS.enc.Utf8);

    // Mengembalikan pesan terdekripsi
    return decrypted;
}

// Contoh penggunaan
const message = 'Ini adalah pesan rahasia';
const key = 'kunci_rahasia';

// Mengenkripsi pesan
const encryptedMessage = encryptMessage(message, key);
console.log('Pesan terenkripsi:', encryptedMessage);

// Mendekripsi pesan
const decryptedMessage = decryptMessage(encryptedMessage, key);
console.log('Pesan terdekripsi:', decryptedMessage);
