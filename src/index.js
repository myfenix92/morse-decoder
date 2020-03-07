const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '_': ' '
};

function decode(expr) {
    let str
    str = expr.split(/(\d{10})/g).join(' ').replace(/10/g, '.').replace(/11/g, '-').replace(/00/g, '').replace(/\*{10}/g, '_').split(' ').map(elemn => {
        for (let item in MORSE_TABLE) {
            if (item == elemn) {
                return elemn = MORSE_TABLE[item]
            }
        }
    })
    return str.join('')
}

module.exports = {
    decode
}