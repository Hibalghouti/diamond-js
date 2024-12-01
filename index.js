const readline = require('readline');

// Create an interface to read input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the number of rows: ", function (x) {
    const row_nb = parseInt(x); // Convert input to an integer

    // Upper triangle
    for (let i = 0; i < row_nb; i++) {
        for (let j = 0; j < row_nb - i - 1; j++) {
            process.stdout.write(" ");
        }

        for (let k = 0; k < 2 * i + 1; k++) {
            process.stdout.write("*");
        }

        // Move to the next line
        console.log();
    }

    // Lower triangle
    for (let i = row_nb - 2; i >= 0; i--) {
        for (let j = 0; j < row_nb - i - 1; j++) {
            process.stdout.write(" ");
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            process.stdout.write("*");
        }


        console.log();
    }

    rl.close(); // Close the input stream
});
