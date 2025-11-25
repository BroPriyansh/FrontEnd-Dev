// Q2 – Task Scheduler
console.log("Start");

setTimeout(() => console.log("Macrotask: setTimeout"), 0);

Promise.resolve().then(() => console.log("Microtask: promise.then"));

console.log("Synchronous log");

console.log("End");

// Microtasks run before macrotasks because JS prioritizes microtask queue after main script execution.
