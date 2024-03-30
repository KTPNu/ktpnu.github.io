/* example JS for the frontend. In the future make this so the variables are pulled from the databse with a get request */
var fname = "William";
var lname = "Van Vuuren";
var username = "wiva8249";
var major = "Computer Science";
var year = "Junior";
var photo = "../images/Headshots/van_vuuren.JPG";

var points = 32;



/* All this stuff below is what changes the values in the html doc */
var fnameElem = document.getElementById("ffirstname");
var lnameElem = document.getElementById("flastname");
var usernameElem = document.getElementById("fusername");
var majorElem = document.getElementById("fmajor");
var yearElem = document.getElementById("fyear");
var fullnameElem = document.getElementById("profile-fullname");
var profileYearElem = document.getElementById("profile-year");
var profilePictureElem = document.getElementById("profile-picture");

fnameElem.placeholder = fname;
lnameElem.placeholder = lname;
usernameElem.placeholder = username;
majorElem.placeholder = major;
yearElem.placeholder = year;
fullnameElem.innerHTML = fname + " " + lname;
profileYearElem.innerHTML = year;
profilePictureElem.src = photo;
profilePictureElem.alt = fname + " " + lname;