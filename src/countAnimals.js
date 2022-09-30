const data = require('../data/zoo_data');

const { species } = data;
function countAnimals(animal) {
  const obj = {};
  species.forEach((element) => {
    obj[element.name] = element.residents.length;
  });
  if (animal === undefined) {
    return obj;
  }
  return obj[animal.specie];
}
console.log(countAnimals({ specie: 'penguins' }));
module.exports = countAnimals;
