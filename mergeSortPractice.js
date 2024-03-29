#!/usr/bin/env node

function mergeSort(arr) {

    // Base Case
    if (arr.length < 2) {
        return arr;
    }

    // Split array into 2 halves
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    // Initialize result array
    let result = [];

    // Recursively call left and right halves
    let leftSor = mergeSort(left);
    let rightSor = mergeSort(right);

    // Sort using pointers
    let pointerLeft = 0,
        pointerRight = 0;
    
    while (pointerLeft < leftSor.length && pointerRight < rightSor.length) {
        if (leftSor[pointerLeft] < rightSor[pointerRight]) {
            result.push(leftSor[pointerLeft]);
            pointerLeft++;
        } else {
            result.push(rightSor[pointerRight]);
            pointerRight++;
        }
    }

    // Add leftover elements if one half > other
    while (pointerLeft < leftSor.length) {
        result.push(leftSor[pointerLeft]);
        pointerLeft++;
    }
    while (pointerRight < rightSor.length) {

        result.push(rightSor[pointerRight]);
        pointerRight++;
    }

    return result;
}




console.log(`
    Goal: [0,1,1,2,3,5,8,13]
    Mine: [${mergeSort([3, 2, 1, 13, 8, 5, 0, 1])}]

    Goal: [79,100,105,110]
    Mine: [${mergeSort([105, 79, 100, 110])}]
`);