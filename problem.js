function maxProduct(arr) {
    
    arr.sort((a, b) => a - b);

    const maxProductOfTwo = arr[arr.length - 1] * arr[arr.length - 2];

    const minProductOfTwo = arr[0] * arr[1];

    return Math.max(maxProductOfTwo, minProductOfTwo);
}

// Test cases
const array1 = [2, 3, 1, 7, 10, 6];
// console.log(maxProduct(array1)); 

const array2 = [-2, -5, 1, 3, -7];
// console.log(maxProduct(array2)); 

// maxProduct(array1);
// maxProduct(array2);

// ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 

function feetToInch(feet)
{
    const inch = feet * 12;
    return inch;
}

const findInch = feetToInch(2);
// console.log(findInch);

//একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।
function centimeterToMeter(centimeter)
{
    const Meter = centimeter /100;
    return Meter;
}

// const findInch = feetToInch(2);
// console.log(findInch);

/*
৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

এইবার ভালো করে খেয়াল করো। 

প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 

সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 

তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 

এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 
*/
function paperRequirements(book1,book2,book3)
{
    const printBook1 = book1 * 100;
    const printBook2 = book2 * 200;
    const printBook3 = book3 * 300;
    const totalPaperNeeds =  printBook1 + printBook2 + printBook3;
    return totalPaperNeeds;
}

const paperNeeds = paperRequirements(0,0,3);
// console.log(paperNeeds);

// একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।

function bestFriend(friends)
{
   let longestName = "";
    for(const friend of friends)
    {
        if(friend.length > longestName.length)
        {
          longestName = friend;
        }
    }
    
      return longestName;

}

const friends = ["Rafsan", "Raj", "Ahmed","RRRRRR"];

const bestFriendName = bestFriend(friends);

// console.log(bestFriendName); 

// এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।

function positiveNumbers(numbers)
{
    const positiveNumbers = [];
    for(const number of numbers)
    {
        if(number >= 0)
        {
            positiveNumbers.push(number);
        }
        else{
            break;
        }
    }
    return positiveNumbers;
}

const numbers = [1,0,30, -7,4,0,-9];
const findPositiveNumber = positiveNumbers(numbers);
// console.log(findPositiveNumber);

/*
তোমাকে একটা Function দেওয়া হবে Called MindGame(” যা ইনপুট হিসেবে একটা Positive Number নিবে।")


এখন তোমার Task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা Return করতে হবে

Sample Input & Output

Input: 5

Output: 7.5


Input: 50

Output: 75


Input: 33

Output: 49.5

*/

function mindGame(numbers)
{
  const positiveNumber = numbers
  const numberMulti = positiveNumber * 3;
  const numberPlus = numberMulti + 10;
  const numberdivide = numberPlus  / 2;
  const numberminus = numberdivide - 5;

  return numberminus;
}

const positiveNumber = mindGame(5);
// console.log(positiveNumber);

/*
Problem 2: Finding Even Or Odd


তোমাকে একটা Function দেওয়া হবে Called EvenOdd(). এটা ইনপুট হিসেবে একটা String নিবে। 



এখন তোমার Task: String এ Total কয়টা Character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘Even’ অথবা ‘Odd’ ।Sample Input & Output:


Input: ‘Phero’

Output: Odd

Input: ‘Batch7’

Output: Even

Input: ‘Chatgpt’

Output: Odd

*/

function evenOdd(name)
{
     if(name.length % 2 == 0)
     {
        return "Even";
     }else{
        return "Odd";
     }
}

const names = evenOdd("Batch7");
// console.log(names);

/*

Problem 3: Is Less Or Greater Than Seven


তোমাকে একটা Function দেওয়া হবে Called “IsLGSeven()”. এটা ইনপুট হিসেবে একটা Number নিবে।  

এখন তোমার Task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে Return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে Return করতে হবে Double Of The Input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।

Input : 6

Output: -1

Input: -15

Output: -22

Input: 15

Output: 30

*/

function IsLGSeven(number)
{
    if(number < 7)
    {
        return number - 7;
    }
    else{
      return  number * 2;
    }
    
}

const IslessSeven = IsLGSeven(15);
console.log(IslessSeven);