type ID = string | number;

type Admin = {
  id: ID;
  role: "admin";
  manageControl: boolean;
};

type Manager = {
  id: ID;
  role: "manager";
};

type User = Admin | Manager;

function printUser(user: User) {
  if (user.role === "admin") {
    console.log("I am Admin Controller full Access");
    console.log(user.manageControl);
  }
  console.log(user.role);
}

printUser({ id: crypto.randomUUID(), role: "admin", manageControl: true });
printUser({ id: crypto.randomUUID(), role: "manager" });

function printValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  return value.toFixed(2);
}

console.log(printValue("hello world"));
console.log(printValue(123.456));

type ErrorResponse = {
  error: true;
  message: string;
};
type SuccessResponse = {
  error: false;
  data: string;
};

type ApiResponse = ErrorResponse | SuccessResponse;

function handleResponse(response: ApiResponse) {
  if (response.error) {
    console.log(response.message);
  } else {
    console.log(response.data);
  }
}
