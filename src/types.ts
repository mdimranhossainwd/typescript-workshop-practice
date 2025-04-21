let data: any;

data = "Hello world";
data = 42;

console.log(data);

// Type Assertion to Convert unknown to a Specific Type

function processAsString(input: unknown) {
  const str = input as string; // Type assertion
  console.log(str.toUpperCase()); // Risky if input is not actually a string
}

//   processAsString("Hello"); // Works
//   processAsString(123); // Runtime error

// More refined way
function processData(input: unknown) {
  if (typeof input === "string") {
    console.log(input.toUpperCase()); // Safe usage as a string
  } else if (typeof input === "number") {
    console.log(input.toFixed(2)); // Safe usage as a number
  } else if (Array.isArray(input)) {
    console.log(input.length); // Safe usage as an array
  } else {
    console.log("Unknown type");
  }
}

processData("Hello");
processData(123);
processData([1, 2, 3]);

// Problem solving No ------------------> 2

type UserInfo = {
  id: number;
  name: string;
};

function processUser(input: unknown): input is UserInfo {
  return (
    typeof input === "object" &&
    input !== null &&
    "id" in input &&
    typeof (input as any).id === "number" &&
    "name" in input &&
    typeof (input as any).name === "string"
  );
}

function printUserInfo(input: unknown) {
  if (processUser(input)) {
    console.log(`ID: ${input.id}, Name: ${input.name}`);
  } else {
    console.log("Invalid user info");
  }
}

printUserInfo({ id: 1, name: "John" });
printUserInfo({ id: "1", name: "John" });

// Problem solving No ------------------> 3
type APIResponse = {
  status: string | boolean;
  data: unknown;
};

function processReponse(response: APIResponse) {
  if (typeof response.data === "string") {
    console.log(`String data: ${response.data}`);
  } else if (typeof response.data === "object" && response.data !== null) {
    console.log(`Object data: ${JSON.stringify(response.data)}`);
  } else {
    console.log(`Unknown data type: ${typeof response.data}`);
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
