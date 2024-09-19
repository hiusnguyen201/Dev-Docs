<p align="center">
  <img style="text-align: center; display: block" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/800px-Typescript.svg.png" alt="Typescript Logo" width="100"/>
</p>
<h1 align="center">
Typescript
</h1>

# I. Introduction

TypeScript is a **statically-typed** programming language that is a superset of JavaScript.

It was developed and is maintained by **Microsoft**.

TypeScript was created to address the challenges of building large-scale JavaScript applications and adds optional type annotations, classes, interfaces, and other features to the language.

Released: **1 October 2012**

The main benefits of using TypeScript include:

- Type Safety
- Improved Tooling
- Improved Maintainability
- Backwards Compatibility

# II. Typescript Types

TypeScript has several built-in types, including:

- number
- string
- boolean
- any
- void
- null and undefined
- never
- object
- symbol
- Enumerated types (enum)
- Tuple types
- Array types
- Union types
- Intersection types
- Type aliases
- Type assertions

## 1. Primitive Types

| Type      | Common | Example                            |
| --------- | ------ | ---------------------------------- |
| number    | x      | `let param: number = 25`           |
| string    | x      | `let param: string = "Name"`       |
| boolean   | x      | `let param: boolean = true`        |
| null      |        | `let param: null = null`           |
| undefined |        | `let param: undefined = undefined` |
| void      |        |                                    |

## 2. Object Types

### 2.1. Interface

TypeScript allows you to specifically type an object using an interface that can be reused by multiple objects.

```
interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  return 'Hello ' + person.name;
}
```

### 2.2. Class

In TypeScript, a class is a blueprint for creating objects with specific properties and methods. Classes are a fundamental concept in object-oriented programming.

```
class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  drive() {
    console.log(`Driving my ${this.year} ${this.make} ${this.model}`);
  }
}
```

### 2.3. Enum

Enums is not a type-level extension of JavaScript. It allows a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

```
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
```

### 2.4. Array

To specify the type of an array like `[1, 2, 3]`, you can use the syntax number`[]`; this syntax works for any type (e.g. `string[]` is an array of strings, and so on). You may also see this written as `Array<number>`, which means the same thing.

```
const numbers: number[] = [1, 2, 3];
```

### 2.5. Tuple

A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.

```
type StringNumberPair = [string, number];

const pair: StringNumberPair = ['hello', 42];

const first = pair[0];
const second = pair[1];

// Error: Index out of bounds
const third = pair[2];
```

### 2.6 Object

To define an `object` type, we simply list its properties and their types.

```
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 3, y: 7 });
```

## 3. Top Types

### 3.1. Unknown

`unknown` is the type-safe counterpart of any. Anything is assignable to `unknown`, but `unknown` isn’t assignable to anything but itself and `any` without a type assertion or a control flow based narrowing.

Likewise, no operations are permitted on an `unknown` without first asserting or narrowing to a more specific type.

```
function f1(a: any) {
  a.b(); // OK
}

function f2(a: unknown) {
  // Error: Property 'b' does not exist on type 'unknown'.
  a.b();
}
```

### 3.2. Any

You can use whenever you don’t want a particular value to cause typechecking errors.

```
let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = 'hello';
const n: number = obj;
```

## 4. Bottom Types

The `never` type represents the type of values that never occur. This means that the function throws an exception or terminates execution of the program.

```
// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error('Something failed');
}

// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}
```

## 5. Assertions

### 5.1. As Type

The `as` keyword is used for type assertions, allowing you to explicitly inform the compiler about the type of a value when it cannot be inferred automatically.

Type assertions are a way to override the default static type-checking behavior and tell the compiler that you know more about the type of a particular expression than it does.

```
let someValue: any = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;

console.log(strLength); // Outputs: 18
```

### 5.2. As Any

When a value is declared with the `any` type, the compiler will not perform any type checks or type inference on that value.

```
let anyValue: any = 42;

// we can assign any value to anyValue, regardless of its type
anyValue = 'Hello, world!';
anyValue = true;
```

### 5.3. As Const

`as const` is a type assertion in TypeScript that allows you to assert that an expression has a specific type, and that its value should be treated as a read-only value.

```
const colors = ['red', 'green', 'blue'] as const;

// colors is now of type readonly ['red', 'green', 'blue']
```

# III. Type Inference

Type inference in TypeScript refers to the process of automatically determining the type of a variable based on the value assigned to it.

This allows you to write code that is more concise and easier to understand, as the TypeScript compiler can deduce the types of variables without you having to explicitly specify them.

```
let name = 'John Doe';
```

# IV. Type Compatibility

TypeScript uses structural typing to determine type compatibility.

```
interface Point {
  x: number;
  y: number;
}

let p1: Point = { x: 10, y: 20 };
let p2: { x: number; y: number } = p1;

console.log(p2.x); // Output: 10
```

# V. Combining Types

You can combine types using type union and type intersection.

- **Type Union:** The union operator `|` is used to combine two or more types into a single type that represents all the possible types.

```
type stringOrNumber = string | number;
let value: stringOrNumber = 'hello';

value = 42;
```

- **Type Intersection:** The intersection operator `&` is used to intersect two or more types into a single type that represents the properties of all the types.

```
interface A {
  a: string;
}

interface B {
  b: number;
}

type AB = A & B;
let value: AB = { a: 'hello', b: 42 };
```

## 1. Union Types

Allow you to specify multiple possible types for a single variable or parameter.

```
function combine(input1: string | number, input2: string | number) {
  return input1 + input2;
}
```

## 2. Intersection Types

Creates a new type by combining multiple existing types. The new type has all features of the existing types.

```
type typeAB = typeA & typeB;
```

The `typeAB` will have all properties from both typeA and typeB.

## 3. Type Aliases

Create a new name for a type.

```
type Name = string;
type Age = number;
type User = { name: Name; age: Age };

const user: User = { name: 'John', age: 30 };
```

## 4. keyof Operator

The `keyof` operator in TypeScript is used to get the union of keys from an object type.

```
interface User {
  name: string;
  age: number;
  location: string;
}

type UserKeys = keyof User; // "name" | "age" | "location"
const key: UserKeys = 'name';
```

# VI. Type Guards / Narrowing

Type guards are a way to narrow down the type of a variable.

This is useful when you want to do something different depending on the type of a variable.

## 1. instanceof operator

The `instanceof` operator is a way to narrow down the type of a variable. It is used to check if an object is an instance of a class.

```
class Bird {
  fly() {
    console.log('flying...');
  }
  layEggs() {
    console.log('laying eggs...');
  }
}

const pet = new Bird();

// instanceof
if (pet instanceof Bird) {
  pet.fly();
} else {
  console.log('pet is not a bird');
}
```

## 2. typeof Operator

The `typeof` operator is used to check the type of a variable. It returns a string value representing the type of the variable.

```
let value: string | number = 'hello';

if (typeof value === 'string') {
  console.log('value is a string');
} else {
  console.log('value is a number');
}
```

## 3. Equality

TypeScript also uses switch statements and equality checks like `===`, `!==`, `==`, and `!=` to narrow types.

```
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
    y.toLowerCase();
  } else {
    console.log(x);
    console.log(y);
  }
}
```

## 4. Truthiness

We can use any expression in conditionals, `&&`s, `||`s, `if` statements, Boolean negations (`!`), and more.

```
function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }

  return "Nobody's here. :(";
}
```

## 5. Type Predicates

Type predicates are functions that return a boolean value. They are used to narrow the type of a variable. Type predicates are used in type guards.

```
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function example(x: unknown) {
  if (isString(x)) {
    // We can now call any 'string' method on 'x'.
    x.toUpperCase();
  } else {
    console.log(x);
  }
}
```

# VII. Typescript Functions

> Function Declaration Syntax:

```
function name(param1: type1, param2: type2, ...): returnType {
  return value;
}
```

> Function Expression Syntax:

```
let name = function(param1: type1, param2: type2, ...): returnType {
  return value;
};
```

## 1. Typing Functions

Functions can be typed in a few different ways to indicate the input parameters and return type of the function.

> Function declaration with types:

```
function add(a: number, b: number): number {
  return a + b;
}
```

> Arrow function with types:

```
const multiply = (a: number, b: number): number => {
  return a * b;
};
```

> Function type:

```
let divide: (a: number, b: number) => number;

divide = (a, b) => {
  return a / b;
};
```

## 2. Function Overloading

Allows multiple functions with the same name but with different parameters to be defined.

The correct function to call is determined based on the number, type, and order of the arguments passed to the function at runtime.

```
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any): any {
  return a + b;
}

console.log(add(1, 2)); // 3
console.log(add('Hello', ' World')); // "Hello World"
```

<!-- <span style="display: block; padding: 6px 6px 6px 14px; background-color: #fee;border-left: 2px solid #bf1818;">Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
</span> -->

# VIII. Typescript Interfaces

Interfaces in TypeScript provide a way to define a contract for a type, which includes a set of properties, methods, and events.

It’s used to enforce a structure for an object, class, or function argument.

Interfaces are not transpiled to JavaScript and are only used by TypeScript at compile-time for type-checking purposes.

```
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: 'John Doe',
  age: 30,
};
```

## 1. Types vs Interfaces

Both types and interfaces can be used to define the structure of objects and enforce type checks. However, there are some differences between the two.

Types are used to create a new named type based on an existing type or to combine existing types into a new type. They can be created using the type keyword.

```
type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: 'John Doe',
  age: 30,
};
```

Interfaces, on the other hand, are used to describe the structure of objects and classes. They can be created using the interface keyword. For example

```
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: 'John Doe',
  age: 30,
};
```

## 2. Extending Interfaces

You can extend an interface by creating a new interface that inherits from the original interface using the “extends” keyword.

The new interface can include additional properties, methods, or redefine the members of the original interface.

```
interface Shape {
  width: number;
  height: number;
}

interface Square extends Shape {
  sideLength: number;
}

let square: Square = {
  width: 10,
  height: 10,
  sideLength: 10,
};
```

## 3. Interface Declaration

An `interface` in TypeScript is a blueprint for creating objects with specific structure.

An `interface` defines a set of properties, methods, and events that a class or object must implement.

```
interface Person {
  firstName: string;
  lastName: string;
  age?: number;

  getFullName(): string;
}
```

## 4. Hybrid Types

A hybrid type is a type that combines multiple types into a single type.

> Example:

```
type StringOrNumber = string | number;
```

> More complex types:

```
type Education = {
  degree: string;
  school: string;
  year: number;
};

type User = {
  name: string;
  age: number;
  email: string;
  education: Education;
};
```

# IX. Classes

Classes in TypeScript are a blueprint for creating objects

```
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log(`${this.name} is making a sound`);
  }
}

const dog = new Animal('Dog');
dog.makeSound(); // Output: Dog is making a sound
```

## 1. Constructor Params

Constructor parameters can be declared with access modifiers (e.g. `public`, `private`, `protected`) and/or type annotations.

```
class Example {
  constructor(private name: string, public age: number) {}
}
```

## 2. Access Modifiers

Access modifiers are keywords used to control the visibility and accessibility of class properties and methods. There are three access modifiers in TypeScript:

- `public:` This is the default access modifier. Properties and methods declared as public can be accessed from anywhere, both inside and outside the class.

- `private:` Properties and methods declared as private can only be accessed within the same class. They are not accessible from outside the class.

- `protected:` Properties and methods declared as protected can be accessed within the class and its subclasses. They are not accessible from outside the class and its subclasses.

## 3. Abstract Classes

Abstract classes in TypeScript are classes that cannot be instantiated on their own and must be subclassed by other classes.

Abstract classes provide a blueprint for other classes and can have abstract methods, which are methods without a body and must be overridden by the subclass.

```
abstract class Animal {
  abstract makeSound(): void;

  move(): void {
    console.log('moving...');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('bark');
  }
}
```

## 4. Inheritance vs Polymorphism

Inheritance and polymorphism are two fundamental concepts in object-oriented programming, and they are supported in TypeScript as well.

```
class Animal {
  makeSound(): void {
    console.log('Making animal sound');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Bark');
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log('Meow');
  }
}

let animal: Animal;

animal = new Dog();
animal.makeSound(); // Output: Bark

animal = new Cat();
animal.makeSound(); // Output: Meow
```

## 5. Method Overriding

Method overriding is a mechanism where a subclass provides a new implementation for a method that is already defined in its parent class.

```
class Animal {
  makeSound(): void {
    console.log('Making animal sound');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Bark');
  }
}

let animal: Animal;

animal = new Dog();
animal.makeSound(); // Output: Bark
```

## 6. Constructor Overloading

You can achieve constructor overloading by using multiple constructor definitions with different parameter lists in a single class.

```
class Point {
  // Overloads
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {
    // TBD
  }
}
```

# X. Generics

Generics in TypeScript are a way to write code that can work with multiple data types.

Generics allow you to write functions, classes, and interfaces that take one or more type parameters.

```
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>('Hello'); // type of output will be 'string'
```

## 1. Generic Types

Allow you to write objects, functions and classes that work with multiple data types.

```
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
```

## 2. Generic Constraints

Allow you to specify the requirements for the type parameters used in a generic type.

Constraints are specified using the `extends` keyword, followed by the type that the type parameter must extend or implement.

```
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  // Now we know it has a .length property, so no more error
  console.log(arg.length);

  return arg;
}

loggingIdentity(3); // Error, number doesn't have a .length property
loggingIdentity({ length: 10, value: 3 }); // OK
```

# XI. Decorators

Allow you to modify the behavior of a class, property, method, or parameter.

They are a way to add additional functionality to existing code, and they can be used for a wide range of tasks, including logging, performance optimization, and validation.

```
function log(
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with arguments: ${args}`);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}

const calculator = new Calculator();
calculator.add(1, 2);
```

# XII. Utility Types

TypeScript provides several utility types that can be used to manipulate and transform existing types. Here are some of the most common ones:

## 1. Partial\<Type>

Constructs a type with all properties of `Type` set to optional.

```
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
```

## 2. Required\<Type>

Constructs a type consisting of all properties of `Type` set to required.

```
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5 };
```

> Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.

## 3. Readonly\<Type>

Constructs a type with all properties of `Type` set to `readonly`

```
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

todo.title = "Hello";
```

> Cannot assign to 'title' because it is a read-only property.

## 4. Record\<Keys, Type>

Constructs an object type whose property keys are `Keys` and whose property values are `Type`.

```
ype CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
  age: number;
  breed: string;
}

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
```

## 5. Pick\<Type, Keys>

Constructs a type by picking the set of properties `Keys` (string literal or union of string literals) from `Type`.

```
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
```

## 6. Omit\<Type, Keys>

Constructs a type by picking all properties from `Type` and then removing `Keys`

```
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};
```

## 7. Exclude\<UnionType, ExcludedMembers>

Constructs a type by excluding from `UnionType` all union members that are assignable to `ExcludedMembers`.

```
type T0 = Exclude<"a" | "b" | "c", "a">;
```

> type T0 = "b" | "c"

```
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
```

> type T1 = "c"

```
type T2 = Exclude<string | number | (() => void), Function>;
```

> type T2 = string | number

## 8. Extract\<Type, Union>

Constructs a type by extracting from `Type` all union members that are assignable to `Union`.

```
type T0 = Extract<"a" | "b" | "c", "a" | "f">;
```

> type T0 = "a"

```
type T1 = Extract<string | number | (() => void), Function>;
```

> type T1 = () => void

## 9. NonNullable\<Type>

Constructs a type by excluding `null` and `undefined` from `Type`.

```
type T0 = NonNullable<string | number | undefined>;
```

> type T0 = string | number

```
type T1 = NonNullable<string[] | null | undefined>;
```

> type T1 = string[]

## 10. Parameters\<Type>

Constructs a tuple type from the types used in the parameters of a function type `Type`.

```
declare function f1(arg: { a: number; b: string }): void;

type T0 = Parameters<() => string>;
> type T0 = []

type T1 = Parameters<(s: string) => void>;
> type T1 = [s: string]

type T2 = Parameters<<T>(arg: T) => T>;
> type T2 = [arg: unknown]

type T3 = Parameters<typeof f1>;
> type T3 = [arg: { a: number; b: string; }]

type T4 = Parameters<any>;
> type T4 = unknown[]

type T5 = Parameters<never>;
> type T5 = never

type T6 = Parameters<string>;
> Type 'string' does not satisfy the constraint '(...args: any) => any'.
> type T6 = never

type T7 = Parameters<Function>;
> Type 'Function' does not satisfy the constraint '(...args: any) => any'.
> Type 'Function' provides no match for the signature '(...args: any): any'.
> type T7 = never
```

## 11. ConstructorParameters\<Type>

Constructs a tuple or array type from the types of a constructor function type.

It produces a tuple type with all the parameter types (or the type `never` if `Type` is not a function).

```
type T0 = ConstructorParameters<ErrorConstructor>;
> type T0 = [message?: string]

type T1 = ConstructorParameters<FunctionConstructor>;
> type T1 = string[]

type T2 = ConstructorParameters<RegExpConstructor>;
> type T2 = [pattern: string | RegExp, flags?: string]

class C {
  constructor(a: number, b: string) {}
}
type T3 = ConstructorParameters<typeof C>;
> type T3 = [a: number, b: string]

type T4 = ConstructorParameters<any>;
> type T4 = unknown[]

type T5 = ConstructorParameters<Function>;
> Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
> Type 'Function' provides no match for the signature 'new (...args: any): any'.
> type T5 = never
```

## 12. ReturnType\<Type>

Constructs a type consisting of the return type of function `Type`.

```
declare function f1(): { a: number; b: string };

type T0 = ReturnType<() => string>;
> type T0 = string

type T1 = ReturnType<(s: string) => void>;
> type T1 = void

type T2 = ReturnType<<T>() => T>;
> type T2 = unknown

type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
> type T3 = number[]

type T4 = ReturnType<typeof f1>;
> type T4 = { a: number; b: string; }

type T5 = ReturnType<any>;
> type T5 = any

type T6 = ReturnType<never>;
> type T6 = never

type T7 = ReturnType<string>;
> Type 'string' does not satisfy the constraint '(...args: any) => any'.
> type T7 = any

type T8 = ReturnType<Function>;
> Type 'Function' does not satisfy the constraint '(...args: any) => any'.
> Type 'Function' provides no match for the signature '(...args: any): any'.
> type T8 = any
```

## 13. InstanceType\<Type>

Constructs a type consisting of the instance type of a constructor function in `Type`.

```
class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>;
> type T0 = C

type T2 = InstanceType<never>;
> type T2 = never

type T3 = InstanceType<string>;
> Type 'string' does not satisfy the constraint 'abstract new (...args: any) => any'.
> type T3 = any

type T4 = InstanceType<Function>;
> Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
> Type 'Function' provides no match for the signature 'new (...args: any): any'.
> type T4 = any
```

# XIII. Advanced Types

Advanced types in TypeScript are a set of advanced type constructs that allow for more complex and expressive type systems.

Some of the most commonly used advanced types in TypeScript include:

- Intersection Types
- Union Types
- Type Aliases
- Conditional Types
- Indexed Access Types
- Mapped Types
- Type Guards

## 1. Intersection Types

```
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;
```

> Interfaces vs. Intersections

- With interfaces, we could use an `extends` clause to extend from other types, and we were able to do something similar with intersections and name the result with a type alias.

- The principal difference between the two is how conflicts are handled, and that difference is typically one of the main reasons why you’d pick one over the other between an interface and a type alias of an intersection type.

- If interfaces are defined with the same name, TypeScript will attempt to merge them if the properties are compatible. If the properties are not compatible (i.e., they have the same property name but different types), TypeScript will raise an error.

- In the case of intersection types, properties with different types will be merged automatically. When the type is used later, TypeScript will expect the property to satisfy both types simultaneously, which may produce unexpected results.

For example, the following code will throw an error because the properties are incompatible:

```
interface Person {
  name: string;
}
interface Person {
  name: number;
}
```

In contrast, the following code will compile, but it results in a `never` type:

```
interface Person1 {
  name: string;
}

interface Person2 {
  name: number;
}

type Staff = Person1 & Person2

declare const staffer: Staff;
staffer.name;
// (property) name: never
```

## 2. Union Types

## 3. Type Aliases

## 4. Conditional Types

```
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
// type Example1 = number

type Example2 = RegExp extends Animal ? number : string;
// type Example2 = string
```

## 5. Indexed Access Types

```
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];
> type Age = number
```

The indexing type is itself a type, so we can use unions, `keyof`, or other types entirely:

```
type I1 = Person["age" | "name"];
// type I1 = string | number

type I1 = Person[keyof Person];
// type I1 = string | number | boolean
```

## 6. Mapped Types

```
type OnlyBoolsAndHorses = {
  [key: string]: boolean | Horse;
};

const conforms: OnlyBoolsAndHorses = {
  del: true,
  rodney: false,
};
```

Mapped types build on the syntax for index signatures, which are used to declare the types of properties which have not been declared ahead of time:

```
type OnlyBoolsAndHorses = {
  [key: string]: boolean | Horse;
};

const conforms: OnlyBoolsAndHorses = {
  del: true,
  rodney: false,
};
```

A mapped type is a generic type which uses a union of `PropertyKeys` (frequently created via a `keyof`) to iterate through keys to create a type:

```
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
```

In this example, `OptionsFlags` will take all the properties from the type `Type` and change their values to be a boolean.

```
type Features = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<Features>;
> type FeatureOptions = {
>     darkMode: boolean;
>     newUserProfile: boolean;
> }
```

### Mapping Modifiers

There are two additional modifiers which can be applied during mapping: `readonly` and `?` which affect mutability and optionality respectively.

You can remove or add these modifiers by prefixing with `-` or `+`. If you don’t add a prefix, then `+` is assumed.

```
// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;
> type UnlockedAccount = {
>     id: string;
>     name: string;
> }
```

```
// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User = Concrete<MaybeUser>;
> type User = {
>     id: string;
>     name: string;
>     age: number;
> }
```
