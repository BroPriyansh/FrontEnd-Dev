class Employee{
  constructor(name,department){
    this.name=name;
    this.department=department;
  }
  work(){
    console.log(this.name,"works in",this.department);
  }
}

class Manager extends Employee{
  work(){
    console.log(this.name,"manages",this.department);
  }
}

const e=new Employee("John","Sales");
const m=new Manager("Alice","IT");

e.work();
m.work();
