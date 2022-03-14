const romanDic = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

const convertToNumber = (romanNumber) => {

    let sum = 0;

    for (let i = 0; i < romanNumber.length; i++) {
        if(romanDic[romanNumber[i]] < romanDic[romanNumber[i+1]]) sum = sum - romanDic[romanNumber[i]];
        else sum = sum + romanDic[romanNumber[i]];
    }

    return sum;
}

console.log('I');
let result = convertToNumber('I');
console.log(`result: ${result}`);

console.log('II');
result = convertToNumber('II');
console.log(`result: ${result}`);

console.log('III');
result = convertToNumber('III');
console.log(`result: ${result}`);

console.log('IV');
result = convertToNumber('IV');
console.log(`result: ${result}`);

console.log('V');
result = convertToNumber('V');
console.log(`result: ${result}`);

console.log('IX');
result = convertToNumber('IX');
console.log(`result: ${result}`);

console.log('XL');
result = convertToNumber('XL');
console.log(`result: ${result}`);