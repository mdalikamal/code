const express = require("express");
const app = express();
const path =
  "C:/Users/mdome/Desktop/learning/code/Airtribe/module3/classwork/Middlewares -API_Design_b-practices/self/src/data/courses.json";
app.use(express.json());
app.listen(100, () => console.log("listening on 100"));
const courseData = require(path);
//get all
app.get("/courses", (req, resp) => {
  return resp.status(200).json(courseData.airtribe);
});

app.get("/courses/:coursename", (req, resp) => {
  const course = req.params.coursename;
  console.log(course);
  // const movie = movies.find((m) => m.id === parseInt(id));
  const filteredData = courseData.airtribe.find((x) => x.course === course);
  if (!filteredData) return resp.status(400).json(`course:notfound`);
  return resp.status(200).json(filteredData);
});
app.get(`/courses/:coursename/Rate`, (req, resp) => {
  const course = req.params.coursename;
  console.log(course);
  const filteredData = courseData.airtribe.find(
    (details) => details.course === course
  );
  if (!filteredData) return resp.status(400).json(`course:data not found `);
  console.log(filteredData.averageRating);
  return resp
    .status(200)
    .json(filteredData.averageRating + ` for the ${filteredData.course}`);
});

app.post(`/courses`, (req, res) => {
  const data = req.body;
  data.courseId = courseData.airtribe.length + 1;
  courseData.airtribe.push(data);

  res.send(courseData);
});
app.post(`/courses/:course/rate`, (req, res) => {
  const data = req.body;
  courseData.airtribe.push(data);
  res.send(courseData);
});
