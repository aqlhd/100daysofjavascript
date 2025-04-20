const incrementBtn = document.getElementById("increment");
const resetBtn = document.getElementById("reset");
const decrementBtn = document.getElementById("decrement");
let countValue = document.getElementById("count");
let currValue = +countValue.innerText;
const incrmentfn = (val) => {
  console.log(val);
};

const combineAll = (deter) => {
  if (deter === "INCREMENT") {
    countValue.innerText = ++currValue;
  }
  if (deter === "RESET") {
    currValue = 0;
    countValue.innerText = currValue;
  }
  if (deter === "DECREMENT") {
    countValue.innerText = --currValue;
  }
};

incrementBtn.addEventListener("click", () => {
  combineAll("INCREMENT");
});

resetBtn.addEventListener("click", () => {
  combineAll("RESET");
});

decrementBtn.addEventListener("click", () => {
  combineAll("DECREMENT");
});
