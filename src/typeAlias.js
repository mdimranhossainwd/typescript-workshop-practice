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
console.log(createUser3("Alica"));
