// Question 1: Values & Data Types
let myName = "Razan";
console.log(typeof myName);
let number = 9.5;
console.log(typeof number);
let result = true;
console.log(typeof result);
let empty = null;
console.log(typeof empty);
let note;
console.log(typeof note);

// Question 2: Numbers & Strings
let nb1 = 10;
let nb2= 31;
let id = "555";
let result1 = nb1 + nb2 + id;
console.log(result1);// the result will be 41555, since it added nb1 and nb2 (result = 41), it converted 41 to String, then concatenate it with 555
console.log(typeof result1); // String
// Fix
let correctResult = nb1 + nb2 + Number(id);
console.log(correctResult); // 596
console.log(typeof correctResult); // Number

// Question 3: Unary Operators
let a = "10";
console.log(-a); // The output will be -10, "10" is converted to a number, and the minus makes it -10
let b = true;
console.log(+b); // 1  true is converted to a number (it corresponds to 1)
console.log(-b); // -1  true is converted to a number (it corresponds to 1), then the - is applied => -1

// Question 4: Boolean Values & Comparisons
let num = 5;
let numString = "5";
// Strict Comparison
console.log(num === numString); // False, since number != String (different types)
console.log(false === 0); // False, since boolean != number (different types)
console.log(empty === note); // False, since null != undefined (different types)    ---- (Question 5)
// Loose Comparison
console.log(num == numString); // True, "5" is converted to number 5, 5 = 5 is true
console.log(false == 0); // True, "false is converted to 0, 0 = 0 is true
console.log(empty == note); // True, null == undefined in loose comparison    ---- (Question 5)

// Question 5: Empty Values
// Solved the same thing in Question 4

// Question 6: Type Conversion
const values = ["123", "", false, undefined];
for (const value of values) {
  console.log("Value:", value, "Type:", typeof value);
  console.log("String:", String(value));
  console.log("Number:", Number(value));
  console.log("Boolean:", Boolean(value));
  console.log();
}

// Question 7: Bonus
function convertAndDescribe(value) {
  console.log("Original Value:", value);
  console.log("Original Type:", typeof value);

  const string = String(value);
  const nb = Number(value);
  const bool = Boolean(value);

  console.log("After String Conversion -> Value:", string, ", Type:", typeof string);
  console.log("After Number Conversion -> Value:", nb, ", Type:", typeof nb);
  console.log("After Boolean Conversion -> Value:", bool, ", Type:", typeof bool);
  console.log();
}

// Testing
convertAndDescribe("123");
convertAndDescribe("");
convertAndDescribe(undefined);
