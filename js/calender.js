const isLeapYear = (year) => {
  return (
    (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  );
};
const getFebDays = (year) => {
  return isLeapYear(year) ? 29 : 28;
};
let calendar = document.querySelector(".calendar");
const month_names = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month_picker = document.querySelector("#month-picker");
const dateFormate = document.querySelector(".date-formate");

const generateCalendar = (month, year) => {
  let calendar_days = document.querySelector(".dates");
  calendar_days.innerHTML = "";

  let calendar_header_year = document.querySelector(".year");
  let calendar_header_month = document.querySelector(".month");

  let days_of_month = [
    31,
    getFebDays(year),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  let currentDate = new Date();

  calendar_header_year.innerHTML = year;
  calendar_header_month.innerHTML = month_names[month];

  let first_day = new Date(year, month);

  console.log(
    currentDate,
    first_day,
    first_day.getDay() - 1,
    days_of_month[month]
  );

  for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
    let day = document.createElement("div");

    if (i >= first_day.getDay()) {
      day.innerHTML = i - first_day.getDay() + 1;
      console.log(i - first_day.getDay() + 1);
    }
    calendar_days.appendChild(day);
  }
};

document.querySelector(".pre-month").onclick = () => {
  --currentMonth.value;
  generateCalendar(currentMonth.value, currentYear.value);
};
document.querySelector(".next-month").onclick = () => {
  ++currentMonth.value;
  generateCalendar(currentMonth.value, currentYear.value);
};

document.querySelector(".pre-year").onclick = () => {
  --currentYear.value;
  generateCalendar(currentMonth.value, currentYear.value);
};
document.querySelector(".next-year").onclick = () => {
  ++currentYear.value;
  generateCalendar(currentMonth.value, currentYear.value);
};

let currentDate = new Date();

let currentMonth = { value: currentDate.getMonth() };
let currentYear = { value: currentDate.getFullYear() };

generateCalendar(currentMonth.value, currentYear.value);
