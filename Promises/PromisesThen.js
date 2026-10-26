// .then() - Handles the fulfilled result of a promise.

const loginPromise = new Promise((resolve, reject) => {
    resolve("Login Successfull");
});

loginPromise.then((result) =>{
    console.log(result);
});