// Base
let N = +prompt("Введи значення N"); // питаємо у користувача ввести значення N і переводимо його з string в number
let sum = 0;
while (!Number.isInteger(N) || N <= 0  ) {
  N = +prompt("Число N не ціле і не додатнєпш");
}
let M = +prompt("Введи значення M"); // питаємо у користувача ввести значення M і переводимо його з string в number
while ( N > M) {
    N = +prompt("Число N надто велике, спробуй ще");
}
const boolEven = confirm("Пропускаємо парні числа?");

if (boolEven) { // confirm true
  for (let i = N; i <= M; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  document.write("<p>Сума чисел (якщо пропускаємо парні числа): " + sum + "</p>")
} else { // confirm false
  for (let i = N; i <= M; i++) {
    sum += i;
  }
  document.write("<p>Сума чисел (якщо не пропускаємо парні числа): " + sum + "</p>")
}
console.log(sum);
