// calling showtime fnction at every time

setInterval(showTime, 1000);
// define show time fuction
function showTime() {
  // getting current time
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  am_pm = "AM";

  if (hour >= 12) {
    if (hour > 12) hour -= 12;
    //am_pm set karna:
    am_pm = "PM";
  } else if (hour == 0) {
    hr = 12;
    am_pm = "AM";
  }

  // setting formate of time by adding 0 like 9:5PM == 09:05PM

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  // ya line hour min sec or am pm ko aik line ma lati hy

  let currentTime = hour + ":" + min + ":" + sec + am_pm;

  // Display the time

  document.getElementById("clock").innerHTML = currentTime;
}

showTime()
