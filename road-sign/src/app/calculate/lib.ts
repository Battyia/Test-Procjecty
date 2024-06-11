export function add(a: number, b: number): number {
    return a + b;
}
export function substract(a: number, b: number): number {
    return a - b;
}
export function multiply(a: number, b: number): number {
    return a * b;
}
export function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero is not allowed, я сказав!");
    }
    return a / b;
}