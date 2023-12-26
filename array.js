/*
Array is a special variable which can hold more than one value;

Some array method: 

**Array find()**
**Array filter()**
**Array splice()**
**Array slice()**
**Array map()**
**Array reduce()**
**Array push()**
**Array concat()**
---------------------------
Array length
Array toString()
Array pop()
Array shift()
Array unshift()
Array join()
Array delete()
Array flat()
*/

/*
Array find() & Array filter()

Array find(): 

Array.prototype.find()

Purpose: Returns the first element in an array that satisfies a provided testing function.
Syntax: const foundElement = array.find(callbackFn(element, index, array))
Callback function arguments:
element: The current element being processed.
index (optional): The index of the current element.
array (optional): The original array being iterated over.
Returns: The first element that satisfies the condition, or undefined if no such element is found.
Terminates early: Stops iterating once a matching element is found.

Array filter(): 

Array.prototype.filter()

Purpose: Creates a new array containing all elements in the original array that pass a test implemented by a provided function.
Syntax: const newArray = array.filter(callbackFn(element, index, array))
Callback function arguments: Same as find().
Returns: A new array containing the filtered elements.
Iterates through the entire array: Processes all elements, even if matching ones are found early

Key Differences:

Return value: find() returns the first matching element, while filter() returns a new array of all matching elements.

Iteration: find() stops iterating once a match is found, while filter() always iterates through the entire array.


Best Practices:

Use find() when you need to find only the first matching element.
Use filter() when you need to create a new array containing all matching elements.
*/

// --use find()--
// Finding the first odd number in an array:

const numbers = [100,500,4441,2525,];
const oddNumber = numbers.find(number => number %2 !== 0);
// console.log(oddNumber);

const names = ["rafsan","raj","ahmed"];
const name = names.find((_, index) => index % 2 == 0)
// console.log(name);

// Find the first number in an array greater than 10

const numbers10 =  [1,5,11,20,25,10,11,120];
const firstrNumberGreater10 = numbers10.find(numbers => numbers > 10);
console.log(firstrNumberGreater10);