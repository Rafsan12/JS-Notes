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
// console.log(firstrNumberGreater10);

const objects = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
  ];
  const firstWithNameProperty = objects.find(object => object.hasOwnProperty("name")); // Returns any of the objects
  // console.log(firstWithNameProperty)


  /*
  Array splice()

Purpose:

Modifies an array by removing or replacing existing elements and/or adding new elements in place.
It directly changes the original array, unlike methods like filter or map that create new arrays.


Here's information about the splice() method in JavaScript:

Purpose:

Modifies an array by removing or replacing existing elements and/or adding new elements in place.
It directly changes the original array, unlike methods like filter or map that create new arrays.

Syntax:
array.splice(start, deleteCount, item1, item2, ...)

Parameters:
start: The index at which to start modifying the array.
deleteCount (optional): The number of elements to remove. Defaults to 0.
item1, item2, ... (optional): New elements to insert at the start index.


Returns:
An array containing the removed elements.

Key Points:
splice() directly modifies the original array.
It can be used to remove, insert, or replace elements.
It returns an array of the removed elements.
Use it when you need to make direct changes to an existing array.

  */


/*
Array slice()

Purpose:
Creates a new array containing a selected portion of an existing array, without modifying the original array.
It's often used to extract, copy, or rearrange elements within arrays.
Syntax:

JavaScript
array.slice(start, end)


Parameters:
start: The starting index of the slice (inclusive). Defaults to 0.
end (optional): The ending index of the slice (exclusive). Defaults to the array's length.


Returns:
A new array containing the extracted elements.


Key Points:
slice() creates a new array, leaving the original array intact.
It's a non-mutating method, unlike splice() which directly modifies the array.
It's useful for extracting, copying, and rearranging array elements without affecting the source.
It's often used in conjunction with other array methods like map, filter, and reduce to create new arrays with transformed data.


*/
  