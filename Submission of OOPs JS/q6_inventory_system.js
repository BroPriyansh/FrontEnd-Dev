const products=[
  {id:1,name:'A',category:'Electronics',price:1000,stock:2},
  {id:2,name:'B',category:'Clothes',price:500,stock:10},
  {id:3,name:'C',category:'Electronics',price:2000,stock:1}
];

function getLowStockProducts(){
  return products.filter(p=>p.stock<3);
}
function sortProductsByPrice(){
  return [...products].sort((a,b)=>a.price-b.price);
}
function calculateTotalInventoryValue(){
  return products.reduce((sum,p)=>sum+p.price*p.stock,0);
}
function groupByCategory(){
  return products.reduce((acc,p)=>{
    if(!acc[p.category]) acc[p.category]=[];
    acc[p.category].push(p);
    return acc;
  },{});
}

console.log(getLowStockProducts());
console.log(sortProductsByPrice());
console.log(calculateTotalInventoryValue());
console.log(groupByCategory());
