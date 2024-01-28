const dataByDay = {
  monday: {
    availableTimes: ["15:00", "16:00", "19:00"],
    occupiedTimes: ["18:00", "20:00", "21:00", "22:00"],
  },
  tuesday: {
    availableTimes: [
      "15:00",
      "16:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ],
    occupiedTimes: ["17:00"],
  },
  wednesday: {
    availableTimes: ["16:00", "18:00", "19:00"],
    occupiedTimes: ["15:00", "20:00", "21:00", "22:00"],
  },
  thursday: {
    availableTimes: ["15:00", "17:00", "18:00", "19:00", "21:00", "22:00"],
    occupiedTimes: ["16:00", "20:00"],
  },
  friday: {
    availableTimes: ["16:00"],
    occupiedTimes: [
      "15:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ],
  },
  saturday: {
    availableTimes: ["18:00", "21:00"],
    occupiedTimes: ["15:00", "16:00", "17:00", "19:00", "20:00", "22:00"],
  },
  sunday: {
    availableTimes: ["19:00"],
    occupiedTimes: [
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "20:00",
      "21:00",
      "22:00",
    ],
  },
};

const getTimesByDay = (day) => {
  console.log(day);
  switch (day) {
    case 0:
      return dataByDay.monday;
    case 1:
      return dataByDay.tuesday;
    case 2:
      return dataByDay.wednesday;
    case 3:
      return dataByDay.thursday;
    case 4:
      return dataByDay.friday;
    case 5:
      return dataByDay.saturday;
    case 6:
      return dataByDay.sunday;
    default:
      return { error: "Improper date format" };
  }
};

const fetchAPI = (date) => {
  const result = getTimesByDay(date.getDay());
  console.log(result);
  return JSON.stringify(result);
};

const submitAPI = (formData) => {
  const timesData = getTimesByDay(formData.date.getDay());
  return true;
};

export { fetchAPI, submitAPI };
