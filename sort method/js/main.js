// array sort

function arrSort (array){
    for (let i = 0; i< array.length-1 ;i++) {
        for (let j = 0; j< array.length-1 ; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

console.log(arrSort([5,7,9,12,343,56,89,3,2,68,131,432132312312,1,-100]));

function Student (name,grade){
    this.name=name;
    this.grade=grade;
}

let student1 = new Student("Sarkhan",98);
let student2 = new Student("Sarkhan1",98);
let student3 = new Student("Sarkhan2",55);
let student4 = new Student("Sarkhan3",50);



function findStudentByGrade (grade,students){
    for (let i = 0; i < students.length; i++) {
        if (students[i].grade === grade) {
            if(students[i].grade<=80){
                console.log(students[i].name+' ' + grade + "bal kafi");
            }
            else if(81<=students[i].grade<=90){
                console.log(students[i].name +' '+ grade + "bal yuksek weref");
            }
            else if (91<=students[i].grade<=100) {
                console.log(students[i].name+' ' + grade +"bal elaci");
            }
        }
    }
}


console.log(findStudentByGrade(98,[student1,student2,student3,student4]));