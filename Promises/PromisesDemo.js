const myPromise = new Promise((resolve, reject) => {
    resolve("Successfull");
});

console.log(myPromise);

const loginPromise = new Promise((resolve, reject) => {
    let loginSuccessful = false;
    if (loginSuccessful) {
        resolve("Login Successful");
    } else {
        reject("Invalid username or password")
    }
});

console.log(loginPromise);