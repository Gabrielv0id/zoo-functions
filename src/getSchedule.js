const data = require('../data/zoo_data');

const { species } = data;
const weekDays = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: [
      'lions', 'tigers',
      'bears', 'penguins',
      'otters', 'frogs',
      'snakes', 'elephants',
    ],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!' },
};
const availability = (scheduleTarget) => species.find((element) => element.name === scheduleTarget)
  .availability;

const noValue = (scheduleTarget) => {
  if (scheduleTarget === undefined) {
    return weekDays;
  }
  if (!Object.keys(weekDays).includes(scheduleTarget)) {
    return weekDays;
  }
};

function getSchedule(scheduleTarget) {
  if (species.find((element) => element.name === scheduleTarget)) {
    return availability(scheduleTarget);
  } if (Object.keys(weekDays).includes(scheduleTarget)) {
    return { [scheduleTarget]: weekDays[scheduleTarget] };
  }
  return noValue(scheduleTarget);
}
console.log(getSchedule('aaaa'));
module.exports = getSchedule;
