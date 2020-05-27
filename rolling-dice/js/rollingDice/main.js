main = () => {
  // Put your code here
  console.log("Let's roll some dice, baby!")
  console.log("===========================")

  const getRandom = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  for (let i = 0; i < 10; i++) {
    let die1 = getRandom(1,6)
    let die2 = getRandom(1,6)
    let message = `${die1} + ${die2} == ${die1 + die2}`

    if (die1 === die2) {
      message += " DOUBLES!"
    }
    console.log(message)
  }

  const DieObj = (value) => {
    return {
      value: value
    }
  }

  console.log('### dieString')
  let dieString = (DieObj) => {

    switch (dieString) {
      case 1:
        dieString = "\u2680"
        break
      case 2:
        dieString = "\u2681"
        break
      case 3:
        dieString = "\u2682"
        break
      case 4:
        dieString = "\u2683"
        break
      case 5:
        dieString = "\u2684"
        break
      case 6:
        dieString = "\u2685"
        break
    }
    return dieString
  }

}

main();
