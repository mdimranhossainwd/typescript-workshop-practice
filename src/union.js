function printUser(user) {
    if (user.role === "admin") {
        console.log("I am Admin Controller full Access");
        console.log(user.manageControl);
    }
    console.log(user.role);
}
printUser({ id: crypto.randomUUID(), role: "admin", manageControl: true });
printUser({ id: crypto.randomUUID(), role: "manager" });
function printValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return value.toFixed(2);
}
console.log(printValue("hello world"));
console.log(printValue(123.456));
