const chalk = require('chalk');

function loadingAnimation(text, duration = 3000) {
    return new Promise((resolve) => {
        const frames = ['▖', '▘', '▝', '▗']; 
        let i = 0;
        
        const interval = setInterval(() => {
            process.stdout.write(`\r${chalk.red.bold(frames[i % frames.length])} ${chalk.white(text)}...`);
            i++;
        }, 100);
        
        setTimeout(() => {
            clearInterval(interval);
            process.stdout.write(`\r${chalk.red.bold('●')} ${chalk.white(text)} ${chalk.red.bold('[ TAMAMLANDI ]')}\n`);
            resolve();
        }, duration);
    });
}

function typeWriter(text, delay = 30) {
    return new Promise((resolve) => {
        let i = 0;
        const interval = setInterval(() => {
            process.stdout.write(chalk.red.bold(text[i]));
            i++;
            if (i >= text.length) {
                clearInterval(interval);
                console.log('');
                resolve();
            }
        }, delay);
    });
}

function matrixRain() {
    const chars = "0189";
    let line = "";
    const width = process.stdout.columns || 80;
    for(let i = 0; i < width; i++) {
        if (Math.random() > 0.95) {
            line += chalk.white.bold(chars[Math.floor(Math.random() * chars.length)]);
        } else {
            line += chalk.red(chars[Math.floor(Math.random() * chars.length)]);
        }
    }
    console.log(line);
}

module.exports = { loadingAnimation, typeWriter, matrixRain };
