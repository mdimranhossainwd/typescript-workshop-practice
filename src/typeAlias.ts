type ID = string | number;
import { UserData } from "../user";

type User = {
  id: ID;
  firstName: string;
  lastName?: string;
  skills: string[];
  age: number;
  isActive: boolean;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  projects: {
    projectId: number;
    projectName: string;
    startDate: string;
    endDate: string | null;
    status: string;
  }[];
};

type User2 = {
  id: number;
  firstName: string;
  lastName?: string;
  skills: string[];
};

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

function createUser3(firstName: string, lastName?: string) {
  const user: User2 = {
    id: parseFloat(crypto.randomUUID()),
    firstName,
    lastName,
    skills: [],
  };
  return user;
}

// console.log(createUser3("Alica"));

const user = JSON.parse(JSON.stringify(UserData)) satisfies User;
console.log(user);

const skills = user.skills.map((skill) => skill.toUpperCase());

function printProject(project: User["projects"][number]) {
  console.log(project);
}

console.log(printProject(user.projects[2]));
