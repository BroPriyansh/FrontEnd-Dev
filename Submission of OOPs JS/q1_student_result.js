class Student{
  constructor(name,marks){
    this.name=name;
    this.marks=marks;
  }
  calculateAverage(){
    const avg=this.marks.reduce((a,b)=>a+b,0)/this.marks.length;
    return avg;
  }
  getGrade(){
    const avg=this.calculateAverage();
    if(avg>=90) return 'A';
    if(avg>=75) return 'B';
    if(avg>=50) return 'C';
    return 'F';
  }
}

const s1=new Student("A",[80,90,85]);
const s2=new Student("B",[60,70,55]);
const s3=new Student("C",[30,40,35]);

console.log(s1.name,s1.getGrade());
console.log(s2.name,s2.getGrade());
console.log(s3.name,s3.getGrade());
