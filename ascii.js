const chalk = require('chalk');

function printBanner() {
    console.clear();
    console.log(chalk.red.bold(`
    
             ██████╗  ██╗ ██╗
             ██╔══██╗███║███║
             ██████╔╝╚██║╚██║
             ██╔══██╗ ██║ ██║
             ██████╔╝ ██║ ██║
             ╚═════╝  ╚═╝ ╚═╝
    `));
    
    console.log(chalk.white.bold('      [>] EMERGENCY SMS SYSTEM V1.0 [<]'));
    console.log(chalk.red('      [>] DEVELOPED BY ERAYVIRTUALX [<]'));
    console.log(chalk.gray('      [>] SYSTEM STATUS: OPERATIONAL [<]'));
    console.log('');
    
    simulateHacking();
    
    console.log(chalk.red.bold('    ⚠️  UYARI: YASADIŞI KULLANIM TAMAMEN KULLANICI SORUMLULUĞUNDADIR ⚠️'));
    console.log(chalk.white('    🔥 BU ARAÇ EĞİTİM VE TEST AMAÇLI GELİŞTİRİLMİŞTİR'));
    console.log('');
}

function simulateHacking() {
    const steps = [
        "Kernel modulleri yukleniyor",
        "Guvenlik protokolleri asiliyor",
        "Sifreli tunel olusturuluyor",
        "Saldiri vektorleri hazirlaniyor",
        "Parametreler optimize ediliyor",
        "Ag imzasi gizleniyor",
        "Iz yollarini temizleniyor",
        "Anonim proxyler aktif ediliyor",
        "Sistem saldiriya hazir"
    ];
    
    steps.forEach(step => {
        const rand = Math.random();
        if (rand > 0.5) {
            console.log(chalk.red(`    [${getRandomHexCode()}] ${step}...`));
        } else {
            console.log(chalk.white(`    [${getRandomHexCode()}] ${step}...`));
        }
    });
    
    console.log('');
    simulateProgressBar();
}

function getRandomHexCode() {
    return "0x" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
}

function simulateProgressBar() {
    console.log(chalk.red("    [911] Arsenal yukleniyor: ") + 
        chalk.white("[") + 
        chalk.red("████████████████████████████") + 
        chalk.white("] 100%"));
    console.log('');
}

function printHackerLine() {
    const chars = ['█', '▓', '▒', '░', '0', '1', '9', '1'];
    let line = '';
    for(let i = 0; i < 70; i++) {
        if (Math.random() > 0.5) {
            line += chalk.red(chars[Math.floor(Math.random() * chars.length)]);
        } else {
            line += chalk.white(chars[Math.floor(Math.random() * chars.length)]);
        }
    }
    console.log(line);
}

function printStats(phone, amount) {
    console.log(chalk.red('╔════════════════════════════════════════════════════════════════════╗'));
    console.log(chalk.red('║') + chalk.white.bold('                      OPERASYON PARAMETRELERI                     ') + chalk.red('║'));
    console.log(chalk.red('╠════════════════════════════════════════════════════════════════════╣'));
    console.log(chalk.red('║') + chalk.white(`  HEDEF NUMARA: +90${phone}                                   `) + chalk.red('║'));
    console.log(chalk.red('║') + chalk.white(`  GÖNDERİM MİKTARI: ${amount} SMS                                    `) + chalk.red('║'));
    console.log(chalk.red('║') + chalk.white(`  PROTOKOL: 911 SMS BOMBARDMENT                                 `) + chalk.red('║'));
    console.log(chalk.red('║') + chalk.red.bold(`  DURUM: SALDIRI İÇİN TÜM SİSTEMLER TETİKTE                     `) + chalk.red('║'));
    console.log(chalk.red('╚════════════════════════════════════════════════════════════════════╝'));
    
    for (let i = 0; i < 2; i++) {
        printHackerLine();
    }
    console.log('');
}

module.exports = { printBanner, printHackerLine, printStats };
