//Example of Function Generices in TypeScript

function ToRecord<TypeOfId>(id : TypeOfId, value: string) {
    return {
        id,
        value
    };
}

//Old Code without using generics
// const result = ToRecord<number>(123, 'email@email.com ');
// const result2 = ToRecord<string>('ea01','yogesh@email.com');

//New code with using generics
const result = ToRecord(123, 'email@email.com ');
const result2 = ToRecord('ea01','yogesh@email.com');
console.log(result);
console.log(result2);

export default ToRecord;