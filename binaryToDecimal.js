// Algoritma Brute Force
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

// Algoritma Divide and Conquer
function binaryToDecimalDivideConquer(binary) {
    for (const bit of binary) {
        if (bit !== '0' && bit !== '1') {
            return null;
        }
    }

    if (binary.length === 1) {
        return parseInt(binary);
    }

    const mid = Math.floor(binary.length / 2);
    const leftHalf = binary.slice(0, mid);
    const rightHalf = binary.slice(mid);

    const leftDecimal = binaryToDecimalDivideConquer(leftHalf);
    const rightDecimal = binaryToDecimalDivideConquer(rightHalf);

    return leftDecimal * Math.pow(2, rightHalf.length) + rightDecimal;
}
