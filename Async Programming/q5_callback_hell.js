// Q5 – Callback hell + async/await refactor

// Callback hell version
function design(cb) { setTimeout(() => { console.log("Design"); cb(); }, 1000); }
function build(cb) { setTimeout(() => { console.log("Build"); cb(); }, 1000); }
function test(cb) { setTimeout(() => { console.log("Test"); cb(); }, 1000); }
function deploy(cb) { setTimeout(() => { console.log("Deploy"); cb(); }, 1000); }
function celebrate(cb) { setTimeout(() => { console.log("Celebrate"); cb(); }, 1000); }

design(() => {
  build(() => {
    test(() => {
      deploy(() => {
        celebrate(() => console.log("Pipeline complete!"));
      });
    });
  });
});

// async/await version
function wait(msg) {
  return new Promise((resolve) => {
    setTimeout(() => { console.log(msg); resolve(); }, 1000);
  });
}

async function pipeline() {
  await wait("Design");
  await wait("Build");
  await wait("Test");
  await wait("Deploy");
  await wait("Celebrate");
}

pipeline();

// async/await improves readability by avoiding deep nesting.
