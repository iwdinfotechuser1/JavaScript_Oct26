const loginPromise = new Promise((resolve, reject) => {
    const loginsuccess = true;

    if (loginsuccess) {
        resolve("Login Successful");
    } else {
        reject("Invalid username or password");
    }
});

// console.log(loginPromise);
loginPromise.then((success) => {
    console.log(success);
});

loginPromise.catch((error) => {
    console.log(error);
});
