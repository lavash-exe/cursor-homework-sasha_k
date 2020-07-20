// Base
let N = +prompt("Введи значення N"); // питаємо у користувача ввести значення N і переводимо його з string в number
const M = +prompt("Введи значення M"); // питаємо у користувача ввести значення M і переводимо його з string в number
console.log(N);
const boolEven = confirm("Пропускаємо парні числа?");
let sum = 0;

while (isNaN(N)) {
  // Оскільки я перевів його попередньо на number, то замість parseInt, я використав isNan для відсіювання чисел NaN. Користувач повинен переприсвоїти на ціле

  N = prompt("Це число не ціле, введи ще раз");
}

//
if (boolEven) {
  for (let i = N; i <= M; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
} else {
  for (let i = N; i <= M; i++) {
    sum += i;
  }
}
console.log(sum);
