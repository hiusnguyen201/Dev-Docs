// -------------------- Combining types --------------------
// interface A {
//   a: string;
// }

// interface B {
//   b: string;
// }

// type AB = A & B;

// let value: AB = { a: "1", b: "2" };

// -------------------- keyof Operator --------------------
// interface User {
//   name: string;
//   age: number;
//   location: string;
// }

// type UserKeys = keyof User;
// let key: UserKeys = "name";

// -------------------- Decorators --------------------
// function logger(
//   target: any,
//   propertyName: string,
//   descriptor: PropertyDescriptor
// ) {
//   const originalMethod = descriptor.value;
//   descriptor.value = function (...args: any[]) {
//     console.log(`Calling ${propertyName} with arguments: ${args}`);
//     return originalMethod.apply(this, args);
//   };
//   return descriptor;
// }

// class TestController {
//   @logger
//   add(a: number, b: number): number {
//     return a + b;
//   }
// }

// const testController = new TestController();
// console.log(testController.add(1, 2));
