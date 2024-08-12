const { fork } = require("child_process");

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function calculateFactorialChild(n) {
  const childProcess = fork(__filename);
  childProcess.send(n);
  childProcess.on("message", (result) => {
    console.log(`Factorial of ${n} is ${result}`);
  });
}

if (process.argv.length > 2) {
  // Child process logic
  process.on("message", (n) => {
    const result = factorial(n);
    process.send(result);
    process.exit();
  });
} else {
  // Parent process logic
  calculateFactorialChild(5);
}
