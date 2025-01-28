export interface IImage {
    src: string;
}

export type LogValue = string | number | string[] | IImage;

export function logValue(value: LogValue): void {
    console.log(value);
}

//Function Generics in TypeScript

// export function wrapInArray<TypeToWrap>(value: TypeToWrap): (TypeToWrap)[] {
//     return [value];
// }

// export const result = wrapInArray('test');
// export const result2 = wrapInArray(10);

// Comment Techniques Used to define the Function Generics

export function wrapInArray<T>(value: T ): (T)[] {
    return [value];
}

export const result = wrapInArray<string>('test');
export const result2 = wrapInArray<number>(10);

// Another Example of Function Generics