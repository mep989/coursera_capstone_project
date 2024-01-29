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
    availableTimes: ["16:00", "21:00"],
    occupiedTimes: ["15:00", "17:00", "18:00", "19:00", "20:00", "22:00"],
  },
  saturday: {
    availableTimes: ["18:00", "21:00"],
    occupiedTimes: ["15:00", "16:00", "17:00", "19:00", "20:00", "22:00"],
  },
  sunday: {
    availableTimes: ["19:00", "20:00", "21:00", "22:00"],
    occupiedTimes: ["15:00", "16:00", "17:00", "18:00"],
  },
};

const getTimesByDay = (day) => {
  switch (day) {
    case 0:
      return dataByDay.sunday;
    case 1:
      return dataByDay.monday;
    case 2:
      return dataByDay.tuesday;
    case 3:
      return dataByDay.wednesday;
    case 4:
      return dataByDay.thursday;
    case 5:
      return dataByDay.friday;
    case 6:
      return dataByDay.saturday;
    default:
      return { error: "Improper date format" };
  }
};

const fetchAPI = (date) => {
  const result = getTimesByDay(date.getDay());
  return JSON.stringify(result);
};

const submitAPI = (formData) => {
  const timesData = getTimesByDay(formData.resDate.getDay());
  if (timesData.availableTimes.includes(formData.resTime)) {
    return JSON.stringify({
      message: "Reservation Submitted!",
      type: "success",
    });
  }
  return JSON.stringify({ message: "Reservation Failed!", type: "error" });
};

export { fetchAPI, submitAPI };
