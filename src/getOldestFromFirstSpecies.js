const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;
function getOldestFromFirstSpecies(id) {
  const worker = employees.find((employee) => employee.id === id);
  const animal = worker.responsibleFor[0];
  const specie = species.find((element) => animal.includes(element.id));
  const objetoAnimais = specie.residents;
  let idade = 0;
  let maisVelho;
  objetoAnimais.forEach((resident) => {
    if (idade < resident.age) {
      idade = resident.age;
      maisVelho = resident;
    }
  });
  const oldest = Object.values(maisVelho);
  return oldest;
}
module.exports = getOldestFromFirstSpecies;
