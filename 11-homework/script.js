function getRandomChinese(length) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let sign = Date.now().toString().slice(-5)
            let chineseArr = []
            for (let i = 0; i < length; i++) {
                sign += i;
                chineseArr.push(String.fromCharCode(sign))
            }
            if (length <= 20) {
                resolve(chineseArr.join(''))
            } else {
                reject(new Error('Надто великі числа валиш, краще постав 5'))
            }
        }, 50 * length)
    })
}

console.log('getRandomChinese: ', getRandomChinese(5));
