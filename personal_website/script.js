window.onload = function () {
    showDate();
}

function changeText() {
    document.getElementById("test").innerHTML = "This text just changed";
}

function alertMe() {
    window.alert("This is a test of an alert");
}

function showDate() {
    var date = new Date();
    var month = date.getMonth()
    var day = date.getDay()
    var num_date = date.getDate()
    var year = date.getFullYear()
    var hour = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()
    switch (day) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }
    switch (month) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    }
    if (seconds < 10) {
        var seconds = "0" + seconds;
    }
    document.getElementById("date_text").innerHTML = day + ", " + month + " " + num_date + ", " + year + " " + hour + ":" + minutes + ":" + seconds;
    document.getElementById("copyright").innerHTML = "<strong>Copyright © " + year + "</strong> Logan Wyas"
    setTimeout(showDate, 1000);
}