const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

if (isMainThread) {
  // Parent thread logic
  const worker = new Worker(__filename, { workerData: 5 });
  worker.on("message", (result) => {
    console.log(`Factorial of ${workerData} is ${result}`);
  });
} else {
  // Worker thread logic
  const result = factorial(workerData);
  parentPort.postMessage(result);
}
