// Q1 – Async Coffee Maker
function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.8 ? resolve("Water boiled") : reject("Boiling failed");
    }, 1500);
  });
}

function brewCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.8 ? resolve("Coffee brewed") : reject("Brewing failed");
    }, 1500);
  });
}

function pourCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.8 ? resolve("Poured into cup") : reject("Pouring failed");
    }, 1500);
  });
}

boilWater()
  .then((m) => { console.log(m); return brewCoffee(); })
  .then((m) => { console.log(m); return pourCoffee(); })
  .then((m) => { console.log(m); console.log("Coffee ready for the team!"); })
  .catch((err) => console.log("Error:", err));
