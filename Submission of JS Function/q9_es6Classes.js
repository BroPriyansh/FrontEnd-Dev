
// Q9: ES6 Class version of Person -> Student
class Person {
  constructor(name) {
    this.name = name;
  }
  showName() {
    console.log("Name:", this.name);
  }
}

class Student extends Person {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }
  showBranch() {
    console.log("Branch:", this.branch);
  }
}

const s2 = new Student("Priyansh", "CSE");
s2.showName();
s2.showBranch();
