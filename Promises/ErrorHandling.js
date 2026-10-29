function getData() {
    return Promise.reject(new Error("Server Error"))
}

getData().then((result) => {
    console.log("Success:", result);
})
.catch((error) => {
    console.log("Error:", error.message);
})
