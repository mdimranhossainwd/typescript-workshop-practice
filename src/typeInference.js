function validForm(formData) {
    var email = formData.email;
    var age = formData.age;
    var isAdmin = formData.isAdmin;
    if ((email === null || email === void 0 ? void 0 : email.includes("@")) && age > 18) {
        return true;
    }
    return false;
}
function validForm2(formData) {
    var email = formData.email, age = formData.age, isAdmin = formData.isAdmin;
    return (email === null || email === void 0 ? void 0 : email.includes("@")) && age > 18;
}
console.log(validForm2({ email: "mdimran@gmail.com", age: 20, isAdmin: true }));
// **Why Type Inference Matters?**
// - **Readability**: Reduces clutter by eliminating unnecessary type annotations.
// - **Developer Efficiency**: Saves time by not requiring explicit types for obvious cases.
// - **Error Prevention**: Automatically enforces type safety based on inferred types.
// - **Scalability**: In large codebases, consistent use of inference ensures fewer manual changes during refactoring.
// - **Fewer Bugs**: Misaligned types are caught during development rather than at runtime.
// **Best Practices for Using Type Inference:**
// - **Trust TypeScript**: Use inference where possible, but provide explicit types for:
//     - Public APIs
//     - Function parameters
//     - Complex or ambiguous types
// - **Combine with Explicit Types**: Use type inference for local variables but provide types for more complex structures.
// - **Avoid `any`**: Relying on inference discourages the use of the `any` type, improving type safety
