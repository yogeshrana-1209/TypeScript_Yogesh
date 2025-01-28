//Use of Optional Properties in Typescript

interface UserProfile {
    likes : string[];
}

interface User {
    id: string;
    username: string;
    profile?: UserProfile;
    // profile?: UserProfile;
}

const user:User = {
    id: 'abc',
    username: 'John',
    profile: { 
        likes : ['cats']
    }
};

if( user.profile) {
    console.log(user.profile.likes);
}

console.log(user.profile?.likes);

function logValue(value: string, message?: string) {
    if(message) {
        console.log(message, value);
    } else {
        console.log(value);
    }
}

logValue('hello')
logValue('world', 'Something else')