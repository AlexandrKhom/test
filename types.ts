const str : string = 'alex';
const bool: boolean = true;
const num: number = 22;

const numArr1: number[] = [1, 2, 3, 4, 5];
const numArr2: Array<number> = [1, 2, 3, 4, 5]; // Generics

// Tuple
const tup: [string, number] = ['alex', 22];

// Func void
function sayName(name: string): void {
    console.log(name)
}
// Func never
function throwErr(message: string): never {
    throw new Error(message)
}

// Type (disappears in JS)
type Login = string;
const login: Login = 'alex';
const login2: Login = 'ander';
//const login3: Login = 22; // error coz not a string!!!
type ID = string | number;
const id1: ID = 'alex';
const id2: ID = 22;
//const id3: ID = true; // error coz not a string or number

