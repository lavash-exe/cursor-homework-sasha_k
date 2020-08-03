//1
const getRandomArray = (length, min, max) => {
  const randomNumbersArr = [];
  min = Math.ceil(min);
  max = Math.floor(max);

  for (let i = 0; i <= length; i++) {
    randomNumbersArr.push(Math.trunc(Math.random() * (max - min + 1) + min));
  }

  return `Випадкових ${length} чисел у діапазоні від ${min} до ${max}  : ` + randomNumbersArr;
};
console.log(getRandomArray(5, 10, 20));

//3
const getAverage = (...numbers) => {
  let arrayAverage = [];
  let counter = 0;
  numbers.forEach((element) => {
    if (Number.isInteger(element)) {
      arrayAverage.push(element);
      counter += element;
    }
  });

  return "Середнє арифметичне: " + (counter / arrayAverage.length );
};

console.log(getAverage(5, 3, 2.2, 10, 30, 10, 0.5, 10.5));

//4
const getMediana = (...numbers) => {
  const arrayMediana = [];
  numbers.forEach((element) => {
    if (Number.isInteger(element)) {
      arrayMediana.push(element);
    }
  });
  arrayMediana.sort((a, b) => a - b);
  

  if (arrayMediana.length % 2) {
    return "Медіана функції getMediana() дорівнює: " + arrayMediana[(arrayMediana.length - 1) / 2];
  } else {
    return "Медіана функції getMediana() дорівнює: " + (arrayMediana[arrayMediana.length / 2] + arrayMediana[arrayMediana.length / 2 - 1]) / 2;
  }
};
console.log(getMediana(5, 3, 2.2, 10, 30, 10, 0.5, 10.5));

//5
const filterEvenNumbers = (...numbers) => {
  let arrayEvenNumbers = [];
  numbers.forEach((element) => {
    if (Number.isInteger(element) && element % 2 !== 0) {
      arrayEvenNumbers.push(element);
    }
  });
  return `Непарні числа: ` + arrayEvenNumbers;
};

console.log(filterEvenNumbers(5, 3, 2.2, 10, 30, 10, 0.5, 10.5));

//6
const countPositiveNumbers = (...numbers) => {
  let positiveCounter = 0;
  numbers.forEach((element) => {
    if (element > 0) {
      positiveCounter++;
    }
  });
  return `Додатніх чисел ` + positiveCounter;
};

console.log(countPositiveNumbers(-1, 2, -3, 4, -5, 6, -7, -8, -9, 10));

//7
const getDividedByFive = (...numbers) => {
  let arrDividing = [];
  numbers.forEach((element) => {
    if (element % 5 === 0 && element !== 0) {
      arrDividing.push(element);
    }
  });
  return `Числа кратні 5: ` + arrDividing;
};

console.log(getDividedByFive(10, 7, 55, 100, 1, 9, 0));
