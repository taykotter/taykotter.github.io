function toggleMenu() {
    document.getElementById("navigation").classList.toggle("hide");
}


var date = new Date();
var nummonth = date.getMonth();
const month = date.toLocaleString('default', { month: 'long' });
var numberDay = date.getDate();
var day = date.getDay();
var weekday = date.toLocaleString("default", { weekday: "long" })
var year = date.getFullYear();
var todayDate = weekday + ', ' + numberDay  + ' ' + month + ' '+ year;

document.getElementById("todayDate").innerHTML = todayDate;
