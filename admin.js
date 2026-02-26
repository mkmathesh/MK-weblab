const fs = require("fs");

const college = fs.readFileSync('college.json', 'utf-8');
const data = JSON.parse(college);

console.log(data.IT.student[0]);

data.IT.student[0].gender = "male";

fs.writeFileSync('college.json', JSON.stringify(data,null,1));
