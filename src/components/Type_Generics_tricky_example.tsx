function randomElement<T>(arr:T[]) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}


const result = randomElement<number>([1,2,3]);
const result2 = randomElement<string>(['a','b','c']);
console.log('Random number:', result);
console.log('Random string:', result2);