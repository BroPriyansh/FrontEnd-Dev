class BankAccount{
  #balance=0;

  deposit(amount){
    this.#balance+=amount;
  }
  withdraw(amount){
    if(amount>this.#balance) throw new Error("Insufficient balance");
    this.#balance-=amount;
  }
  getBalance(){
    return this.#balance;
  }
}

const acc=new BankAccount();
acc.deposit(1000);

try{acc.withdraw(1500);}catch(e){console.log(e.message);}
console.log(acc.getBalance());
