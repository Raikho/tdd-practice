export default function reverseString(string) {
    let out = '';
    for (let i = string.length - 1; i >= 0; i--)
        out += string.charAt(i);
    return out;
}