const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
//1

function getPairs (students) {
    let arrBoys = []
    let arrGirls = []
    let arrPairs = []
    students.forEach(student => {
        if(student.match(/\на|ра+$/ig)){
            arrGirls.push(student);
        }
        else{
            arrBoys.push(student);
        }
    })
    for(let i = 0; i < students.length/2; i++){
        arrPairs[i] = new Array(arrBoys[i], arrGirls[i]);
    }
    return arrPairs
}

const pairs = getPairs(students);
console.log(pairs);


// 2 

function themesForPairs (themes){
    const pairsPlusTheme = []

    for(let i = 0; i < themes.length; i++) {
        pairsPlusTheme.push([`${pairs[i]}:  ${themes[i]}`]);
    }

    return pairsPlusTheme
}

const themedPairs = themesForPairs(themes)
console.log(themedPairs)



//3
function markForStudent  (students, marks) {
    const markForStudent = []
    for(let i = 0; i < marks.length/2; i++) {
        markForStudent[i] = new Array (students[i], marks[i]) 
        
    }
    return markForStudent
}

const marksGranted = markForStudent(students, marks)
console.log(marksGranted);


//4
function randMark (){
    return Math.floor(Math.random() * 5) + 1 
}

function randomCourseResult (themedPairs){
    const marksForPairs = []
    for (let i = 0; i < themedPairs.length; i++) {
        marksForPairs[i] = [...themedPairs[i]]
    }

    marksForPairs.forEach(elem => {
        elem.push(randMark())
    })
    return marksForPairs
}

const courseResult = randomCourseResult(themedPairs) 
console.log(courseResult)


