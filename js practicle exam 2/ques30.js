var students

students = [
    {
        name : "Roshan",
        age  : 21
    },
    {
        name : "Rohan",
        age : 18
    },
    {
        name : "Rohit",
        age : 19
    },
    {
        name : "mansi",
        age : 21
    }
]

const studentwithage18 = students.find(students => students.age === 18)

if(studentwithage18){
    console.log("The first student with age 18 is: ", studentwithage18.name)
}
else{
    console.log("No student find with age 18")
}