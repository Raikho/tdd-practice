export default function analyzeArray(array) {
    let length = array.length;
    let average = array.reduce((prev, curr) => prev + curr, 0) / length;
    let min = array.reduce((prev, curr) => (curr < prev) ? curr : prev, array[0]);
    let max = array.reduce((prev, curr) => (curr > prev) ? curr : prev, array[0]);
    return {average, min, max, length};
}