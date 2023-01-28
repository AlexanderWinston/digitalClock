const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");
const amPmElement = document.getElementById("amPm");

function updateClock() {
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();
  let amPm = "AM";

  if (hour > 12) {
    hour = hour - 12;
    amPm = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  hourElement.innerText = hour;
  minuteElement.innerText = minute;
  secondElement.innerText = second;
  amPmElement.innerText = amPm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
