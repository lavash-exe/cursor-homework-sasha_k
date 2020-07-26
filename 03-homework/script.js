//1

function getMaxDigit(enterNumber) {
  var max = 0;
  let arrNumbers = String(enterNumber).split("");

  for (let i = 0; i <= arrNumbers.length; i++) {
    if (max < arrNumbers[i]) {
      max = arrNumbers[i];
    }
  }
  return `Максимальна цифра у числі:  ${max}`;
}
console.log(getMaxDigit(945));

//2

function powerNumber(number, index) {
  let res = 1;
  for (let i = 0; i < index; i++) {
    res *= number;
  }
  return `Число ${number} у степені ${index} дорівнює: ${res}`;
}

console.log(powerNumber(10, 3));

//3

function fixName(name) {
  return `Поломане ім'я: ${name} Виправлене ім'я:  ${(name[0].toUpperCase() + name.slice(1).toLowerCase())}`;
}
console.log(fixName("сАшА"));

//4

function taxToPay(salary) {
  const tax = salary * 0.195;
  const yourSalary = salary - tax
  return `Зарплата з податком:  ${yourSalary}`;
}

console.log(taxToPay(1000));

// 5

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return `Випадкове число: ${(Math.floor(Math.random() * (max - min + 1)) + min)}`;
}

console.log(getRandomNumber(5, 100000));

//6

function countLetter(letterToCount, wordToCheck) {
  const arrWord = wordToCheck.split("");
  let counter = 0;
  for (let i = 0; i <= arrWord.length; i++) {
    if (arrWord[i] === letterToCount) {
      counter++;
    }
  }
  
  return `Кількість літер ${letterToCount} у слові ${wordToCheck} дорівнює ${counter}`;
}
console.log(countLetter("a", "aero"));

//7
function convertCurrency(valueToConvert) {
    const currencyUSD = 26
    const currencyUAH = 0.036
    let exchangeValue = 0
    const arrValue = valueToConvert.split('')
    
    if(arrValue[arrValue.length - 1] === 'h'){
        exchangeValue = parseInt(valueToConvert) * currencyUAH
        return `Конвертована сума з гривень в долари: ${exchangeValue.toFixed(2)}$`
    }
    else if (arrValue[arrValue.length - 1] === '$') {
        exchangeValue = parseInt(valueToConvert) * currencyUSD
        return `Конвертована сума з доларів у гривні: ${exchangeValue.toFixed(2)} uah`
    }
    
}

console.log(convertCurrency("26000uah"))


//8

function getRandomPassword(amountOfNumbers = 8) {
    let maxValue = 1
    for (let i = 1; i <= amountOfNumbers; i++){
        maxValue *= 10
        
    }

    return `Пароль з ${amountOfNumbers} знаків ${getRandomNumber(1, maxValue)}`
}

console.log(getRandomPassword(3))
console.log(getRandomPassword())

//9
function deleteLetters(letterToDelete, wordToClear) {
    
    const arrWord = wordToClear.split('')
    
    for (let i = 0; i <= arrWord.length; i++) {
        if (arrWord[i] == letterToDelete) {
            delete arrWord[i]
        }
      }
      return `Залишок слова "${wordToClear}" це "${arrWord.join('')}" після видалення літери "${letterToDelete}"`
}

console.log(deleteLetters('к', 'кек'))

//10
function isPalyndrom (stringToCheck){
    let firstString = stringToCheck.toLowerCase().replace(/\s/g, '')
    console.log(firstString)
    let reverseString = firstString.split('').reverse().join("")
    console.log(reverseString)
    if(firstString === reverseString) {
        return `Стрічка "${stringToCheck}" паліндром`
    }
    else {
        return `Стрічка "${stringToCheck}" не паліндром` 
    }
}



//11

function deleteDuplicateLetter(duplicateLetterToDelete, wordWithDuplicates) {
   // Coming soon
   // Please stand by
}

document.writeln(`<p>Функція №1: ${getMaxDigit(945)}</p>`)
document.writeln(`<p>Функція №2: ${powerNumber(10, 3)}</p>`)
document.writeln(`<p>Функція №3: ${fixName("сАшА")}</p>`)
document.writeln(`<p>Функція №4: ${taxToPay(1000)}</p>`)
document.writeln(`<p>Функція №5: ${getRandomNumber(5, 100000)}</p>`)
document.writeln(`<p>Функція №6: ${countLetter("a", "aero")}</p>`)
document.writeln(`<p>Функція №7: ${convertCurrency("26000uah")}</p>`)
document.writeln(`<p>Функція №8: ${getRandomPassword()}</p>`)
document.writeln(`<p>Функція №9: ${deleteLetters('к', 'кек')}</p>`)
document.writeln(`<p>Функція №10: ${isPalyndrom('кек')}</p>`)
