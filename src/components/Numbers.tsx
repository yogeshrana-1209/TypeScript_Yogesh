// The Use of -------> Types of Union in TypeScript
// function logOutput(value: string | number | string[] | Image ) <--------------- Union in Typescript

//The Use of Type Narrowing with Type Guards

interface Image {
    src: string;
}

function logOutput(value: string | number | string[] | Image) {

    //Use of Type Narrowing
    //if value is a string....
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }

    if (typeof value === 'number') {
        console.log(Math.round(value));
    }

    if (Array.isArray(value)) {
        console.log(value.join(''));
    }

    if (typeof value === 'object' && !Array.isArray(value)) {
        console.log(value.src);
    }

}

interface User {
    username: string;
}

// function logObjectOutput(value: Image | User){
//     if ('username' in value) {
//         console.log(value.username);
//     } else if ('src' in value) {
//         console.log(value.src);
//     }
// }

function isUser(value: Image | User): value is User {
    return 'username' in value;
}

function logObjectOutput(value: Image | User) {
    if (isUser(value)) {
        console.log(value.username);
    } else {
        console.log(value.src);
    }
}


//For logOutput Function
logOutput('hi there');  //String
logOutput(123); //Number
logOutput(['hi', 'there']); //Array

//For logOutput Function
logObjectOutput({ src: 'img.jpg' }); // Object
logObjectOutput({ username: 'testuser' }); //Object



export default logOutput;