const timeOptions = [
  {
    value: "07:00-09:00",
    label: "07:00-09:00",
  },
  {
    value: "09:00-12:00",
    label: "09:00-12:00",
  },
  {
    value: "12:00-17:00",
    label: "12:00-17:00",
  },
  {
    value: "17:00-20:00",
    label: "17:00-20:00",
  },
  {
    value: "20:00-22:00",
    label: "20:00-22:00",
  },
];

const timeOptionsWithDay = (day) => {
  return timeOptions.map(({ value, label }) => ({
    value: `${day}-${value}`,
    label: `${day}-${label}`,
  }));
};

const dates = [
  {
    label: "Monday",
    options: timeOptionsWithDay("MON"),
  },
  {
    label: "Tuesday",
    options: timeOptionsWithDay("TUE"),
  },
  {
    label: "Wednesday",
    options: timeOptionsWithDay("WED"),
  },
  {
    label: "Thursday",
    options: timeOptionsWithDay("THU"),
  },
  {
    label: "Friday",
    options: timeOptionsWithDay("FRI"),
  },
  {
    label: "Saturday",
    options: timeOptionsWithDay("SAT"),
  },
  {
    label: "Sunday",
    options: timeOptionsWithDay("SUN"),
  },
];

export { dates };
