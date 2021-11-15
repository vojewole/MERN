function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeadsSync() {
  let headsCount = 0;
  let attempts = 0;
  while (headsCount < 5) {
    attempts++;
    let result = tossCoin();
    console.log(`${result} was flipped`);
    if (result === "heads") {
      headsCount++;
    } else {
      headsCount = 0;
    }
  }
  function fiveHeads() {
    return new Promise((resolve, reject) => {
      if (headsCount === 5) {
        resolve(`It took ${attempts} tries to flip five "heads"`);
      }
      elif(attempts === 100);
      {
        reject(
          "After flipping the coin a 100 times it did not come up heads five times in a row."
        );
      }
    });
  }
  fiveHeads()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  console.log("When does this run now?");
}
console.log(fiveHeadsSync());
console.log("This is run after the fiveHeadsSync function completes");
