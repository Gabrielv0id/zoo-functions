const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

const getAllEmployees = () => {
  const employee = employees.map((element) => (
    { fullName: `${element.firstName} ${element.lastName}`,
      id: element.id,
      species: species.filter((animals) => (element.responsibleFor.includes(animals.id)))
        .map((names) => names.name),
      locations: element.responsibleFor.map((e) => species.find(({ id }) => e === id).location),
    }));
  return employee;
};

function getEmployeesCoverage(name) {
  const employee = getAllEmployees();
  if (name === undefined) {
    return employee;
  }
  if (employees.some((element) => element.firstName === name.name)
    || employees.some((element) => element.lastName === name.name)) {
    return employee.find((element) => element.fullName.split(' ').includes(name.name));
  }
  if (employees.some((element) => element.id === name.id)) {
    return employee.find((element) => element.id === name.id);
  }
  throw new Error('Informações inválidas');
}
module.exports = getEmployeesCoverage;
