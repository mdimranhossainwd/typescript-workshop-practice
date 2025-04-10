export const UserData = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  skills: ["JavaScript", "TypeScript", "React"],
  age: 30,
  isActive: true,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
  projects: [
    {
      projectId: 101,
      projectName: "Project A",
      startDate: "2023-01-01",
      endDate: "2023-06-01",
      status: "completed",
    },
    {
      projectId: 102,
      projectName: "Project B",
      startDate: "2023-07-01",
      endDate: null,
      status: "in progress",
    },
    {
      projectId: 103,
      projectName: "Project C",
      startDate: "2023-08-01",
      endDate: null,
      status: "Pending",
    },
  ],
};
