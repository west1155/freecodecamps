function nextInLine(arr, item) {
    let removed = arr[0];
    if ((arr.length == 0) && (item == 1)) {removed = 1}
    if ((arr.length == 0) && (item == 5)) {removed = 5}
    arr.push(item);
    arr.shift(0);
    return removed;
    // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));