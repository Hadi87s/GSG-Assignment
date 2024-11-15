// Task 2
function Calculate(numbers) {
    // Calculating the sum using the reduce method, which is basicly "Loop And Accumulate" logic.
    let sum = numbers.reduce((summation, element) => summation + element, 0);

    /*
        the reduce takes each number and accumulates it to the summation variable,
        using the built in reducde method.
    */

    // the Average is simply dividint the total sum by the # of elements.
    let average = sum / numbers.length;

    //returning both values encapsulated in one Object to access them via the dot operator.
    return { sum, average }
}

// An example to test out previous implementation.
let numbers = [50, 20, 10, 40, 52, 75, 78];
let result = Calculate(numbers);
/* 
the function Calculate(argument) here returns an object containing
the two values we need, the sum and the average, it will be shown on this manner:

{ 
  sum: 325, 
  average: 46
}
*/

console.log(`The sum of the numbers is: ${result.sum}`);
console.log(`The average for all the numbers is: ${Math.round(result.average)}`);


// Task 3
function RemoveDuplicates(names) {
    return Array(...new Set(names));
}

// An example to test out previous implementation.
const strings = ["apple", "banana", "apple", "orange", "banana", "grape"];
const uniqueStrings = RemoveDuplicates(strings);

console.log(`%cthe Array without any duplications:%c ${uniqueStrings}`, `color:red; font-size:15px`, `font-weight:unset; color:unset;`);