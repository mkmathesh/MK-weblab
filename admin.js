const fs = require("fs");

const college = fs.readFileSync('college.json', 'utf-8');
const data = JSON.parse(college);
console.log(data.IT.student)
data.IT.student.age=33;
fs.writeFile('college.json', JSON.stringify(data, null, 2));