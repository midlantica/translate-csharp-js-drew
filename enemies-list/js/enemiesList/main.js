const main = () => {
  console.log('My ENEMIES LIST')
  console.log('===============')

  const enemies = [
    {
      FirstName: 'Joshua',
      LastName: 'Flowers',
      Offenses: [
        'Being a jerk to me in elementary school',
        'Not being nice to me in elementary school',
      ],
      IsReallyHated: true,
    },
    {
      FirstName: 'Darth',
      LastName: 'Vader',
      Offenses: [
        "Cut off Luke's hand",
        'Murdered all those kids',
        'Unkind management practices',
      ],
      IsReallyHated: true,
    },
    {
      FirstName: 'Betty',
      LastName: 'Rudelady',
      Offenses: [
        'Phone calls in the theater',
        'Phone calls on the bus',
        'Phone calls in line at the grocery store',
        'Poor conversationalist',
      ],
      IsReallyHated: true,
    },
    {
      FirstName: 'Leon',
      LastName: 'Peck',
      Offenses: ['Keeps giving me a hotplate'],
      IsReallyHated: false,
    },
  ]

  for (myEnemy in enemies) {
    const first = enemies[myEnemy].FirstName
    const last = enemies[myEnemy].LastName
    const fullName = `${first} ${last}`
    if (enemies[myEnemy].IsReallyHated) {
      console.log(fullName)
    }
  }
}

main()
