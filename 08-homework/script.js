//Basic
class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.studMarks = [];
    this.isStudent = true;
  }

  getInfo() {
    return `Студент ${this.course}го курсу з навчального закладу ${this.university}, ${this.fullName}`;
  }

  dismiss() {
    this.isStudent = false;
  }

  recover() {
    this.isStudent = true;
  }

  get marks() {
    if (this.isStudent) {
      this.studMarks.push(5, 4, 4, 5);
      return this.studMarks;
    } else {
      return null;
    }
  }

  set marks(newMark) {
    if (this.isStudent) {
      this.studMarks.push(newMark);
      return this.studMarks;
    } else {
      return null;
    }
  }

  getAverageMark() {
    let counter = 0;

    this.studMarks.forEach((elem) => {
      counter += elem;
    });
    let avMark = counter / this.studMarks.length;
    return avMark;
  }
}

const student1 = new Student("ЛНУ ім.Івана Франка", "1", "Богдан Хмельницький");
console.log("student1: ", student1.getInfo());
console.log(student1.marks);
console.log(student1.getAverageMark());

//Advanced
class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);
  }
  get marks() {
    if (this.isStudent) {
      this.studMarks.push(5, 4, 4, 5);
      return this.studMarks;
    } else {
      return null;
    }
  }
  getScholarship() {
    if (this.isStudent && this.getAverageMark() >= 4.5) {
      return `Ви отримали 1400 грн. стипендії`;
    } else {
      return null;
    }
  }
}

const budgetStudent1 = new BudgetStudent(`НУ ЛП`, `2`, `Степан Бандера`);
console.log(budgetStudent1.marks);
console.log(budgetStudent1.getAverageMark());
console.log(budgetStudent1.getScholarship());
