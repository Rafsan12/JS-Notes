function maxProduct(arr) {
    
    arr.sort((a, b) => a - b);

    const maxProductOfTwo = arr[arr.length - 1] * arr[arr.length - 2];

    const minProductOfTwo = arr[0] * arr[1];

    return Math.max(maxProductOfTwo, minProductOfTwo);
}

// Test cases
const array1 = [2, 3, 1, 7, 10, 6];
console.log(maxProduct(array1)); 

const array2 = [-2, -5, 1, 3, -7];
console.log(maxProduct(array2)); 

maxProduct(array1);
maxProduct(array2);
