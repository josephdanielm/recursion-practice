#!/usr/bin/env node

// Iterative
function fibs(n) {
    let returnArr = [];

    for (let i = 0; i < n; i++) {
        if (i < 2) {
            returnArr.push(i);
        } else {
            returnArr.push(returnArr.at(-2) + returnArr.at(-1));
        }
    }
    
    return returnArr;
}

fibs(8);



// Recursive
function fibsRec(n, returnArray = [0, 1]) {

    if (returnArray.length === (n)) { return returnArray; }

    let x = (returnArray.at(-2) + returnArray.at(-1));

    return (fibsRec(n, [...returnArray, x]));

}

console.log(fibsRec(8));