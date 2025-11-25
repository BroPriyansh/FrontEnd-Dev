class User{
  constructor(name,rating){
    this.name=name;
    this.rating=rating;
  }
}

class Driver extends User{
  constructor(name,rating,vehicle){
    super(name,rating);
    this.vehicle=vehicle;
  }
}

class Trip{
  constructor(from,to,distance){
    this.from=from;
    this.to=to;
    this.distance=distance;
  }
  calculateFare(){
    if(!this.distance || this.distance<0) throw new Error("Invalid distance");
    return this.distance*10;
  }
}

try{
  const t=new Trip("A","B",12);
  console.log("Fare:",t.calculateFare());
}catch(e){console.log(e.message);}
