const express = requre("express");
const router = express.Router();
const database = require("./../database_connection")

module.exports = router

// router.get("/") ...
// resposne.json({student: studentsSerializer(students)})

// router.post("/") ...

// router.put("/:id") ...

// .............

// function studentsSerializer(students) {
//     return students.map(studentSerializer)
// }

// function studentSerializer(student) {
//     return {
//         nombre: student.name
//     }
// }