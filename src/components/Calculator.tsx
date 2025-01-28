interface Calculator {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
}

const calculator: Calculator = {
    add(a: number, b: number) {
        return a + b;
    },
    subtract(a: number, b: number) {
        return a - b;
    }
};

export default calculator;