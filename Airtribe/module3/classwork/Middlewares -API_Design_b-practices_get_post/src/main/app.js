const express = require(`express`);
const fs = require("fs");
const Validator = require(`./helper/validator`);
const app = express();
app.listen(800, () => console.log(`they listen at port 800`));
app.use(express.json());
//const path = `./course.json`;
const fromDb = require(`./data/courses.json`);
const { isUtf8 } = require("buffer");
const { error } = require("console");
//module3\classwork\Middlewares -API_Design_b-practices\self\src\data\courses.json
app.get(`/courses`, (req, res) => {
  res.status(200).json(fromDb);
});
app.get(`/courses/byFindcourse/:coursename`, (req, res) => {
  const name = req.params.coursename;
  console.log(name);
  const findData = data.airtribe.find((x) => x.course === name);
  if (!findData) res.status(400).send("please insert data correctly");
  res.json(findData).status(200);
});
app.get(`/courses/byFiltercourse/:coursename`, (req, res) => {
  const name = req.params.coursename;
  console.log(name);
  const findData = fromDb.airtribe.filter((x) => x.course === name);
  if (!findData) res.status(400).send("please insert data correctly");
  res.json(findData).status(200);
});
//find always find the sigle value
app.get(`/courses/byFind-id/:courseid`, (req, res) => {
  const id = req.params.courseid;

  console.log(id);
  const findData = fromDb.airtribe.find((x) => x.courseId == id);
  console.log(findData);
  if (findData == 0) res.status(400).send(`please insert data correctly`);
  return res.send(findData);
});
//it find all the value it can contain more then value
app.get(`/courses/byFilter-id/:courseid`, (req, res) => {
  const id = req.params.courseid;
  console.log(id);
  const findData = fromDb.airtribe.filter((x) => x.courseId == id);
  console.log(findData);
  if (findData == 0) res.status(400).send(`please insert data correctly`);
  return res.send(findData);
});
app.post(`/courses`, (req, res) => {
  const course = req.body;

  if (Validator.validator_course_Info(course).status == true) {
    let courseDataModified = fromDb;
    courseDataModified.airtribe.push(course);
    //console.log(2);
    fs.writeFile(
      "./src/main/data/courses.json",

      JSON.stringify(courseDataModified),
      { encoding: "utf8", flag: "w" },
      function (data, err) {
        if (err) {
          console.log(2);

          return res.status(500)
            .send(`-----------------------------------------------------
          -------------------------------------------------
          `);
        } else {
          //const fromD = require(`./data/data_inserted_courses.json`);
          //console.log(fromD.airtribe);
          return res.status(201).send(courseDataModified);
        }
      }
    );
  } else {
    res.status(400).send(`please insert data correctly`);
  }
});
