const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const value = data.species.find((specie) => specie.name === animal).residents;
  return value.every((e) => e.age >= age);
}
console.log(getAnimalsOlderThan('lions', 7));
module.exports = getAnimalsOlderThan;
