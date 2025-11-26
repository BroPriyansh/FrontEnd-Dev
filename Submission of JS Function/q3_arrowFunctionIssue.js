
// Q3: Arrow function 'this' issue
const user = {
  name: "Priyansh",
  showName: () => {
    console.log(this.name); // undefined
  }
};
user.showName();

// FIX
const userFixed = {
  name: "Priyansh",
  showName() {
    console.log(this.name);
  }
};
userFixed.showName();
