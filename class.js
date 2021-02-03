class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Korimunnesa"
    }
}


const student1 = new Student(12,"Shuvo");
const student2 = new Student(11,"Mahi");
console.log(student1.name, student2.name);