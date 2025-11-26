
// Q1: Callback demonstration
function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

function showEndMessage() {
  console.log("Welcome to the course!");
}

greetUser("Priyansh", showEndMessage);
