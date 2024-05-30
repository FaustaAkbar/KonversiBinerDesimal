//Algoritma bruteforce
function binaryToDecimalBruteForce(binary) {
    for (const bit of binary) {
        if (bit !== '0' && bit !== '1') {
            return null;
        }
    }
    
    let desimal = 0;
    let pangkat = 0;

    for (let i = binary.length - 1; i >= 0; i--) {
        if (binary[i] === '1') {
            desimal += Math.pow(2, pangkat);
        }
        pangkat++;
    }

    return desimal;
}
