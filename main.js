// GAME TEBAK ANGKA

const input = require("prompt-sync")();

while (true) {
   
   const angkaKeluar = Math.floor(Math.random() * 10);
   const tebakan = input("Masukkan angka antara 0 - 9: ");
   
   console.log("");
   
   if (tebakan === angkaKeluar) {
      console.log(`Kamu kalah. Angka yang keluar adalah ${angkaKeluar}`);
   } else {
      console.log(`Kamu kalah. Angka yang keluar adalah ${angkaKeluar}`);
   }
   
   console.log("");
   
   const mainLagi = input("Mau main lagi? y/n: ");
   
   console.log("");
   
   if (mainLagi.toLowerCase() !== "y") {
      break;
   }
   
}