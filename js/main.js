function fizzBuzzA(value1, value2) {
  let returnValue = ""
  for (let i = 0; i <= 100; i++) {
    if (i % value1 === 0 && i % value2 === 0) {
      returnValue += `<strong>FIZZ BUZZ</strong> `
    } else if (i % value1 === 0) {
      returnValue += `fizz `
    } else if (i % value2 === 0) {
      returnValue += `buzz `
    } else {
      returnValue += `${i} `
    }
  }

  return returnValue
}

function buzzIt() {
  let output = ""
  let value1 = document.getElementById("fizzValue").value
  let value2 = document.getElementById("buzzValue").value
  output = fizzBuzzA(value1, value2)
  document.getElementById("results").innerHTML = output
}
