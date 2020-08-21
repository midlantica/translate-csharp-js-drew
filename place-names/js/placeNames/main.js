function main() {
    // Put your code here
    console.log("Duuuuuuude!")

  const names = [
      "Nashville",
      "Hong Kong",
      "The back yard",
      "Earth",
      "London",
      "The mall",
      "Ryman Auditorium",
      "The Great Wall of China"
    ]

    // Print some output to the terminal (aka. "Console");
    console.log("All Place Names");
    for (name of names) {
        console.log(name)
    }

    console.log();

    console.log("All the 'The' Names");
    for (name of names) {
        if (name.startsWith("The")) {
            console.log(name)
        }
    }



}

main();
