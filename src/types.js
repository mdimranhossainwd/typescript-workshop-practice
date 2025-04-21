var data;
data = "Hello world";
data = 42;
console.log(data);
// Type Assertion to Convert unknown to a Specific Type
function processAsString(input) {
    var str = input; // Type assertion
    console.log(str.toUpperCase()); // Risky if input is not actually a string
}
//   processAsString("Hello"); // Works
//   processAsString(123); // Runtime error
// More refined way
function processData(input) {
    if (typeof input === "string") {
        console.log(input.toUpperCase()); // Safe usage as a string
    }
    else if (typeof input === "number") {
        console.log(input.toFixed(2)); // Safe usage as a number
    }
    else if (Array.isArray(input)) {
        console.log(input.length); // Safe usage as an array
    }
    else {
        console.log("Unknown type");
    }
}
processData("Hello");
processData(123);
processData([1, 2, 3]);
function processUser(input) {
    return (typeof input === "object" &&
        input !== null &&
        "id" in input &&
        typeof input.id === "number" &&
        "name" in input &&
        typeof input.name === "string");
}
function printUserInfo(input) {
    if (processUser(input)) {
        console.log("ID: ".concat(input.id, ", Name: ").concat(input.name));
    }
    else {
        console.log("Invalid user info");
    }
}
printUserInfo({ id: 1, name: "John" });
printUserInfo({ id: "1", name: "John" });
function processReponse(response) {
    if (typeof response.data === "string") {
        console.log("String data: ".concat(response.data));
    }
    else if (typeof response.data === "object" && response.data !== null) {
        console.log("Object data: ".concat(JSON.stringify(response.data)));
    }
    else {
        console.log("Unknown data type: ".concat(typeof response.data));
    }
}
processReponse({
    status: true,
    data: "Hello world",
});
processReponse({
    status: true,
    data: { id: 1, name: "John" },
});
processReponse({
    status: "success",
    data: [{ id: 1, name: "John" }],
});
