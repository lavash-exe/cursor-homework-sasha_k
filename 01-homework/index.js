// Base 
let priceFish = 123.965
let priceTea = 15.678
let priceFruits = 90.2345

let priceMax = Math.max(priceFish, priceTea, priceFruits) //Max
let priceMin = Math.min(priceFish, priceTea, priceFruits) //Min

let totalPrice = priceFruits + priceTea + priceFish
console.log(totalPrice) // Уся сума в змінній totalPrice

let flooredTotal = Math.floor(priceFruits) + Math.floor(priceFish) + Math.floor(priceTea)
console.log(flooredTotal) // Додав числа, які заокруглені до меншого

let roundedHundred = Math.ceil(totalPrice / 100) * 100;
console.log(roundedHundred) // Використав метод заокруглення, застосував його на суму поділену на 100, щоб 2,28... заокруглило до 3, а потім додаю 00 множенням на 100

let isEven = (Math.trunc(totalPrice) % 2 === 0) ? true : false
console.log(isEven) // Використав тернарний оператор для перевірки парності суми

let change500 = 500 - totalPrice 
console.log(change500) // Решта від суми оплати 500 грн

let avPrice = (totalPrice / 3).toFixed(2)
console.log(avPrice) // 76.62583... -> 76.63

let randomDiscount = Math.random(100).toFixed(1)
console.log(randomDiscount) // Випадкова знижка у десятих (0.1 = 10%)

let discount = totalPrice * randomDiscount
let toPayWithDiscount = totalPrice - discount
console.log(toPayWithDiscount.toFixed(2)) // До сплати зі знижкою

let selfcost = totalPrice / 2
let profit = selfcost - discount
console.log (profit) // Прибуток

//Advanced
document.writeln('Найдорожчий товар: ' + priceMax\n) 
document.writeln('Найдоступніший товар: ' + priceMin + '\n')
document.writeln('Загальна вартість: ' + totalPrice + '\n')
document.writeln('Загальна вартість з заокругленням: ' + flooredTotal + '\n')
document.writeln('Заокруглена сума до сотень: ' + roundedHundred + '\n')
document.writeln('Перевірка на парність: ' + isEven + '\n')
document.writeln('Решта від 500: ' + change500 + '\n')
document.writeln('Середня вартість (з заокругленням): ' + avPrice + '\n')
document.writeln('Випадкова знижка: ' + randomDiscount + '\n')
document.writeln('До сплати зі знижкою: ' + toPayWithDiscount + '\n')
document.writeln('Прибуток: ' + profit + '\n')

