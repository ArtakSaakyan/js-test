function square(numbers) {
  return numbers.filter(num => num % 2 == 0).map(Math.sqrt).reduce((a, b) => a + b)
}

console.log(square([0, 5, 9, 25, 49, 81, 100, 196, 256]))