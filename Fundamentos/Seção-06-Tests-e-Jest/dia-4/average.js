const average = (array) => {
    let sum = 0;
    let tamanho = array.length;
    if (tamanho === 0) {
        throw new Error('undefined');
    }
    for (let index = 0; index < tamanho; index += 1) {
        if (typeof array[index] !== 'number') {
            throw new Error('undefined');
        } else {
            sum += Math.round(array[index]);
        }
    }
    return Math.round(sum / tamanho);
};
module.exports = average;
let arrays = [];
console.log(arrays.length);