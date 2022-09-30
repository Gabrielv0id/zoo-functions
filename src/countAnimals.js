const data = require('../data/zoo_data');

const { species } = data;
function countAnimals(animal) {
  const obj = {};
  species.forEach((element) => { obj[element.name] = element.residents.length; });

  // if (Object.keys(animal).includes('sex')) {
  //   obj[element.name] = element.residents.filter((e) => e.sex === animal.sex).length;
  //   return;
  // }
  // if (Object.keys(animal).includes('specie')) {
  //   obj[element.name] = element.residents.length;
  // }
  if (animal === undefined) {
    return obj;
  }
  if (Object.keys(animal).includes('sex')) {
    return species.find((element) => element.name === animal.specie).residents
      .filter((e) => e.sex === animal.sex).length;
  }
  return species.find((element) => element.name === animal.specie).residents.length;
}

console.log(countAnimals());
module.exports = countAnimals;
