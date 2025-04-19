interface RoleUser {
  name: string;
  age: number;
  status: string;
}

interface RoleAdmin extends RoleUser {
  role: string;
}

const admin: RoleAdmin = {
  name: "Jhon",
  age: 18,
  status: "active",
  role: "admin",
};

interface DevInfo {
  firstName: string;
  lastName?: string;
  position: string;
  about: () => void;
}

const dev: DevInfo = {
  firstName: "John",
  position: "Software Engineer",
  about: () => {
    console.log(`Hello, I am ${dev.firstName} and I am a ${dev.position}`);
  },
};

console.log(dev);
