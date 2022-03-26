const getTreeMaxLength = (node) => {

    if (node.left === undefined && node.right === undefined) return 1;

    let rightLength = 0;
    let leftLength = 0;

    if (node.left) rightLength = 1 + getTreeMaxLength(node.left);
    if (node.right) leftLength = 1 + getTreeMaxLength(node.right);

    return rightLength >= leftLength ? rightLength : leftLength;
}

const print = (binaryTree) => {
    console.log(`%cBinary Tree: ${JSON.stringify(binaryTree)}`, 'font-size: 15px;color: blue;');
    console.log(`%cLength: ${getTreeMaxLength(binaryTree)}`, 'font-size: 20px;color: green;');
}

const binaryTreeOne = {
    left: {
        left: {
            right: {},
            left: {
                right: {},
                left: {}
            }
        },
        right: {}
    },
    right: {
        right: {},
        left: {}
    }
}

print(binaryTreeOne);

const binaryTreeTwo = { left: {} };

print(binaryTreeTwo);

const binaryTreeThree = {};

print(binaryTreeThree);

const binaryTreeFour = { right: {} };

print(binaryTreeFour);