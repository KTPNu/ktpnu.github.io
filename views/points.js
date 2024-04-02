/* example JS for the frontend. In the future make this so the variables are pulled from the databse with a get request */
var fname = "William";
var lname = "Van Vuuren";
var username = "wiva8249";
var major = "Computer Science";
var year = "Junior";
var photo = "../images/Headshots/van_vuuren.JPG";

var totalpoints = 32;
var coffeechats = 10;
var interviews = 12;
var socialmediapost = 13;
var chapterattendance = 14;
var rushattendance = 4;
var serviceevent = 5;
var pledgesocials = 3;
var workshops = 22;
var projectcompletion = 0;

/* All this stuff below is what changes the values in the html doc */
var fnameElem = document.getElementById("ffirstname");
var lnameElem = document.getElementById("flastname");
var usernameElem = document.getElementById("fusername");
var majorElem = document.getElementById("fmajor");
var yearElem = document.getElementById("fyear");
var fullnameElem = document.getElementById("profile-fullname");
var profileYearElem = document.getElementById("profile-year");
var profilePictureElem = document.getElementById("profile-picture");

var totalPointsElem = document.getElementById("total-points");
var coffeechatsElem = document.getElementById("cc-points");
var interviewsElem = document.getElementById("i-points");
var socialmediapostElem = document.getElementById("sm-points");
var chapterattendanceElem = document.getElementById("ca-points");
var rushattendanceElem = document.getElementById("ra-points");
var serviceeventElem = document.getElementById("se-points");
var pledgesocialsElem = document.getElementById("ps-points");
var workshopsElem = document.getElementById("w-points");
var projectcompletionElem = document.getElementById("pc-points");


fnameElem.placeholder = fname;
lnameElem.placeholder = lname;
usernameElem.placeholder = username;
majorElem.placeholder = major;
yearElem.placeholder = year;
fullnameElem.innerHTML = fname + " " + lname;
profileYearElem.innerHTML = year;
profilePictureElem.src = photo;
profilePictureElem.alt = fname + " " + lname;

totalPointsElem.innerHTML = totalpoints;
coffeechatsElem.innerHTML = coffeechats;
interviewsElem.innerHTML = interviews;
socialmediapostElem.innerHTML = socialmediapost;
chapterattendanceElem.innerHTML = chapterattendance;
rushattendanceElem.innerHTML = rushattendance;
serviceeventElem.innerHTML = serviceevent;
pledgesocialsElem.innerHTML = pledgesocials;
workshopsElem.innerHTML = workshops;
projectcompletionElem.innerHTML = projectcompletion;


// let pointsVals = [totalpoints, coffeechats, interviews, socialmediapost, chapterattendance, rushattendance, serviceevent, pledgesocials, workshops, projectcompletion];
// let pointsColors = ["willwuzhere", "#C47DE7", "#E87CC3", "#E87C7D", "#E8C47C", "#C4E87D", "#7EE87C", "#7EE8C4", "#7DC4E8", "#7D7DE8"];
// var pieChartElem = document.getElementById("pie-chart");

/* Takes in a list of point values and sets modifies the corresponding angles in the pie chart for each category */
// function calcPieChart(pointsVals, pointsColors, pieChartElem) {
//     var tot = 0;
//     var modifier = "conic-gradient(";
//     for (let i = 1; i < pointsVals.length; i++) {
//         var angle = Math.floor(pointsVals[i] / 52);
//         tot += angle;
//         var newSeg = " " + pointsColors[i] + " " + angle + "deg,";
//         modifier += newSeg;
//     }
//     var pointsRem = " grey " + (52 - tot) + "deg";
//     modifier += pointsRem;
//     pieChartElem.style.background-image = modifier;
//     return;
// }