const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((n) => n.firstName === employeeName || n.lastName === employeeName);
}

console.log(getEmployeeByName());
module.exports = getEmployeeByName;
