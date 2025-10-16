function isLeapYear(year) {
    if (year % 4 !== 0) {
        alert("Not leap year.");
    }
    
    else if (year % 100 === 0 && year % 400 !== 0) {
        alert("Not leap year.");
    }
    else {
        alert("Leap year");
    }
}
isLeapYear(prompt("typea year"));
