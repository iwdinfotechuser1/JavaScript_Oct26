let n = 5;

for(let i = 1; i<= n; i++){  // Outer Forloop
    let row = "";

    for (let j = 1; j <= n; j++){  // Inner for loop
        // row += "* "
     row = row + "* ";        
    }
    console.log(row);

}