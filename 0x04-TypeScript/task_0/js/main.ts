export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: "Stanley",
  lastName: "MN",
  age: 25,
  location: "SA,  JHB",
};
const student: Student = {
  firstName: "Vic",
  lastName: "Nyoni",
  age: 22,
  location: "SA, JHB",
};

const studentsList: Array<Student> = [
  student1,
  student,
];
