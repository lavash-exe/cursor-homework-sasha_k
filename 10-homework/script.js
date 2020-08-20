const playSound = (target) => {
    if (target.className = 'sound-box') {
        const currentId = target.childNodes[7].id
        document.getElementById(currentId).play()
    }
}

function handleClick(event) {
    let target = event.target;
    while (target != this) {
        if (target.tagName === 'DIV') {
            playSound(target)
            return
        } else {
            target = target.parentNode
        }
    }
}

document.querySelector('.sound-board').addEventListener('click', handleClick)

document.addEventListener('keydown', function (event) {
    console.log(event.which);
    switch (event.which) {
        case 49:
            document.getElementById('wilhelm').play()

            break;
        case 50:
            document.getElementById('yeet').play()

            break;
        case 51:
            document.getElementById('bruh').play()

            break;
        case 52:
            document.getElementById('yo').play()
            break;
        case 53:
            document.getElementById('baba').play()
            break;
        case 54:
            document.getElementById('ten').play()
            break;
    }
})