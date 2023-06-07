let date;
let m;
let h;
let s;
let mNo;
let mname;
let hr;
let showdays;
let months;
let daysOfweek;
let days;
let wish;
days = [
     "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
 ];
months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function time() {
  date = new Date();
  h = date.getHours();
  m = date.getMinutes();
  s = date.getSeconds();
  mNo = date.getMonth();
  daysOfweek = date.getDay();
  if (h > 12 && h <= 24) {
    hr = h - 12;
  } else if (h > 0 && h < 12) {
    hr = h;
  } else if (h == 12) {
    hr = h;
  } else if (h == 0) {
    hr = h + 12;
  }



  let pm = document.getElementById("pm");
  if (h >= 12) {
    pm.firstElementChild.innerHTML = "PM";
  } else {
    pm.firstElementChild.innerHTML = "AM";
  }
  let hrs = document.getElementById("hours");
  let mins = document.getElementById("mins");
  let secs = document.getElementById("secs");

  hrs.firstElementChild.innerHTML = hr;
  mins.firstElementChild.innerHTML = m;
  secs.firstElementChild.innerHTML = s;
  showdays = document.getElementById("day");
  wish = showdays.firstElementChild;
  if (h >= 2 && h < 12) {
    wish.innerHTML = "Good Morning⛅";
    //document.body.classList.remove("night noon even");

    document.body.classList.add("morn");
  } else if (h >= 12 && h < 17) {
    wish.innerHTML = "Good Afternoon🌞";
    document.body.classList.add("noon");
    //document.body.classList.remove("night morn even");


  } else if (h >= 17 && h < 22) {
    wish.innerHTML = "Good Evening☁";
    document.body.classList.add("even");

  } else if (h >= 22 && h <= 23 || h >= 0 && h < 2) {
    wish.innerHTML = "Good Night🌙";
    document.body.classList.add("night");

  }
  //console.log(daysOfweek);
  showdays.lastElementChild.innerHTML = "It's " + days[daysOfweek];
  console.log(`${h}:${m}:${s}`);
}
setInterval(function() {
  time()
}, 1000);

function showDate() {
  let newdate = new Date();
  let getdate = newdate.getDate();
  console.log(getdate);
  let month = newdate.getMonth();
  console.log(months[month]);
  let year = newdate.getFullYear();
  console.log(year);
  let datebox = document.body.querySelectorAll(".date")[0];
  let tdate = datebox.firstElementChild;
  tdate.innerHTML = getdate;
  let mon = datebox.children[1];
  mon.innerHTML = months[month];
  let syear = datebox.lastElementChild;
  syear.innerHTML = year;
}
setInterval(() => {
  showDate();
}, 1000);