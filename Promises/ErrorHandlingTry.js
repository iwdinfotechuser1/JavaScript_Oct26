async function getData(){
    try {
        const result = await Promise.reject(new Error("Server Error"));
        console.log("Success: " ,result);
    } catch (error) {
        console.log("Error: ", error.message);
    }
}

getData();