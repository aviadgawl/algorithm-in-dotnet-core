console.log('findTargetSumIndexBruteForce O(n^2)');

const findTargetSumIndexBruteForce = (nums, target) => {

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            let sum = nums[i] + nums[j];
            if (i !== j && sum === target) return [i, j];
        }
    }
}

console.log(`[1,2,3] , 2`);
let result = findTargetSumIndexBruteForce([1, 2, 3], 2);
console.log(`result: ${result}`);

console.log(`[1,2,3] , 3`);
result = findTargetSumIndexBruteForce([1, 2, 3], 3);
console.log(`result: ${result}`);

console.log(`[1,2,3] , 5`);
result = findTargetSumIndexBruteForce([1, 2, 3], 5);
console.log(`result: ${result}`);

console.log('findTargetSumIndex O(2n)');

const findTargetSumIndex = (nums, target) => {
    const dic = {};
    const smallerNumber = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= target) {
            smallerNumber.push({ value: nums[i], index: i });
            if (dic[target - nums[i]] === undefined) dic[target - nums[i]] = i;
        }
    }

    for (let i = 0; i < smallerNumber.length; i++) {
        if (dic[smallerNumber[i].value]) return [smallerNumber[i].index, dic[smallerNumber[i].value]];
    }
}

console.log(`[1,2,3] , 2`);
result = findTargetSumIndex([1, 2, 3], 2);
console.log(`result: ${result}`);

console.log(`[1,2,3] , 3`);
result = findTargetSumIndex([1, 2, 3], 3);
console.log(`result: ${result}`);

console.log(`[1,2,3] , 5`);
result = findTargetSumIndex([1, 2, 3], 5);
console.log(`result: ${result}`);