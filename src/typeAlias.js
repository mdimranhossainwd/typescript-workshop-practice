"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("../user");
// function createUser(firstName: string, lastName?: string) {
//   const user = {
//     id: crypto.randomUUID(),
//     firstName,
//     skills: [],
//   } as User;
//   return user;
// }
// console.log(createUser("John"));
// function createUser2(firstName: string, lastName?: string): User {
//   return {
//     id: crypto.randomUUID(),
//     firstName,
//     skills: [],
//   };
// }
// console.log(createUser2("Smith"));
function createUser3(firstName, lastName) {
    var user = {
        id: parseFloat(crypto.randomUUID()),
        firstName: firstName,
        lastName: lastName,
        skills: [],
    };
    return user;
}
// console.log(createUser3("Alica"));
var user = JSON.parse(JSON.stringify(user_1.UserData));
console.log(user);
var skills = user.skills.map(function (skill) { return skill.toUpperCase(); });
function printProject(project) {
    console.log(project);
}
console.log(printProject(user.projects[2]));
