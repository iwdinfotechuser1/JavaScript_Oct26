// async -> keyword - to declare an asynchronous function, 
// calling an async function always return a promise

async function greet(){
    return "Hello Student";
}

console.log(greet());

greet().then((message) => {
    console.log(message);
});