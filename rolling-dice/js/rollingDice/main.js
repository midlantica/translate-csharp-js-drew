const main = () => {
  // Put your code here
  console.log("Let's roll some dice, baby!")
  console.log("===========================")

  for (let i; i < 10; i++) {
    let die1 = roll()
    let die2 = roll()
    let message = `${die1} + ${die2} === ${die1.value + die2.value}`

    if (die1.value === die2.value) {
      message += " DOUBLES!"
    }

    console.log(message)

  }

  const roll = () => {
    let dieValue = random(1, 6)
    die = dieValue
    return die
  }

  const die = () => {
    let dieString = ""

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
