var admin = {
    name: "Jhon",
    age: 18,
    status: "active",
    role: "admin",
};
var dev = {
    firstName: "John",
    position: "Software Engineer",
    about: function () {
        console.log("Hello, I am ".concat(dev.firstName, " and I am a ").concat(dev.position));
    },
};
console.log(dev);
