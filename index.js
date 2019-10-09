const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/students", students)

app.get("/students", (request, response) => {
    database("students").select().then(students => {
        response.json({students});
    });
});

// app.get("/students/:id", (request, response) => {
//     database("students").select().where({id: request.params.id}).first().then(student => {
//         response.json({student}).listenerCount({

//         })
//     })
// });

// app.post("/students", (request, response) => {
//     database("students")
// });

// app.put("/students/:id", (request, response) => {
//     database("students").update({

//     })
// });

app.listen(process.env.PORT || 9000, () => {
    console.log("Listening...");
})