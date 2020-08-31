

setInterval(function () {
    $color = generateColor();
    $(`#${randomNumber()}`).css('background-color', $color)
}, 1000);

function generateBlocks() {
    const mainDiv = document.getElementById('square-block')
    
    for (let i = 1; i <= 25; i++){
        let blockDiv = document.createElement('div')
        blockDiv.id = `${i}`
        blockDiv.style.backgroundColor = generateColor()
        mainDiv.appendChild(blockDiv)
    }
    
}
generateBlocks()
function generateColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function randomNumber() {
    return Math.floor(Math.random() * 24) + 1;
}