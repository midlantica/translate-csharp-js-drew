function main () {

  const names = [
    'Nashville',
    'London',
    'Hong Kong',
    'Madrid',
    'Rome',
    'The Paris',
    'The Athens',
    'Berlin'
  ]

  console.log('Array of names \n' + names)
  let name = ''

  console.log('\nAll City Names')
  for (name of names) {
    console.log(name)
  }

  console.log('\nAll the \'The\' City Names')
  const namage = names.filter(n => n.startsWith('The'))
  console.log(namage)
}

main()
