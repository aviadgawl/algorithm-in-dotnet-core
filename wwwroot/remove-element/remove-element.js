
const removeElement = (array, num) => {
    let endIndex = array.length - 1;    
    
    for (let index = 0; index < array.length && array[index] !== undefined; index++) {
        if(array[index] === num){
            array[index] = array[endIndex];
            array[endIndex] = undefined;
            index--;
            endIndex--;
        }
    }

    return array;
}

const writeExample = (array, num, title) => {
    console.log(`%c${title}`, 'font-size:20px;');
    console.log(`%cinput array [${array}]`, 'color:red;font-size:15px;');
    console.log(`%cinput value ${num}`, 'color: blue;font-size:15px;');

    const result = removeElement(array, num);
    console.log(`%cresult [${result}]`, 'color:green;font-size:15px;');
}

writeExample([3, 2, 2, 3], 3, 'Example 1');

writeExample([3, 3, 1, 3, 3], 3, 'Example 2')

writeExample([3, 3, 1, 7, 3], 7, 'Example 3')
