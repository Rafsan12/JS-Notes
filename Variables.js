/*
1.Variables are store a data
2. In JS 4 way to declared a variable

        Automatically
        Using var
        Using let
        Using const

3.The var keyword was used in all JavaScript code from 1995 to 2015.

    The let and const keywords were added to JavaScript in 2015.

    The var keyword should only be used in code written for older browsers.

4. When to Use var, let, or const?
        1. Always declare variables

        2. Always use const if the value should not be changed

        3. Always use const if the type should not be changed (Arrays and Objects)

        4. Only use let if you can't use const

        5. Only use var if you MUST support old browsers.

*/
// Automatically
// x=5;
// console.log(x);
// y=5;
// console.log(y);
// z=x+y;
// console.log(z);

// var
// if you use var you cna changes value of variable. its a big problem 
var x=5;
console.log(x);
x=6;
console.log(x);

// const