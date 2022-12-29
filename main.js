// Задача 1
// function square(numbers) {
//   return numbers.filter(num => !(num % 2)).reduce((a, b) => a + Math.sqrt(b))
// }

// console.log(square([0, 5, 9, 25, 49, 81, 100, 196, 256]))



// Задача 2
// label:
// for (let i = 0; i < 10; i++) { //! Эту строку можно изменить
//   for (let j = 0; j < 10; j++) {
//     if (i === 5 && j === 5) {
//       //! Эту строку можно изменить
//       console.log('i = ' + i + ' | ' + 'j = ' + j)
//       break label
//     }
//     console.log(i, j);
//   }
// }



// Задача 3
function getPrice(time, urgency) {
  let bid = 1500

  if (urgency) {
    bid = bid * 2.5
    time = time / 2
  }

  if (time > 150) {
    bid = bid - 250
  }
  
  return time * bid
}

// console.log(getPrice(200, true)) // 375 000
// console.log(getPrice(150, false)) // 225 000
// console.log(getPrice(100, true)) // 187 500
// console.log(getPrice(150, true)) // 281 250
// console.log(getPrice(320, true)) // 560 000
// console.log(getPrice(320, false)) // 400 000



// Задача 
function getProfitableProject(time, profit) {
  let costsUrgency = getPrice(time, true) - profit
  let costsNoUrgency = getPrice(time, false)

  if (costsNoUrgency > costsUrgency) {
    return 'Выгодней срочный проект. Потратишь на него ' + costsUrgency
  } else {
    return 'Выгодней обычный проект. Потратишь на него ' + costsNoUrgency
  }
}

console.log(getProfitableProject(150, 500000))