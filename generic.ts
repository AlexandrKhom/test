const arrOfNum: Array<number> = [1, 2, 3, 4, 5];
const arrOfStr: Array<string> = ['hello', 'alex', 'ander'];

function reverse<T>(arr: T[]): T[] {
  return arr.reverse();}
reverse(arrOfNum);
reverse(arrOfStr);










