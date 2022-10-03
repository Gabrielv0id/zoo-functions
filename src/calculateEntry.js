const data = require('../data/zoo_data');

const { prices } = data;
function countEntrants(entrants) {
  const obj = {
    adult: 0,
    senior: 0,
    child: 0,
  };
  entrants.forEach((element) => {
    if (element.age < 18) {
      obj.child += 1;
    } else if (element.age >= 18 && element.age < 50) {
      obj.adult += 1;
    } else if (element.age >= 50) {
      obj.senior += 1;
    }
  });
  return obj;
}

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const valores = countEntrants(entrants);
  let sum = 0;
  Object.values(valores).forEach((element, index) => {
    sum += element * Object.values(prices)[index];
    return sum;
  });
  return sum;
}
module.exports = { calculateEntry, countEntrants };
