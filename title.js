function console_title(x) {
    const title = `[911-SYSTEM] ${x} | 911-BOMBER v1.0 | Developed by #911 Eray`;
    
    if (process.platform == 'win32') {
        process.title = title;
    } else {
        process.stdout.write('\x1b]2;' + title + '\x1b\x5c');
    }
}

module.exports = console_title;
