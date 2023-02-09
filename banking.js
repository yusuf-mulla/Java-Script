function banking(amount) {
  let notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
  let curruncy = Array(10).fill(0);
  for (let i = 0; i < 10; i++) {
    if (amount >= notes[i]) {
      curruncy[i] = Math.floor(amount / notes[i]);
      amount = amount % notes[i];
    }
  }
  console.log("CurrencyCount ->");
  for (let i = 0; i < 10; i++) {
    if (curruncy[i] != 0) {
      console.log(notes[i] + "*" + curruncy[i] + "=" + notes[i] * curruncy[i]);
    }
  }
}
let amount = 1000;
banking(amount);
