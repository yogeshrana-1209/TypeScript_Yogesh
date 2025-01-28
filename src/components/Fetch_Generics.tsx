interface User {
    username: string;
}

interface Message  {
    content: string;
}

interface Image {
    url: string;
}

async function fetchData<T>(path:string): Promise<T> {
    const res = await fetch(path);
    const json = await res.json();

    return json as T;
}

export const run = async() => {
    const user = await fetchData<User>('/users');
    const message = await fetchData<Message>('/message');
    const image = await fetchData<Image>('images');
    
    console.log({ user, message, image });
    return { user, message, image };
}

