export default function caesarCipher(string, shift) {
    let codes = [];
    for (let char of string) {
        let code = char.charCodeAt();
        codes.push(shiftCode(code, shift));
    }

    return String.fromCharCode(...codes);
}

function shiftCode(code, shift) {
    let offset = 0;
    if (code >= 97 && code <= 122)
        offset = 97;
    else if (code >= 65 && code <= 90)
        offset = 65;
    else
        return code;

    return modulo(code - offset + shift, 26) + offset;
}

function modulo(a, b) {return ((a % b) + b) % b;}