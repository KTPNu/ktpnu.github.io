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


document.addEventListener('DOMContentLoaded', function() {
    var coffeechats = 10;
    var interviews = 12;
    var socialmediapost = 13;
    var chapterattendance = 14;
    var rushattendance = 4;
    var serviceevent = 5;
    var pledgesocials = 3;
    var workshops = 22;
    var projectcompletion = 0;

    // Calculate total points
    var totalpoints = coffeechats + interviews + socialmediapost + chapterattendance +
                      rushattendance + serviceevent + pledgesocials + workshops + projectcompletion;

    // Data for the pie chart
    var data = {
        labels: [
            'Coffee Chats', 'Interviews', 'Social Media Posts', 'Chapter Attendance',
            'Rush Attendance', 'Service Event', 'Pledge Socials', 'Workshops', 'Project Completion'
        ],
        datasets: [{
            label: 'Point Distribution',
            data: [coffeechats, interviews, socialmediapost, chapterattendance, 
                   rushattendance, serviceevent, pledgesocials, workshops, projectcompletion],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(199, 199, 199, 0.2)',
                'rgba(83, 102, 255, 0.2)',
                'rgba(40, 159, 44, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(199, 199, 199, 1)',
                'rgba(83, 102, 255, 1)',
                'rgba(40, 159, 44, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Options for the chart
    var options = {
        responsive: false,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false,
            },
        }
    };

    // Render the pie chart
    var ctx = document.getElementById('pointsChart').getContext('2d');
    var pointsChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options
    });
});


