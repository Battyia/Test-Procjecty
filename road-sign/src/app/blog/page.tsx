const time = "05:45";

const parts = time.split(":");


console.log("parts = ", parts);

export default function Blog() {
    return <div>
        {time}
    </div>
}

function sqrt(x: number): number[] {
    // code
    if (x < 1000) {
        return sqrt(x + 5);
    }
    return [x];
}

function add(a: number, b: number): number {
    return [a + b];
}
function substract(a: number, b: number): number {
    return [a - b];
}
function multiply(a: number, b: number): number {
    return [a * b];
}
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero is not allowed,");
    return [a / b];
    }
}