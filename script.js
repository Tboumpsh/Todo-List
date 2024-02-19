// start hamburger
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

// set time
var todos = [];
function getCurrentDate() {
  var date = new Date();
  var year = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  var currentDate = year + "-" + month + "-" + day;
  document.getElementById("currentDate").innerHTML = currentDate;
}
setInterval(getCurrentDate, 1000);
//setInterval(getCurrentTime, 1000);

// calender
const daysTag = document.querySelector(".days"),
  currentDate = document.querySelector(".current-date"),
  prevNextIcon = document.querySelectorAll(".icons span");
// getting new date, current year and month
let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();
// storing full name of all months in array
const months = [
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
const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
  let liTag = "";
  for (let i = firstDayofMonth; i > 0; i--) {
    // creating li of previous month last days
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }
  for (let i = 1; i <= lastDateofMonth; i++) {
    // creating li of all days of current month
    // adding active class to li if the current day, month, and year matched
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }
  for (let i = lastDayofMonth; i < 6; i++) {
    // creating li of next month first days
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }
  currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
  daysTag.innerHTML = liTag;
};
renderCalendar();
prevNextIcon.forEach((icon) => {
  // getting prev and next icons
  icon.addEventListener("click", () => {
    // adding click event on both icons
    // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
      // if current month is less than 0 or greater than 11
      // creating a new date of current year & month and pass it as date value
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear(); // updating current year with new date year
      currMonth = date.getMonth(); // updating current month with new date month
    } else {
      date = new Date(); // pass the current date as date value
    }
    renderCalendar(); // calling renderCalendar function
  });
});

// click button start
function goTo() {
  window.open("addTask.html", "_self");
}

// modal
let addButton = document.getElementById("add");
let modal = document.getElementById("modal");
addButton.addEventListener("click", () => [(modal.style = "display:flex")]);



// time picker 

var timeSelected = "06"
var ampmSelected = "AM"
var minSelected = "00"
var btn = document.getElementById("appt");
window.onclick = function(event) {
	if (event.target == document.getElementById("timepicker-popup-wrapper-modal_XPQS")) {
	document.getElementById("timepicker-popup-wrapper-modal_XPQS").style.display = "none";
	}
}
btn.onclick = function() {
	document.getElementById("timepicker-popup-wrapper-modal_XPQS").style.display = "block";
}

function changehourselectbackgroundnormal(el){
	el.style.backgroundColor =""
	el.style.color ="black"			
}
function changehourselectbackground_XPQS(value){
	var l = document.getElementById("timepicker-hand")
	l.style.display= "block"
	if( value == "10"){
		l.style.top = "78px"
		l.style.left = "40px"
		l.style.transform = "rotate(29deg)"	
	}
	if(value == "09"){
		l.style.top = "94px"
		l.style.left = "34px"
		l.style.transform = "rotate(0deg)"
	}
	if(value == "08"){
		l.style.top = "110px"
		l.style.left = "38px"
		l.style.transform = "rotate(-30deg)"
	}
	if(value == "07"){
		l.style.top = "122px"
		l.style.left = "50px"
		l.style.transform = "rotate(-58deg)"
	}
	if(value == "06"){
		l.style.top = "127px"
		l.style.left = "67px"
		l.style.transform = "rotate(-90deg)"
	}
	if(value == "05"){
		l.style.top = "122px"
		l.style.left = "83px"
		l.style.transform = "rotate(-119deg)"
	}
	if(value == "04"){
		l.style.top = "110px"
		l.style.left = "96px"
		l.style.transform = "rotate(-150deg)"
	}
	if(value == "03"){
		l.style.top = "94px"
		l.style.left = "unset"
		l.style.right = "35px"
		l.style.transform = "rotate(0deg)"
	}
	if(value == "02"){
		l.style.top = "78px"
		l.style.left = "95px"
		l.style.transform = "rotate(150deg)"
	}
	if(value == "01"){
		l.style.top = "65px"
		l.style.left = "84px"
		l.style.transform = "rotate(120deg)"
	}
	if(value == "11"){
		l.style.top = "66px"
		l.style.left = "50px"
		l.style.transform = "rotate(58deg)"
	}
	if(value == "12"){
		l.style.top = "60px"
		l.style.left = "67px"
		l.style.transform = "rotate(90deg)"
	}
}
function changehourselectbackground(el){
	el.style.backgroundColor = "green"
	el.style.color = "white"
	changehourselectbackground_XPQS(el.getAttribute("value"));
}
function changehourValue(el){
	timeSelected = el.getAttribute("value")
	el.style.backgroundColor = "green"
	el.style.color = "white"
	changehourselectbackground_XPQS(timeSelected);
	document.getElementById("timepicker-value-hour").innerHTML = timeSelected
	document.getElementById("timepicker-hand").style.display = "none"
	showtimepickerMinute()
}
function changeampmValue(el){
	ampmSelected = el.innerHTML
	document.getElementById("timepicker-value-ampm").textContent = ampmSelected
}
function changeminuteValue(el){
	minSelected = el.innerHTML
	document.getElementById("timepicker-hand").style.display = "none"
	document.getElementById("timepicker-value-minute").textContent = minSelected
	showtimepickerHour()
}
function showtimepickerHour(){
	document.getElementById("timepicker-time-minute").style.display = "none"
	document.getElementById("timepicker-time-hour").style.display = "block"
	document.getElementById("timepicker-hand").style.display = "block"
}
function showtimepickerMinute(){
	document.getElementById("timepicker-time-hour").style.display = "none"
	document.getElementById("timepicker-time-minute").style.display = "block"
	document.getElementById("timepicker-hand").style.display = "none"	
}
function convertTime12to24(time12h){
	var [time, modifier] = time12h.split(' ');
	var [hours, minutes] = time.split(':');
	if (hours === '12') {hours = '00';}
	if (modifier === 'PM') {hours = parseInt(hours, 10) + 12;}
	return hours+":"+minutes;
}
document.getElementById("timepicker-value-hour").addEventListener("click",function(){showtimepickerHour()});
document.getElementById("timepicker-value-minute").addEventListener("click",function(){showtimepickerMinute()});
document.getElementById("timepicker-popup-Buttons-cancel_XPSQ").addEventListener("click",function(){document.getElementById("timepicker-popup-wrapper-modal_XPQS").style.display = "none";});
document.getElementById("timepicker-popup-Buttons-ok_XPSQ").addEventListener("click",function(){
	document.getElementById("timepicker-popup-wrapper-modal_XPQS").style.display = "none";
	document.getElementById("appt").value = convertTime12to24(timeSelected +":"+minSelected+" "+ampmSelected);
});
