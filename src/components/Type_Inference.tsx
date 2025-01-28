// A Return is Function tha use Inference t=and Assume that the return v
// is any type of data, so that's why we used the <T>

function callAndReturn<T>(fn: () => T): T {
    return fn();
}

const result = callAndReturn(() => 5);
console.log(result);
