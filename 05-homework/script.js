//1
const getRandomArray = (length, min, max) => {

    const randomNumbersArr = []
    min = Math.ceil(min);
    max = Math.floor(max);
    
    

    
    for(let i = 0; i <= length; i++) {
        
        randomNumbersArr.push(Math.trunc(Math.random() * (max - min + 1) + min))
    }
    
    return randomNumbersArr
}
console.log('getRandomArray: ', getRandomArray(5, 10, 20));

//3 
const getAverage = (...numbers) => {
    let arrayAverage = []
    let counter = 0
    numbers.forEach(element => {
        if (Number.isInteger(element)) {
            arrayAverage.push(element)
            counter += element
            
        }
        
        
    });
    console.log(arrayAverage)
    return counter / arrayAverage.length
}

console.log(getAverage(5, 3, 2.2, 10, 30, 10, 0.5, 10.5))

//4
const getMediana = (...numbers) => {
    const arrayMediana = []
    numbers.forEach(element => {
        if (Number.isInteger(element)) {
            arrayMediana.push(element)            
        }
    });
    arrayMediana.sort((a,b) => a-b)
    console.log(arrayMediana)

    if(arrayMediana.length % 2) {
        return arrayMediana[(arrayMediana.length - 1) / 2];
    } else{
        return (arrayMediana[arrayMediana.length / 2] + arrayMediana[arrayMediana.length / 2 - 1]) / 2;
    }
}
console.log(getMediana(5, 3, 2.2, 10, 30, 10, 0.5, 10.5))

//5
const filterEvenNumbers = (...numbers) => {
    let arrayAllNumbers = []
    numbers.forEach(element => {
        if (Number.isInteger(element) && element % 2 !== 0) {
            arrayAllNumbers.push(element)            
        }

    });
    return arrayAllNumbers
}

console.log(filterEvenNumbers(5, 3, 2.2, 10, 30, 10, 0.5, 10.5))

//6
const countPositiveNumbers = (...numbers) => {
   let positiveCounter = 0
   numbers.forEach(element => {
    if (element > 0) {
        positiveCounter++
    }
    
});
return positiveCounter
}

console.log(countPositiveNumbers(-1, 2, -3, 4, -5, 6, -7, -8, -9, 10));

//7
const getDividedByFive = (...numbers) => {
    let arrDividing = []
    numbers.forEach(element => {
        if (element % 5 === 0 && element !== 0) {
            arrDividing.push(element)            
        }
    });
    return arrDividing
}

console.log(getDividedByFive(10,7,55,100,1,9,0));

