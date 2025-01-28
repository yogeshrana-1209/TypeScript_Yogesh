interface Book {
    title: string;
}

async function fetchBook(): Promise<Book> {
    const res = await fetch('/book');
    const data: unknown = await res.json();

    // Old Code
    // return data as Book;

    if (data && typeof data === 'object' && 'title' in data && typeof data.title === 'string') {
        return data as Book;
    }

    throw new Error('Expected to get a Book, but didn\'t');
}

async function run() {
    const book = await fetchBook();
    console.log('Fetched book:', book);
}

export default {run, fetchBook };