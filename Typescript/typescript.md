<p align="center">
  <img style="text-align: center; display: block" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/800px-Typescript.svg.png" alt="Typescript Logo" width="100"/>
</p>
<h1 align="center">
Typescript
</h1>

# I. Basics

### 1. What is TypeScript ?

TypeScript is a free and **open-source** **high-level programming language** that adds **static typing** with optional type **annotations** to JavaScript.

### 2. Who developed TypeScript ?

Developed by: **Microsoft**

### 3. When was TypeScript released ?

Released: **1 October 2012**

### 4. Why TypeScript ?

- **Static type-checking**

```
const message = "hello!";
message();
```

<span style="display: block; padding: 6px 6px 6px 14px; background-color: #fee;border-left: 2px solid #bf1818;">This expression is not callable.
Type 'String' has no call signatures.</span>

- **Non-exception Failures**

```
const user = {
  name: "Daniel",
  age: 26,
};

user.location; // returns undefined
```

<span style="display: block; padding: 6px 6px 6px 14px; background-color: #fee;border-left: 2px solid #bf1818;">Property 'location' does not exist on type '{ name: string; age: number; }'.
</span>

- **Types for Tooling**

The type-checker has information to check things like whether we’re accessing the right properties on variables and other properties. Once it has that information, it can also start suggesting which properties you might want to use.

- **Explicit Types**

```
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
```

- **Strictness**

The **strict** flag in the CLI, or `"strict": true` in a **tsconfig.json** toggles them all on simultaneously, but we can opt out of them individually.

- **noImplicitAny**

Turning on the **noImplicitAny** flag will issue an error on any variables whose type is implicitly inferred as `any`.

- **strictNullChecks**

The **strictNullChecks** flag makes handling `null` and `undefined` more explicit, and spares us from worrying about whether we forgot to handle `null` and `undefined`.

# II. Types

## 1. Primitive Types

| Type      | Common | Example                                                                                      |
| --------- | ------ | -------------------------------------------------------------------------------------------- |
| string    | x      | `let param: string = "Name"`                                                                 |
| number    | x      | `let param: number = 25`                                                                     |
| boolean   | x      | `let param: boolean = true`                                                                  |
| null      |        | `let param: null = null`                                                                     |
| undefined |        | `let param: undefined = undefined`                                                           |
| bigint    |        | `let param: bigint = 9007199254740991n` <br/> `let param: bigint = BigInt(9007199254740991)` |
| symbol    |        | `let param: symbol = Symbol("id")`                                                           |

## 2. Array Types

- `number[] // This syntax work for any type`

- `Array<number>`

> Note that [number] is a different thing; refer to the section on Tuples.

## 3. Special Types

- `any`: you can use whenever you don’t want a particular value to cause typechecking errors.

- `unknown`

- `never`

- `void`

## 4. Function Types

- **Parameter Type Annotations**

```
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
```

- **Return Type Annotations**:

```
function getFavoriteNumber(): number {
  return 26;
}
```

- **Functions Which Return Promises**

```
async function getFavoriteNumber(): Promise<number> {
  return 26;
}
```

## 5. Object Types

```
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
```

- **Optional Properties**

```
function printName(obj: { first: string; last?: string }) {
  // ...
}
```

## 6. Union Types

- **Defining a Union Type**

```
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
```

- **Working with Union Types**

TypeScript will only allow an operation if it is valid for every member of the union.
For example, if you have the union string | number, you can’t use methods that are only available on string:

```
function printId(id: number | string) {
  console.log(id.toUpperCase());
}
```

<span style="display: block; padding: 6px 6px 6px 14px; background-color: #fee;border-left: 2px solid #bf1818;">Property 'toUpperCase' does not exist on type 'string | number'.
Property 'toUpperCase' does not exist on type 'number'.
</span>

Solution:

```
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
```

## 7. Type Aliases

```
type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
```

You can actually use a type alias to give a name to any type at all, not just an object type. For example, a type alias can name a union type:

```
type UserInputSanitizedString = string;

function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}
```

## 8. Interface Types

```
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
```

- **Differences Between Type Aliases and Interfaces**

1. Interface

```
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;
```

2. Type

```
type Animal = {
  name: string;
}

type Bear = Animal & {
  honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;
```

## 9. Type Assertions

For example, if you’re using `document.getElementById`, TypeScript only knows that this will return some kind of `HTMLElement`, but you might know that your page will always have an `HTMLCanvasElement` with a given ID.

```
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```

You can also use the angle-bracket syntax (except if the code is in a .tsx file), which is equivalent:

```
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```

## 10. Literal Types

```
let x: "hello" = "hello";
// It mean x exact value "hello"
```

- Combine with union type

```
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
```

- Literal Inference

If you wrote code like this:

```
const obj = { counter: 0 };
if (someCondition) {
  obj.counter = 1;
}
```

TypeScript doesn’t assume the assignment of `1` to a field which previously had `0` is an error. \
Another way of saying this is that `obj.counter` must have the type `number`, not `0`, because types are used to determine both reading and writing behavior.

The same applies to strings:

```
declare function handleRequest(url: string, method: "GET" | "POST"): void;

const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);
```

<span style="display: block; padding: 6px 6px 6px 14px; background-color: #fee;border-left: 2px solid #bf1818;">Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
</span>

There are two ways to work around this.

1. ```
   // Change 1:
   const req = { url: "https://example.com", method: "GET" as "GET" };
   // Change 2
   handleRequest(req.url, req.method as "GET");
   ```

2. ```
   const req = { url: "https://example.com", method: "GET" } as const;
   handleRequest(req.url, req.method);
   ```

The as `const` suffix acts like `const` but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like `string` or `number`.

## 11. `null` and `undefined`

```
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}
```

- **Non-null Assertion Operator (Postfix `!`)**

```
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
```

Only use `!` when you know that the value can’t be `null` or `undefined`.

## 12. Enums

```
enum UserResponse {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
  // ...
}
```

## 13. Tuple Types

```
type StringNumberPair = [string, number];
```

`StringNumberPair` is a tuple type of `string` and `number`.

```
function doSomething(pair: [string, number]) {
  const a = pair[0];

const a: string
  const b = pair[1];

const b: number
  // ...
}
```

We can also **destructure tuples** using JavaScript’s array destructuring.

```
function doSomething(stringHash: [string, number]) {
  const [inputString, hash] = stringHash;
}
```

- `readonly` Tuple Types

As you might expect, writing to any property of a `readonly` tuple isn’t allowed in TypeScript.

```
function doSomething(pair: readonly [string, number]) {
  pair[0] = "hello!";
}
```

<span style="display: block; padding: 6px 6px 6px 14px; background-color: #fee;border-left: 2px solid #bf1818;">Cannot assign to '0' because it is a read-only property.
</span>

Tuples tend to be created and left un-modified in most code, so annotating types as `readonly` tuples when possible is a good default. This is also important given that array literals with `const` assertions will be inferred with `readonly` tuple types.

```
let point = [3, 4] as const;

function distanceFromOrigin([x, y]: [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2);
}

distanceFromOrigin(point);
```

<span style="display: block; padding: 6px 6px 6px 14px; background-color: #fee;border-left: 2px solid #bf1818;">Argument of type 'readonly [3, 4]' is not assignable to parameter of type '[number, number]'.
The type 'readonly [3, 4]' is 'readonly' and cannot be assigned to the mutable type '[number, number]'.
</span>

`distanceFromOrigin` never modifies its elements, but expects a mutable tuple. Since `point`’s type was inferred as `readonly [3, 4]`, it won’t be compatible with `[number, number]` since that type can’t guarantee `point`’s elements won’t be mutated.
