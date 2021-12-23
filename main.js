const calculate = document.querySelector(".calculate");
calculate.addEventListener("click", (e) => {
  e.preventDefault();
  const billAmt = document.getElementById("amount").value;
  const parsentise = document.getElementById("discount-percentage").value;
  const discount = document.getElementById("discount-amount");
  const finalPay = document.getElementById("pay");
  discount.value = (billAmt * parsentise) / 100;
  finalPay.value = billAmt - discount.value;
});
