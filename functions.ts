function add(a: number, b: number): number {
    return a + b
}
function toUpper(str: string): string {
    return str.toUpperCase()
}

interface IPosition {
    x: number | undefined;
    y: number | undefined;
}
interface IPositionDefault extends IPosition {
    default: string;
}
function position(): IPosition
function position(a: number): IPositionDefault
function position(a: number, b: number): IPosition

function position(a?: number, b?: number) {
    if (!a && !b) {
        return {x: undefined, y: undefined}
    }
    if (a && !b) {
        return {x: a, y: undefined, default: a.toString()}
    }
    return {x: a, y: b}
}

console.log('Empty ', position());
console.log('One param ', position(11));
console.log('Two params ', position(11, 22));


















