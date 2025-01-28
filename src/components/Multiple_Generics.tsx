//Example of Function Multiple Generices in TypeScript

function ToRecord<TypeOfValue,TypeOfId>(id : TypeOfId, value: TypeOfValue) {
// function ToRecord< T, U >(id : TypeOfId, value: TypeOfValue)  -------> Use the shortform on above code
    return {
        id,
        value
    };
}

//Old Code without using generics
// const result = ToRecord<string, number>(123, 'email@email.com ');
// const result2 = ToRecord<number[], string>('ea01',[1,5,7]);

export default ToRecord;