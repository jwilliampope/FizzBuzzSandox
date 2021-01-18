// ANIA

// for (let i = 1; i <= 100; i++) {
//   if (i % 15 === 0) {
//     console.log(`${i} fizz-buzz`)
//   } else if (i % 3 === 0) {
//     console.log(`${i} fizz`)
//   } else if (i % 5 === 0) {
//     console.log(`${i} buzz`)
//   } else {
//     console.log(`${i} try again`)
//   }
// }

// SHORTEST POSSIBLE (altho "let" can be dropped but will jam up with useStrict)

// for (let i = 0; i < 100; ) console.log((++i % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || i)

// CODER FOUNDRY

function fizzBuzzA(val1, val2) {
  let returnVal = ""
  for (let i = 1; i <= 100; i++) {
    if (i % val1 == 0 && i % val2 == 0) {
      returnVal += "FizzBuzz "
    } else if (i % val1 == 0) {
      returnVal += "Fizz "
    } else if (i % val2 == 0) {
      returnVal += "Buzz "
    } else {
      returnVal += i + " "
    }
  }
  return returnVal
}

// Call and use our FizzBuzz

function buzzIt() {
  let output = ""
  let val1 = document.getElementById("FizzValue").value
  let val2 = document.getElementById("BuzzValue").value
  output = fizzBuzzA(val1, val2)
  document.getElementById("results").innerHTML = output
  document.getElementById("reset").style.display = "block"
  document.getElementById("buzzIt").style.display = "none"
}
