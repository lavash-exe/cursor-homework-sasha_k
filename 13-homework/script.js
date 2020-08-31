//vars declarations
const next = document.getElementById("next");
const up = document.getElementById(`font-up`);
const down = document.getElementById(`font-down`);
const indicator = document.getElementById(`indicator`);
let defaultFont = 14
let booleanThing = true;


//Generator
function* numberGenerator() {
    let i = 1;
    while (true) {
        yield i++
    }
    
}
const generator = numberGenerator();

next.addEventListener("click", () => {
    indicator.innerHTML = `${generator.next().value}`
})

//Font changer
function* upFont () {
    while (booleanThing) {
        yield defaultFont += 2;
    }
}

function* downFont() {
    while (!booleanThing) {
        yield defaultFont -= 2;
    }
}
let fontDown = downFont();
let fontUp = upFont();

up.addEventListener("click", () => {
    booleanThing = true;
    indicator.style.fontSize = `${fontUp.next().value}px`
})
down.addEventListener("click", () => {
    booleanThing = false;
    indicator.style.fontSize = `${fontDown.next().value}px`
})