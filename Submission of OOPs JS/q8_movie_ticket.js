class MovieTicket{
  constructor(movieName,seatNo,price){
    this.movieName=movieName;
    this.seatNo=seatNo;
    this.price=price;
  }
}
MovieTicket.prototype.printTicket=function(){
  console.log("Movie:",this.movieName,"Seat:",this.seatNo,"Price:",this.price);
};

class OnlineTicket extends MovieTicket{
  constructor(movieName,seatNo,price,fee){
    super(movieName,seatNo,price);
    this.convenienceFee=fee;
  }
  getTotalAmount(){
    return this.price+this.convenienceFee;
  }
}

const t=new OnlineTicket("Avatar","A12",300,50);
t.printTicket();
console.log("Total:",t.getTotalAmount());
