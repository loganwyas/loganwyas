window.onload = function () {
    showDate();
    createAcademics();
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

class School {
    constructor(name,type) {
        this.name = name;
        this.type = type;
    }
}

const elementarySchool = new School("Oakville","Elementary School");
const middleSchool = new School("Bernard","Middle School");
const highSchool = new School("Oakville","High School");
let schools = [elementarySchool,middleSchool,highSchool];

class testScore {
    constructor(test,subject,score) {
        this.test = test;
        this.subject = subject;
        this.score = score;
    }
}

const compositeACT = new testScore("ACT","Composite",29);
const englishACT = new testScore("ACT","English",31);
const mathACT = new testScore("ACT","Math",34);
const readingACT = new testScore("ACT","Reading",23);
const scienceACT = new testScore("ACT","Science",26);
const stemACT = new testScore("ACT","STEM",30);
const compositeSAT = new testScore("SAT","Composite",1320);
const mathSAT = new testScore("SAT","Math",700);
const readingSAT = new testScore("SAT","Reading",620);
let scores = [compositeACT,englishACT,mathACT,readingACT,scienceACT,stemACT,compositeSAT,mathSAT,readingSAT];

class Club {
    constructor(name,awards) {
        this.name = name;
        this.awards = awards;
    }
}

const technologyAssociation = new Club("Technology Student Association",["First Place in Coding"]);
const honorSociety = new Club("National Honor Society","none");
const spanishSociety = new Club("National Spanish Honor Society","none");
const quizBowl = new Club("Quiz Bowl","none");
let clubs = [technologyAssociation,honorSociety,spanishSociety,quizBowl];

class gradePoint {
    constructor(type,grade) {
        this.grade = grade;
        this.type = type;
    }
}

const unweightedGPA = new gradePoint("Unweighted",3.76);
const weightedGPA = new gradePoint("Weighted",4.05);
let gpas = [unweightedGPA,weightedGPA];

function createAcademics() {
    for (i=0; i < schools.length; i++) {
        let school = schools[i];
        var li = document.createElement("li");
        li.innerHTML = "<strong>" + school.type + "</strong> - " + school.name + " " + school.type;
        var element = document.getElementById("schools");
        element.appendChild(li);
    }
    var li = document.createElement("li");
    li.innerHTML = "<strong>ACT</strong>";
    var element = document.getElementById("scores");
    element.appendChild(li);
    var ul = document.createElement("ul");
    for (i=0; i < scores.length; i++) {
        let result = scores[i];
        if (result.test === "ACT") {
            var li = document.createElement("li");
            li.innerHTML = "<strong>" + result.subject + "</strong> - " + result.score;
            ul.appendChild(li);
        }
    }
    element.appendChild(ul);
    var li = document.createElement("li");
    li.innerHTML = "<strong>SAT</strong>";
    element.appendChild(li);
    var ul = document.createElement("ul");
    for (i=0; i < scores.length; i++) {
        let result = scores[i];
        if (result.test === "SAT") {
            var li = document.createElement("li");
            li.innerHTML = "<strong>" + result.subject + "</strong> - " + result.score;
            ul.appendChild(li);
        }
    }
    element.appendChild(ul);
    for (i=0; i < clubs.length; i++) {
        let club = clubs[i];
        var li = document.createElement("li");
        li.innerHTML = club.name
        var element = document.getElementById("clubs");
        element.appendChild(li);
    }
    for (i=0; i < gpas.length; i++) {
        let gpa = gpas[i];
        var li = document.createElement("li");
        li.innerHTML = "<strong>" + gpa.type + "</strong> - " + gpa.grade;
        var element = document.getElementById("gpa");
        element.appendChild(li);
    }
}