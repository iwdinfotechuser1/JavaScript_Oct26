// const result = await somePromise;

function getData() {
    return Promise.resolve("Data Recevied");
}

async function displayData() {
    const result = await getData();

    console.log(result);
}

displayData();

// getData()  -> returns a fulfilled Promise
// displayData() -> is declared with async, so it can use await.
// await getData() -> Obtains the value "Data Recevied"
// result -> The value is stored in result
// console.log(result); -> prints the value
// await -> wait for a promise outcome. (Wait until promise settle) also await is a keyword in JavaScript