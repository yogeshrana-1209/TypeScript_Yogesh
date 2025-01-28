// The use of Generic Type Constraints

// function collect(key, arr) {
//     retrun arr.map(el => el[key]);
// }

function collect<T extends keyof U, U extends object>(key: T, arr: U[]) {
    return arr.map(el => el[key]);
}

const result = collect('name', [
    {count: 1, name: 'apple'},
    {count: 20, name: 'Red'},
]);

console.log(result)

//Understanding the above example
// U extends object ---> {count: 1, name: 'apple'}, (Represent the Each Object inside the Array)
// T extends keyof U -----> All the Possible Key's of the U Object