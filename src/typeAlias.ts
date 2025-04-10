type ID = string | number;

type User = {
  id: ID;
  firstName: string;
  lastName?: string;
  skills: string[];
};

type User2 = {
  id: number;
  firstName: string;
  lastName?: string;
  skills: string[];
};

function createUser(firstName: string, lastName?: string) {
  const user = {
    id: crypto.randomUUID(),
    firstName,
    skills: [],
  } as User;
  return user;
}

// console.log(createUser("John"));

function createUser2(firstName: string, lastName?: string): User {
  return {
    id: crypto.randomUUID(),
    firstName,
    skills: [],
  };
}

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

console.log(createUser3("Alica"));
