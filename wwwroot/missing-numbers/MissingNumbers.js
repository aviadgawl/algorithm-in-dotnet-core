const getMissingNumbers = (array) => {
    const missingNumbers = [];

    for (let i = 0; i < array.length; i++) {
        let expectedNumber = i + 1;
        let currentNumber = array[i];

        if (expectedNumber !== currentNumber) {
            if (missingNumbers[i] === undefined) missingNumbers[i] = expectedNumber;
            missingNumbers[currentNumber - 1] = false;
        }
        else missingNumbers[i] = false;
    }

    return missingNumbers.filter(x => x).map(x => x);
}

let result = getMissingNumbers([3, 1, 1]);
console.log(`[3, 1, 1] result: ${result}`);

result = getMissingNumbers([4, 2, 1, 2]);
console.log(`[4, 2, 1, 2] result: ${result}`);

result = getMissingNumbers([4, 2, 2, 2]);
console.log(`[4, 2, 2, 2] result: ${result}`);