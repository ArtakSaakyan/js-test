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
  let timeMore = time / 2
  
  if (urgency && timeMore <= 150) {
    let sum = (time / 2) * (bid * 2.5)
    console.log('Проект срочный')
    console.log('Ставка: ' + bid * 2.5)
    console.log('Количество часов: ' + time / 2)
    return 'Стоиомость проекта: ' + sum + '₽'

  } else if (urgency & timeMore > 150) {
    let sum = time * (bid - 250)
    console.log('Проект срочный, но время проекта больше 150 часов')
    console.log('Ставка: ' + (bid - 250))
    console.log('Количество часов: ' + time)
    return 'Стоиомость проекта: ' + sum + '₽'

  } else {
    let sum = time * bid
    console.log('Проект не срочный')
    console.log('Ставка: ' + bid)
    console.log('Количество часов: ' + time)
    return 'Стоиомость проекта: ' + sum + '₽'
  }
}

console.log(getPrice(300, true))

// Оптимизированный код
function getPrice(time, urgency) {
  let bid = 1500
  let timeMore = time / 2
  
  if (urgency && timeMore < 150) {
    return (time / 2) * (bid * 2.5)
  } else if (urgency & timeMore > 150) {
    return time * (bid - 250)
  } else {
    return time * bid
  }
}

console.log(getPrice(150, true))