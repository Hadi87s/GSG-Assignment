// This function takes the products list and calculates the total price using the same reduce we used before.
function calculateTotalPrice(products) {
    return products.reduce(function (total, product) { return total + product.price; }, 0);
}
// An example to test out previous implementation.
var products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 },
];
// Created an Array from the type (Product[]) and added some values.
var total = calculateTotalPrice(products);
console.log("Total Price: $".concat(total)); // The output would be -> Total Price: $1800.
// Task 5
function isValidEmail(email) {
    // Step 1: Split the email on "@" and check the length.
    var parts = email.split("@");
    if (parts.length !== 2) {
        return false; // Invalid if there are no "@" or more than one "@".
    }
    // Step 2: Split the domain part on "." and check conditions.
    var domainParts = parts[1].split(".");
    if (domainParts.length < 2) {
        return false; // Invalid if the domain doesn't have a dot.
    }
    /*
    Step 3: Check if the last part of the domain is "com",
    there is different formats but since you've requested a .com one so here we go.
    */
    var lastPart = domainParts[domainParts.length - 1];
    if (lastPart !== "com") {
        return false; // Invalid if the domain doesn't end with "com".
    }
    // If all checks pass, the email is valid.
    return true;
}
// Testing the Email validation method:
console.log(isValidEmail("HadiIrshaid8722@gmail.com") == true ? "Email is Valid" : "Email is not Valid");
