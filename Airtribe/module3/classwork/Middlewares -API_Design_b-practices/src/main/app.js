const express = require(`express`);

const app = express();
app.listen(800, () => console.log(`they listen at port 800`));
app.use(express.json());
//const path = `./course.json`;
const data = require(`./data/courses.json`);
//module3\classwork\Middlewares -API_Design_b-practices\self\src\data\courses.json
app.get(`/courses`, (req, res) => {
  res.status(200).json(data);
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
  const findData = data.airtribe.filter((x) => x.course === name);
  if (!findData) res.status(400).send("please insert data correctly");
  res.json(findData).status(200);
});
app.get(`/courses/byFind-id/:courseid`, (req, res) => {
  const id = req.params.courseid;

  console.log(id);
  const findData = data.airtribe.find((x) => x.courseId == id);
  console.log(findData);
  if (findData == 0) res.status(400).send(`please insert data correctly`);
  return res.send(findData);
});
app.get(`/courses/byFilter-id/:courseid`, (req, res) => {
  const id = req.params.courseid;

  console.log(id);
  const findData = data.airtribe.filter((x) => x.courseId == id);
  console.log(findData);
  if (findData == 0) res.status(400).send(`please insert data correctly`);
  return res.send(findData);
});
