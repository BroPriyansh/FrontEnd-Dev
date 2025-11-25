// Q7 – Promise.allSettled
function loadProfile() { return new Promise((res, rej) => setTimeout(() => Math.random() < 0.8 ? res("Profile Loaded") : rej("Profile Failed"), 2000)); }
function loadPosts() { return new Promise((res, rej) => setTimeout(() => Math.random() < 0.8 ? res("Posts Loaded") : rej("Posts Failed"), 1500)); }
function loadMessages() { return new Promise((res, rej) => setTimeout(() => Math.random() < 0.8 ? res("Messages Loaded") : rej("Messages Failed"), 1000)); }

const start = Date.now();

Promise.allSettled([loadProfile(), loadPosts(), loadMessages()])
  .then((results) => {
    results.forEach((r, i) => console.log(`Module ${i+1}:`, r));
    console.log("Total time:", (Date.now() - start), "ms");
  });
