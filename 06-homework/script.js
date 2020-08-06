const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

// 1
const getSubjects = (index) => {
  let studentSubject = Object.keys(students[index].subjects);
  return studentSubject.map(
    (subject) =>
      subject.slice(0, 1).toUpperCase() + subject.slice(1).replace("_", " ")
  );
};

console.log(getSubjects(0));

//2
const getAverage = (...numbers) => {
  let arrayAverage = [];
  let counter = 0;
  numbers.forEach((element) => {
    if (Number.isInteger(element)) {
      arrayAverage.push(element);
      counter += element;
    }
  });

  return (counter / arrayAverage.length).toFixed(2);
};

const getAverageMark = (index = 0) => {
  let marksArray = Object.values(students[index].subjects);

  marksArray = marksArray.flat();
  const averagedArray = getAverage(...marksArray);
  return averagedArray;
};

console.log(`The average mark is: ${getAverageMark(2)}`);

//3
const getStudentInfo = (index) => {
  const studName = students[index].name;
  const studCourse = students[index].course;
  return `Name: ${studName}; Course: ${studCourse}; Average mark: ${getAverageMark(
    index
  )} `;
};
console.log(getStudentInfo(0));

//4
const getStudentsNames = (students) => {
  const arrNames = students.map((student) => student.name).sort();
  return `Names of students in alphabet order: ${arrNames}`;
};
console.log(getStudentsNames(students));

//5
const getBestStudent = (student) => {
  const studNames = students.map((student) => student.name);
  const arrAverageMarks = [];
  for (let ix in students) {
    arrAverageMarks.push(parseFloat(getAverageMark(ix)));
  }

  return `The best student is ${studNames[arrAverageMarks.indexOf(Math.max(...arrAverageMarks))]}`;
};

console.log(getBestStudent(0));

//6
const calculateWordLetters = (wordToCheck) => {
  let wordObject = {};
  wordToCheck = wordToCheck.toLowerCase().split("");
  for (let elem of wordToCheck) {
    let key = elem;
    if (wordObject[key]) {
      wordObject[key]++;
    } else {
      wordObject[key] = 1;
    }
  }
  return wordObject;
};
console.log(calculateWordLetters("бараболя і квасоля"));
