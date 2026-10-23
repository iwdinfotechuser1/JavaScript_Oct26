const checkAge = (age) => {
    if(age >= 18 ) {
        return "Eligible";
    } else {
        return "Not Eligible";
    }
}

console.log(checkAge(25));
console.log(checkAge(16));

// Normal function
function add(a,b){  
    return a + b; 
}

// Arrow Function 
const add = (m, n) => m + n;   // Common for callbacks


const { test, expect } = require("@playwright/test");

test("Verify page title", async ({ page }) => {
    await page.goto("https://google.com");
    await expect(page).toHaveTilte("Example Domain");
})